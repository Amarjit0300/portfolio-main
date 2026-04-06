import type { ComponentProps } from "react";
import { withBase } from "../utils/withBase";

const RESUME_PDF = "/Resume_Amarjit_Singh.pdf";

type Props = Omit<ComponentProps<"a">, "href" | "target" | "rel">;

/**
 * Plain link to the PDF in `public/`. We intentionally do not use window.open():
 * Safari and other browsers often block that after preventDefault(), which feels
 * like a broken resume button.
 */
export function ResumePdfLink({ children, ...rest }: Props) {
  const href = withBase(RESUME_PDF);
  return (
    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open resume PDF"
    >
      {children}
    </a>
  );
}
