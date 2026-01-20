export function UnivioLogo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {/* Upside down U (Arch) */}
            <path d="M6 18V9a6 6 0 0 1 12 0v9" />
            {/* Dot in center */}
            <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
        </svg>
    )
}
