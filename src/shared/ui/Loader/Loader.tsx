export const Loader = ({
  size,
  color,
  margin,
}: {
  size: number
  color?: string
  margin?: string
}) => {
  return (
    <svg
      style={{ color, margin }}
      className="animate-[spin_2s_linear_infinite]"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" className="animate-loader-dash" />
    </svg>
  )
}
