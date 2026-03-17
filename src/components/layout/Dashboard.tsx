import { MemberSearch } from '../../features/roster/MemberSearch'
import { WorkoutGrid } from './WorkoutGrid'

export function Dashboard() {
  return (
    <div className="h-full flex flex-col bg-zinc-950">
      {/* Top bar */}
      <header className="shrink-0 flex items-center gap-4 px-4 py-3 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-bold tracking-tight text-zinc-50">LR</span>
          <span className="text-xs text-zinc-500 hidden sm:inline">Weight Room</span>
        </div>
        <div className="flex-1 max-w-2xl">
          <MemberSearch />
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <span className="text-xs text-zinc-500">
            {new Date().toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>
      </header>

      {/* Grid area */}
      <main className="flex-1 overflow-y-auto">
        <WorkoutGrid />
      </main>
    </div>
  )
}
