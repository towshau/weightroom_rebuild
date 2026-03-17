import { cn } from '../../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'info'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
        variant === 'default' && 'bg-zinc-700 text-zinc-300',
        variant === 'success' && 'bg-emerald-900/50 text-emerald-400',
        variant === 'warning' && 'bg-amber-900/50 text-amber-400',
        variant === 'info' && 'bg-blue-900/50 text-blue-400',
        className
      )}
    >
      {children}
    </span>
  )
}
