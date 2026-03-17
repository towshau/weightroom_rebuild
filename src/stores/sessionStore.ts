import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface RosterMember {
  memberId: string
  memberName: string
  selectedDayIndex: number | null
}

interface SessionStore {
  rosterDate: string
  roster: RosterMember[]
  addToRoster: (member: { memberId: string; memberName: string }) => void
  removeFromRoster: (memberId: string) => void
  setSelectedDay: (memberId: string, dayIndex: number) => void
  clearRoster: () => void
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}

export const useSessionStore = create<SessionStore>()(
  persist(
    (set, get) => ({
      rosterDate: todayISO(),
      roster: [],

      addToRoster: ({ memberId, memberName }) => {
        const { roster } = get()
        if (roster.some((m) => m.memberId === memberId)) return
        set({
          roster: [...roster, { memberId, memberName, selectedDayIndex: null }],
          rosterDate: todayISO(),
        })
      },

      removeFromRoster: (memberId) => {
        set({ roster: get().roster.filter((m) => m.memberId !== memberId) })
      },

      setSelectedDay: (memberId, dayIndex) => {
        set({
          roster: get().roster.map((m) =>
            m.memberId === memberId ? { ...m, selectedDayIndex: dayIndex } : m
          ),
        })
      },

      clearRoster: () => {
        set({ roster: [], rosterDate: todayISO() })
      },
    }),
    {
      name: 'weight-room-session',
      onRehydrateStorage: () => (state) => {
        if (state && state.rosterDate !== todayISO()) {
          state.roster = []
          state.rosterDate = todayISO()
        }
      },
    }
  )
)
