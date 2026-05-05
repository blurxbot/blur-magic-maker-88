import { useEffect, useState } from "react";

export const EnterOverlay = ({ onEnter }: { onEnter: () => void }) => {
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") trigger();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });
  const trigger = () => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(onEnter, 500);
  };
  return (
    <button
      onClick={trigger}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      aria-label="Enter site"
    >
      <span className="text-lg tracking-wide text-foreground/90 animate-pulse-soft">click to enter...</span>
    </button>
  );
};
