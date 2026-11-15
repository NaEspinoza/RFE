type InstagramIconProps = {
  size?: number
  className?: string
}

/** Instagram brand mark (lucide-react intentionally does not ship brand logos). */
export function InstagramIcon({ size = 18, className }: InstagramIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.2" />
      <circle cx="12" cy="12" r="4.15" />
      <circle cx="17.65" cy="6.55" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  )
}
