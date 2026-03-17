import { Button } from '../../../components/ui/Button'
import { Badge } from '../../../components/ui/Badge'

interface WorkoutControlsProps {
  status: 'not_started' | 'active' | 'completed'
  onStart: () => void
  onFinish: () => void
}

export function WorkoutControls({ status, onStart, onFinish }: WorkoutControlsProps) {
  if (status === 'not_started') {
    return (
      <div className="px-4 py-2">
        <Button variant="primary" size="lg" className="w-full" onClick={onStart}>
          Start Workout
        </Button>
      </div>
    )
  }

  if (status === 'active') {
    return (
      <div className="flex items-center gap-3 px-4 py-2">
        <Badge variant="success" className="gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Active
        </Badge>
        <Button variant="secondary" size="sm" className="ml-auto" onClick={onFinish}>
          Finish Workout
        </Button>
      </div>
    )
  }

  return (
    <div className="px-4 py-2">
      <Badge variant="default">Completed</Badge>
    </div>
  )
}
