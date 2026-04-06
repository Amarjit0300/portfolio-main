import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { ResumePdfLink } from "./ResumePdfLink";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;

    const cleanups: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement | null;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let raf = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        raf = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      raf = requestAnimationFrame(updatePosition);

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        document.removeEventListener("mousemove", onMouseMove);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/Amarjit0300" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com/in/amarjit-singh07" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
      </div>
      <ResumePdfLink className="resume-button">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </ResumePdfLink>
    </div>
  );
};

export default SocialIcons;
