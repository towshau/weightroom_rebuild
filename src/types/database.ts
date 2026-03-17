export interface Member {
  id: string
  member_name: string
  coach_id: string | null
  gym_string: string | null
  current_status: string
}

export interface SessionLog {
  id: string
  member_id: string
  program_generated_id: string | null
  session_day_index: number
  session_date: string
  started_at: string | null
  ended_at: string | null
  status: 'draft' | 'active' | 'completed'
}

export interface SetLog {
  id: string
  session_log_id: string
  exercise_id: string
  exercise_name: string
  series_label: string | null
  set_number: number
  prescribed_reps: string | null
  weight_kg: number | null
  reps: number | null
  notes: string | null
  source: 'manual' | 'copy_forward'
}

export interface MemberBodyWeight {
  id: string
  member_id: string
  weight_kg: number
  logged_at: string
}
