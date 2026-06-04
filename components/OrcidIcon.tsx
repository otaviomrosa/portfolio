export default function OrcidIcon({ size = 16, strokeWidth = 1.6 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="8.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <line x1="8.5" y1="9.5" x2="8.5" y2="17" />
      <line x1="12.5" y1="7" x2="12.5" y2="17" />
      <path d="M12.5 7h1.5a4 4 0 0 1 0 10h-1.5" />
    </svg>
  );
}
