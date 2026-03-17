import { cn } from '../../../lib/utils'
import type { ProgramExercise } from '../../../types'
import { ExerciseRow } from './ExerciseRow'

type Category = 'primary' | 'accessory' | 'additional'

const CATEGORY_CONFIG: Record<Category, { label: string; bgClass: string }> = {
  primary: { label: 'Primary Exercises', bgClass: 'bg-slate-700' },
  accessory: { label: 'Accessory Exercises', bgClass: 'bg-teal-800' },
  additional: { label: 'Additional Accessories', bgClass: 'bg-zinc-700' },
}

interface ExerciseCategoryGroupProps {
  category: Category
  exercises: ProgramExercise[]
  isActive: boolean
}

export function ExerciseCategoryGroup({ category, exercises, isActive }: ExerciseCategoryGroupProps) {
  const config = CATEGORY_CONFIG[category]

  if (exercises.length === 0) return null

  return (
    <div className="mb-2">
      <div
        className={cn(
          'flex items-center justify-between px-4 py-2.5 rounded-t-lg',
          config.bgClass
        )}
      >
        <span className="text-xs font-semibold text-white uppercase tracking-wider">
          {config.label}
        </span>
        <span className="text-xs text-white/60">{exercises.length} items</span>
      </div>
      <div className="px-3 bg-zinc-900/50 rounded-b-lg border border-t-0 border-zinc-700/30">
        {exercises.map((exercise) => (
          <ExerciseRow key={exercise.exercise_id} exercise={exercise} isActive={isActive} />
        ))}
      </div>
    </div>
  )
}
