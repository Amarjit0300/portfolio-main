import type { ComponentProps } from "react";
import { withBase } from "../utils/withBase";

const RESUME_PDF = "/Resume_Amarjit_Singh.pdf";

type Props = Omit<ComponentProps<"a">, "href" | "target" | "rel" | "onClick">;

/** Opens the resume PDF in a new tab; avoids default navigation being blocked by scroll handlers. */
export function ResumePdfLink({ children, ...rest }: Props) {
  const href = withBase(RESUME_PDF);
  return (
    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      {children}
    </a>
  );
}
