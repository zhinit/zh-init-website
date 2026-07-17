interface HNMarkProps {
  className?: string
}

export function HNMark({ className }: HNMarkProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#ff6600" />
      <path d="M4.6 3.5h1.9L8 6.6l1.5-3.1h1.9L8.85 8.55v3.95h-1.7V8.55Z" fill="#fff" />
    </svg>
  )
}
