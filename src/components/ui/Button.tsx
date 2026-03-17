import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-lg transition-colors active:scale-[0.98]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-11 px-4 text-sm',
        size === 'lg' && 'h-14 px-6 text-base',
        variant === 'primary' && 'bg-emerald-600 text-white hover:bg-emerald-500',
        variant === 'secondary' && 'bg-zinc-700 text-zinc-100 hover:bg-zinc-600',
        variant === 'danger' && 'bg-red-600 text-white hover:bg-red-500',
        variant === 'ghost' && 'bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
