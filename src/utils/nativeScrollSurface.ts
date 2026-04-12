/** Minimal surface used when ScrollSmoother is not loaded (production / static hosting). */
export function createNativeScrollSurface() {
  return {
    paused(_value?: boolean) {},
    scrollTop(value?: number) {
      if (typeof value === "number") window.scrollTo({ top: value });
    },
    scrollTo(target: string | Element, _smooth?: boolean, _position?: string) {
      const el =
        typeof target === "string" ? document.querySelector(target) : target;
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  };
}

export type ScrollSurface = ReturnType<typeof createNativeScrollSurface>;
