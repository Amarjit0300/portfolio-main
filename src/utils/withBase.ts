/** Public assets in `public/` — required when `base` is not `/` (e.g. GitHub Pages project site). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
