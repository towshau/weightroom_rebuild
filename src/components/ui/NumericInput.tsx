import { cn } from '../../lib/utils'

interface NumericInputProps {
  value: number | null
  onChange: (value: number | null) => void
  placeholder?: string
  suffix?: string
  disabled?: boolean
  className?: string
}

export function NumericInput({
  value,
  onChange,
  placeholder,
  suffix,
  disabled = false,
  className,
}: NumericInputProps) {
  return (
    <div className={cn('relative flex items-center', className)}>
      <input
        type="number"
        inputMode="decimal"
        value={value ?? ''}
        onChange={(e) => {
          const raw = e.target.value
          onChange(raw === '' ? null : Number(raw))
        }}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'w-full h-12 px-3 rounded-lg text-center font-mono text-base',
          'bg-zinc-800 text-zinc-50 border border-zinc-700',
          'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent',
          'placeholder:text-zinc-600',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          suffix && 'pr-10'
        )}
      />
      {suffix && (
        <span className="absolute right-3 text-xs text-zinc-500 pointer-events-none">
          {suffix}
        </span>
      )}
    </div>
  )
}
