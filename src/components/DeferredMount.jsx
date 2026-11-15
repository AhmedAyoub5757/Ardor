import { useEffect, useRef, useState } from "react";

export default function DeferredMount({
  children,
  className = "",
  minHeight,
  rootMargin = "600px",
}) {
  const rootRef = useRef(null);
  const [mounted, setMounted] = useState(
    () =>
      typeof window === "undefined" ||
      !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setMounted(true);
        observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  return (
    <div
      ref={rootRef}
      className={className}
      style={!mounted && minHeight ? { minHeight } : undefined}
    >
      {mounted ? children : null}
    </div>
  );
}
