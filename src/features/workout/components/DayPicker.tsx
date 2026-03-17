import { cn } from '../../../lib/utils'
import { useSessionStore } from '../../../stores/sessionStore'

interface DayPickerProps {
  memberId: string
  selectedDayIndex: number | null
  totalDays: number
}

export function DayPicker({ memberId, selectedDayIndex, totalDays }: DayPickerProps) {
  const setSelectedDay = useSessionStore((s) => s.setSelectedDay)

  return (
    <div className="flex items-center gap-2 px-4 py-2">
      {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
        <button
          key={day}
          onClick={() => setSelectedDay(memberId, day)}
          className={cn(
            'h-9 px-4 rounded-full text-sm font-medium transition-all',
            selectedDayIndex === day
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
          )}
        >
          Day {day}
        </button>
      ))}
      <span className="ml-auto text-xs text-zinc-500">
        {selectedDayIndex ? `${selectedDayIndex} of ${totalDays}` : 'Select day'}
      </span>
    </div>
  )
}
