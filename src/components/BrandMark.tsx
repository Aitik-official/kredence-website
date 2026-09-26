type BrandMarkProps = {
  className?: string;
  color?: string;
};

/** Interlocking diamond mark used across industrial sections */
export default function BrandMark({
  className = "h-4 w-4",
  color = "currentColor",
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M12 2L4 12l8 10 8-10L12 2Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.5L7.2 12 12 17.5 16.8 12 12 6.5Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
