export const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => (
  <span data-text={text} className={`text-glitch ${className}`}>
    {text}
  </span>
);
