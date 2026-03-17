import { useState, memo } from 'react'
import type { ProgramExercise, ProgramSession } from '../../types'
import { DUMMY_PROGRAMS } from '../../lib/dummyData'
import { Badge } from '../../components/ui/Badge'
import { CardHeader } from './components/CardHeader'
import { DayPicker } from './components/DayPicker'
import { BodyWeightInput } from './components/BodyWeightInput'
import { WorkoutControls } from './components/WorkoutControls'
import { ExerciseCategoryGroup } from './components/ExerciseCategoryGroup'

interface MemberWorkoutCardProps {
  memberId: string
  memberName: string
  selectedDayIndex: number | null
}

function categorizeExercises(exercises: ProgramExercise[]) {
  const primary: ProgramExercise[] = []
  const accessory: ProgramExercise[] = []
  const additional: ProgramExercise[] = []

  for (const ex of exercises) {
    const letter = ex.series_label.charAt(0).toUpperCase()
    if (letter === 'A') primary.push(ex)
    else if (letter === 'B') accessory.push(ex)
    else additional.push(ex)
  }

  return { primary, accessory, additional }
}

export const MemberWorkoutCard = memo(function MemberWorkoutCard({
  memberId,
  memberName,
  selectedDayIndex,
}: MemberWorkoutCardProps) {
  const program = DUMMY_PROGRAMS[memberId]
  const [workoutStatus, setWorkoutStatus] = useState<'not_started' | 'active' | 'completed'>('not_started')
  const [bodyWeight, setBodyWeight] = useState<number | null>(null)

  if (!program) {
    return (
      <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
        <CardHeader memberId={memberId} memberName={memberName} />
        <div className="p-6 text-center">
          <p className="text-sm text-zinc-500">No program generated yet.</p>
        </div>
      </div>
    )
  }

  const totalDays = program.sessions.length
  const session: ProgramSession | undefined = selectedDayIndex
    ? program.sessions.find((s) => s.day === selectedDayIndex)
    : undefined

  const { primary, accessory, additional } = session
    ? categorizeExercises(session.exercises)
    : { primary: [], accessory: [], additional: [] }

  const isActive = workoutStatus === 'active'

  // State 1: No day selected
  if (!selectedDayIndex) {
    return (
      <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
        <CardHeader memberId={memberId} memberName={memberName} />
        <DayPicker memberId={memberId} selectedDayIndex={null} totalDays={totalDays} />
        <div className="px-4 py-3 flex items-center gap-2">
          <Badge variant="info">{program.metadata.scheme}</Badge>
          <Badge variant="default">{program.metadata.current_rep_range}</Badge>
          <span className="text-xs text-zinc-500">
            {program.metadata.sessions_per_week}×/wk · {program.metadata.duration_weeks} wks
          </span>
        </div>
        <div className="px-4 pb-4">
          <p className="text-sm text-zinc-500 text-center py-4">Select a day to view workout</p>
        </div>
      </div>
    )
  }

  // State 2 & 3: Day selected (not started or active)
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
      <CardHeader memberId={memberId} memberName={memberName} />
      <DayPicker memberId={memberId} selectedDayIndex={selectedDayIndex} totalDays={totalDays} />

      <div className="flex items-center gap-2 px-4 pb-1">
        <Badge variant="info">{program.metadata.scheme}</Badge>
        <Badge variant="default">{program.metadata.current_rep_range}</Badge>
      </div>

      <BodyWeightInput value={bodyWeight} onChange={setBodyWeight} disabled={!isActive} />

      {workoutStatus === 'not_started' && (
        <WorkoutControls
          status="not_started"
          onStart={() => setWorkoutStatus('active')}
          onFinish={() => {}}
        />
      )}

      {workoutStatus === 'active' && (
        <WorkoutControls
          status="active"
          onStart={() => {}}
          onFinish={() => setWorkoutStatus('completed')}
        />
      )}

      {workoutStatus === 'completed' && (
        <WorkoutControls status="completed" onStart={() => {}} onFinish={() => {}} />
      )}

      <div className="px-2 pb-3">
        <ExerciseCategoryGroup category="primary" exercises={primary} isActive={isActive} />
        <ExerciseCategoryGroup category="accessory" exercises={accessory} isActive={isActive} />
        <ExerciseCategoryGroup category="additional" exercises={additional} isActive={isActive} />
      </div>
    </div>
  )
})
