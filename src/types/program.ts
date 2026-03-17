export interface SetPrescription {
  set_number: number
  reps: string // e.g. "8-10", "4-6"
}

export interface ProgramExercise {
  series_label: string // e.g. "A1", "A2", "B1", "C1"
  exercise_name: string
  exercise_id: string
  tags: string
  sets: SetPrescription[]
}

export interface ProgramSession {
  day: number
  exercises: ProgramExercise[]
}

export interface ProgramMetadata {
  scheme: string
  sessions_per_week: number
  current_rep_range: string
  duration_weeks: number
}

export interface ProgramPayload {
  metadata: ProgramMetadata
  sessions: ProgramSession[]
}
