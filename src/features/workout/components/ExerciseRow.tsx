import { useState, useEffect, useRef } from 'react'
import type { ProgramExercise } from '../../../types'
import { SetInputRow } from './SetInputRow'
import { getDummyLastSessionSets } from '../../../lib/dummyData'

interface SetState {
  weight_kg: number | null
  reps: number | null
  notes: string
}

interface ExerciseRowProps {
  exercise: ProgramExercise
  isActive: boolean
}

export function ExerciseRow({ exercise, isActive }: ExerciseRowProps) {
  const lastSession = getDummyLastSessionSets(exercise.exercise_id, exercise.sets.length)
  const [showHistory, setShowHistory] = useState(false)
  const prevActive = useRef(isActive)

  const [setStates, setSetStates] = useState<SetState[]>(() =>
    exercise.sets.map((_, i) => ({
      weight_kg: isActive ? lastSession[i]?.weight_kg ?? null : null,
      reps: isActive ? lastSession[i]?.reps ?? null : null,
      notes: '',
    }))
  )

  useEffect(() => {
    if (isActive && !prevActive.current) {
      setSetStates(
        exercise.sets.map((_, i) => ({
          weight_kg: lastSession[i]?.weight_kg ?? null,
          reps: lastSession[i]?.reps ?? null,
          notes: '',
        }))
      )
    }
    prevActive.current = isActive
  }, [isActive, exercise.sets, lastSession])

  const updateSet = (idx: number, patch: Partial<SetState>) => {
    setSetStates((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, ...patch } : s))
    )
  }

  const prescriptionStr = `${exercise.sets.length} × ${exercise.sets[0]?.reps ?? '?'}`
  const allFilled = isActive && setStates.every((s) => s.weight_kg != null && s.reps != null)
  const someFilled = isActive && setStates.some((s) => s.weight_kg != null || s.reps != null)

  return (
    <div className="py-2">
      {/* Exercise header */}
      <div className="flex items-center gap-2 mb-1">
        <span
          className={`w-2.5 h-2.5 rounded-full shrink-0 ${
            allFilled ? 'bg-emerald-400' : someFilled ? 'bg-amber-400' : 'bg-zinc-600'
          }`}
        />
        <span className="text-sm font-medium text-zinc-200 flex-1 truncate">
          {exercise.exercise_name}
        </span>
        <span className="text-xs text-zinc-500 shrink-0">{prescriptionStr}</span>
      </div>

      {/* Set inputs */}
      <div className="pl-5">
        {exercise.sets.map((set, i) => (
          <SetInputRow
            key={set.set_number}
            setNumber={set.set_number}
            prescribedReps={set.reps}
            weightKg={setStates[i].weight_kg}
            reps={setStates[i].reps}
            notes={setStates[i].notes}
            disabled={!isActive}
            onWeightChange={(v) => updateSet(i, { weight_kg: v })}
            onRepsChange={(v) => updateSet(i, { reps: v })}
            onNotesChange={(v) => updateSet(i, { notes: v })}
          />
        ))}

        {/* History / Swap buttons */}
        {isActive && (
          <div className="flex items-center gap-3 mt-1 mb-1">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
            >
              {showHistory ? 'Hide history' : 'History'}
            </button>
            <button className="text-xs text-zinc-500 hover:text-blue-400 transition-colors">
              Swap
            </button>
          </div>
        )}

        {/* Dummy history panel */}
        {showHistory && (
          <div className="bg-zinc-800/50 rounded-lg p-2 mb-2 border border-zinc-700/50">
            <p className="text-xs text-zinc-500 mb-1">Last 3 sessions:</p>
            {[3, 7, 14].map((daysAgo) => (
              <div key={daysAgo} className="flex items-center gap-2 text-xs text-zinc-400 py-0.5">
                <span className="w-16 text-zinc-500">
                  {new Date(Date.now() - daysAgo * 86400000).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}
                </span>
                {lastSession.map((s, i) => (
                  <span key={i} className="text-zinc-300">
                    {s.weight_kg}kg×{s.reps}
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
