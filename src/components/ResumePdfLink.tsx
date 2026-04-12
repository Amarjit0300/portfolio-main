import type { ComponentProps } from "react";
import resumeUrl from "../assets/Resume_Amarjit_Singh.pdf?url";

type Props = Omit<ComponentProps<"a">, "href" | "target" | "rel">;

/**
 * Resume PDF is imported with ?url so Vite emits it under dist/assets/ on every
 * build. Relying only on public/ was returning 404 on GitHub Pages for some deploys.
 */
export function ResumePdfLink({ children, ...rest }: Props) {
  return (
    <a
      {...rest}
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open resume PDF"
    >
      {children}
    </a>
  );
}
