import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";
import { withBase } from "../utils/withBase";
import { createNativeScrollSurface } from "../utils/nativeScrollSurface";

gsap.registerPlugin(ScrollTrigger);

export type SmoothScrollApi = ReturnType<typeof createNativeScrollSurface>;

// eslint-disable-next-line react-refresh/only-export-components
export let smoother: SmoothScrollApi = createNativeScrollSurface();

const Navbar = () => {
  useEffect(() => {
    const setupNavLinks = (
      scrollTo: (target: string | Element, smooth?: boolean, pos?: string) => void
    ) => {
      const links = document.querySelectorAll(".header ul a[data-href]");
      links.forEach((elem) => {
        const element = elem as HTMLAnchorElement;
        element.addEventListener("click", (e) => {
          if (window.innerWidth <= 1024) return;
          e.preventDefault();
          const section = element.getAttribute("data-href");
          if (section) scrollTo(section, true, "top top");
        });
      });
    };

    if (import.meta.env.PROD) {
      smoother = createNativeScrollSurface();
      smoother.scrollTop(0);
      setupNavLinks((target, _s, _p) => smoother.scrollTo(target));
      window.addEventListener("resize", () => ScrollTrigger.refresh());
      return;
    }

    let cancelled = false;
    let refreshSmoother: (() => void) | undefined;

    import("gsap/ScrollSmoother").then(({ ScrollSmoother }) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollSmoother);
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(true);

      setupNavLinks((target, smooth, pos) =>
        smoother.scrollTo(target, smooth, pos)
      );

      const onResize = () => {
        ScrollSmoother.refresh(true);
      };
      window.addEventListener("resize", onResize);
      refreshSmoother = () => window.removeEventListener("resize", onResize);
    });

    return () => {
      cancelled = true;
      refreshSmoother?.();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href={import.meta.env.BASE_URL} className="navbar-title" data-cursor="disable" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={withBase("/images/character.JPG")} alt="Profile" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
          AS
        </a>
        <a
          href="mailto:amarjitsinghreehal1@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          amarjitsinghreehal1@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
