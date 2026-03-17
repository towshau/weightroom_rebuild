import type { Member, SetLog } from '../types'
import type { ProgramPayload } from '../types'

export const DUMMY_MEMBERS: Member[] = [
  { id: '1', member_name: 'Amin A', coach_id: 'c1', gym_string: 'BLIGH', current_status: 'active' },
  { id: '2', member_name: 'Sarah Brennan', coach_id: 'c1', gym_string: 'BLIGH', current_status: 'active' },
  { id: '3', member_name: 'Chris Allenby', coach_id: 'c1', gym_string: 'BRIDGE', current_status: 'active' },
  { id: '4', member_name: 'David Anthony', coach_id: 'c2', gym_string: 'BLIGH', current_status: 'active' },
  { id: '5', member_name: 'Ehsan Amiri', coach_id: 'c2', gym_string: 'COLLIN', current_status: 'active' },
  { id: '6', member_name: 'Michael Abrahams', coach_id: 'c1', gym_string: 'BLIGH', current_status: 'active' },
  { id: '7', member_name: 'Rohan Advani', coach_id: 'c2', gym_string: 'BRIDGE', current_status: 'active' },
  { id: '8', member_name: 'Stacee Agland', coach_id: 'c1', gym_string: 'BLIGH', current_status: 'active' },
  { id: '9', member_name: 'Sam Ahmed', coach_id: 'c2', gym_string: 'COLLIN', current_status: 'active' },
  { id: '10', member_name: 'Jeremy Anderson', coach_id: 'c1', gym_string: 'BLIGH', current_status: 'active' },
  { id: '11', member_name: 'Brigid Archibald', coach_id: 'c2', gym_string: 'BRIDGE', current_status: 'active' },
  { id: '12', member_name: 'Mansour Alameri', coach_id: 'c1', gym_string: 'BLIGH', current_status: 'active' },
]

