import { NumericInput } from '../../../components/ui/NumericInput'

interface BodyWeightInputProps {
  value: number | null
  onChange: (val: number | null) => void
  disabled?: boolean
}

export function BodyWeightInput({ value, onChange, disabled }: BodyWeightInputProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-2">
      <label className="text-xs text-zinc-500 shrink-0 uppercase tracking-wide">BW</label>
      <NumericInput
        value={value}
        onChange={onChange}
        placeholder="--"
        suffix="kg"
        disabled={disabled}
        className="w-28"
      />
    </div>
  )
}
