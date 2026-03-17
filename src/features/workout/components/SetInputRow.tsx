import { NumericInput } from '../../../components/ui/NumericInput'

interface SetInputRowProps {
  setNumber: number
  prescribedReps: string
  weightKg: number | null
  reps: number | null
  notes: string
  disabled: boolean
  onWeightChange: (val: number | null) => void
  onRepsChange: (val: number | null) => void
  onNotesChange: (val: string) => void
}

export function SetInputRow({
  setNumber,
  prescribedReps,
  weightKg,
  reps,
  notes,
  disabled,
  onWeightChange,
  onRepsChange,
  onNotesChange,
}: SetInputRowProps) {
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="w-8 text-xs text-zinc-600 text-right shrink-0">S{setNumber}</span>
      <NumericInput
        value={weightKg}
        onChange={onWeightChange}
        placeholder="--"
        suffix="kg"
        disabled={disabled}
        className="w-24"
      />
      <NumericInput
        value={reps}
        onChange={onRepsChange}
        placeholder={prescribedReps}
        disabled={disabled}
        className="w-24"
      />
      <input
        type="text"
        value={notes}
        onChange={(e) => onNotesChange(e.target.value)}
        placeholder="Notes"
        disabled={disabled}
        className="flex-1 min-w-0 h-12 px-2 rounded-lg text-sm bg-zinc-800 text-zinc-300 border border-zinc-700 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed"
      />
    </div>
  )
}