function makeProgram(overrides?: Partial<ProgramPayload['metadata']>): ProgramPayload {
  return {
    metadata: {
      scheme: 'GPP',
      sessions_per_week: 3,
      current_rep_range: '8-10',
      duration_weeks: 6,
      ...overrides,
    },
    sessions: [
      {
        day: 1,
        exercises: [
          {
            series_label: 'A1', exercise_name: 'Press - Cable - Mid Pulley', exercise_id: 'e1',
            tags: 'Horizontal Press', sets: [{ set_number: 1, reps: '8-10' }, { set_number: 2, reps: '8-10' }, { set_number: 3, reps: '8-10' }],
          },
          {
            series_label: 'A2', exercise_name: 'Reverse Fly - Mid Pulley - Standing', exercise_id: 'e2',
            tags: 'Horizontal Pull', sets: [{ set_number: 1, reps: '10-12' }, { set_number: 2, reps: '10-12' }, { set_number: 3, reps: '10-12' }],
          },
          {
            series_label: 'B1', exercise_name: 'Deadlift - Trap Bar - High Handles', exercise_id: 'e3',
            tags: 'Hip Dominant', sets: [{ set_number: 1, reps: '8' }, { set_number: 2, reps: '8' }, { set_number: 3, reps: '8' }],
          },
          {
            series_label: 'C1', exercise_name: 'Split Squat - Dumbbell', exercise_id: 'e4',
            tags: 'Lower Body Push', sets: [{ set_number: 1, reps: '8' }, { set_number: 2, reps: '8' }, { set_number: 3, reps: '8' }],
          },
          {
            series_label: 'C2', exercise_name: 'Pulldown - Medium Grip - Neutral', exercise_id: 'e5',
            tags: 'Vertical Pull', sets: [{ set_number: 1, reps: '8-10' }, { set_number: 2, reps: '8-10' }],
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            series_label: 'A1', exercise_name: 'Squat - Barbell - Back', exercise_id: 'e6',
            tags: 'Lower Body Push', sets: [{ set_number: 1, reps: '6-8' }, { set_number: 2, reps: '6-8' }, { set_number: 3, reps: '6-8' }],
          },
          {
            series_label: 'A2', exercise_name: 'RDL - Barbell', exercise_id: 'e7',
            tags: 'Hip Dominant', sets: [{ set_number: 1, reps: '8-10' }, { set_number: 2, reps: '8-10' }, { set_number: 3, reps: '8-10' }],
          },
          {
            series_label: 'B1', exercise_name: 'Lunge - Dumbbell - Walking', exercise_id: 'e8',
            tags: 'Lower Body Push', sets: [{ set_number: 1, reps: '8' }, { set_number: 2, reps: '8' }, { set_number: 3, reps: '8' }],
          },
          {
            series_label: 'B2', exercise_name: 'Leg Curl - Seated', exercise_id: 'e9',
            tags: 'Lower Body Pull', sets: [{ set_number: 1, reps: '10-12' }, { set_number: 2, reps: '10-12' }, { set_number: 3, reps: '10-12' }],
          },
          {
            series_label: 'C1', exercise_name: 'Calf Raise - Standing', exercise_id: 'e10',
            tags: 'Lower Leg', sets: [{ set_number: 1, reps: '12-15' }, { set_number: 2, reps: '12-15' }],
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            series_label: 'A1', exercise_name: 'Press - Dumbbell - Incline', exercise_id: 'e11',
            tags: 'Horizontal Press', sets: [{ set_number: 1, reps: '8-10' }, { set_number: 2, reps: '8-10' }, { set_number: 3, reps: '8-10' }],
          },
          {
            series_label: 'A2', exercise_name: 'Row - Cable - Seated', exercise_id: 'e12',
            tags: 'Horizontal Pull', sets: [{ set_number: 1, reps: '8-10' }, { set_number: 2, reps: '8-10' }, { set_number: 3, reps: '8-10' }],
          },
          {
            series_label: 'B1', exercise_name: 'Shoulder Press - Dumbbell', exercise_id: 'e13',
            tags: 'Vertical Press', sets: [{ set_number: 1, reps: '8-10' }, { set_number: 2, reps: '8-10' }],
          },
          {
            series_label: 'C1', exercise_name: 'Bicep Curl - Dumbbell', exercise_id: 'e14',
            tags: 'Elbow Flexion', sets: [{ set_number: 1, reps: '10-12' }, { set_number: 2, reps: '10-12' }],
          },
          {
            series_label: 'C2', exercise_name: 'Tricep Extension - Cable', exercise_id: 'e15',
            tags: 'Elbow Extension', sets: [{ set_number: 1, reps: '10-12' }, { set_number: 2, reps: '10-12' }],
          },
        ],
      },
    ],
  }
}

export const DUMMY_PROGRAMS: Record<string, ProgramPayload> = {
  '1': makeProgram(),
  '2': makeProgram({ scheme: 'Strength', current_rep_range: '4-6' }),
  '3': makeProgram({ sessions_per_week: 4, current_rep_range: '6-8' }),
  '4': makeProgram({ scheme: 'Hypertrophy', current_rep_range: '10-12' }),
  '5': makeProgram(),
  '6': makeProgram({ scheme: 'Strength', current_rep_range: '6-8' }),
}

export function getDummyLastSessionSets(exerciseId: string, setCount: number): Pick<SetLog, 'weight_kg' | 'reps'>[] {
  const weights: Record<string, number> = {
    e1: 40, e2: 12, e3: 80, e4: 16, e5: 45,
    e6: 60, e7: 50, e8: 20, e9: 30, e10: 40,
    e11: 24, e12: 55, e13: 20, e14: 10, e15: 15,
  }
  const reps: Record<string, number> = {
    e1: 8, e2: 10, e3: 8, e4: 8, e5: 10,
    e6: 6, e7: 8, e8: 8, e9: 10, e10: 12,
    e11: 8, e12: 9, e13: 8, e14: 10, e15: 10,
  }
  const w = weights[exerciseId] ?? 20
  const r = reps[exerciseId] ?? 8
  return Array.from({ length: setCount }, (_, i) => ({
    weight_kg: w,
    reps: Math.max(r - i, r - 2),
  }))
}
