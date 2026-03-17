import { useSessionStore } from '../../../stores/sessionStore'

interface CardHeaderProps {
  memberId: string
  memberName: string
}

export function CardHeader({ memberId, memberName }: CardHeaderProps) {
  const removeFromRoster = useSessionStore((s) => s.removeFromRoster)
  const initials = memberName.split(' ').map((n) => n[0]).join('')

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-700/50">
      <div className="w-9 h-9 rounded-full bg-orange-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
        {initials}
      </div>
      <h3 className="text-base font-semibold text-zinc-50 flex-1 truncate">{memberName}</h3>
      <button
        onClick={() => removeFromRoster(memberId)}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-zinc-700 transition-colors"
        aria-label="Remove from roster"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
