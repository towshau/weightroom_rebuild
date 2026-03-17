import { useSessionStore } from '../../stores/sessionStore'
import { MemberWorkoutCard } from '../../features/workout/MemberWorkoutCard'

export function WorkoutGrid() {
  const roster = useSessionStore((s) => s.roster)

  if (roster.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="text-5xl mb-4 opacity-30">🏋️</div>
          <h2 className="text-xl font-semibold text-zinc-400 mb-2">No members on the roster</h2>
          <p className="text-sm text-zinc-500">Search and add members above to start your session.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pb-8">
      {roster.map((member) => (
        <MemberWorkoutCard
          key={member.memberId}
          memberId={member.memberId}
          memberName={member.memberName}
          selectedDayIndex={member.selectedDayIndex}
        />
      ))}
    </div>
  )
}
