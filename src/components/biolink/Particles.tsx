import { useMemo } from "react";

export const Particles = ({ count = 80 }: { count?: number }) => {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        dur: Math.random() * 8 + 6,
        delay: Math.random() * -10,
        tx: (Math.random() - 0.5) * 40,
        ty: (Math.random() - 0.5) * 60,
        opacity: Math.random() * 0.5 + 0.2,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-foreground/60"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            filter: "blur(1px)",
            ["--dur" as string]: `${d.dur}s`,
            ["--delay" as string]: `${d.delay}s`,
            ["--tx" as string]: `${d.tx}px`,
            ["--ty" as string]: `${d.ty}px`,
          }}
        />
      ))}
    </div>
  );
};
