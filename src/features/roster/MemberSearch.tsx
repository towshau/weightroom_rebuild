import { useState, useRef, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { useSessionStore } from '../../stores/sessionStore'
import { DUMMY_MEMBERS } from '../../lib/dummyData'

export function MemberSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const debouncedQuery = useDebounce(query, 300)
  const addToRoster = useSessionStore((s) => s.addToRoster)
  const roster = useSessionStore((s) => s.roster)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const results =
    debouncedQuery.length >= 1
      ? DUMMY_MEMBERS.filter(
          (m) =>
            m.member_name.toLowerCase().includes(debouncedQuery.toLowerCase()) &&
            !roster.some((r) => r.memberId === m.id)
        )
      : []

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search members to add to roster..."
          className="w-full h-12 pl-10 pr-4 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-50 text-base placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      {open && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full max-h-64 overflow-y-auto rounded-lg bg-zinc-900 border border-zinc-700 shadow-xl">
          {results.map((member) => (
            <button
              key={member.id}
              onClick={() => {
                addToRoster({ memberId: member.id, memberName: member.member_name })
                setQuery('')
                setOpen(false)
              }}
              className="w-full px-4 py-3 text-left text-sm text-zinc-200 hover:bg-zinc-800 active:bg-zinc-700 flex items-center gap-3 border-b border-zinc-800 last:border-0"
            >
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                {member.member_name.split(' ').map((n) => n[0]).join('')}
              </div>
              <span>{member.member_name}</span>
              <span className="ml-auto text-xs text-zinc-500">{member.gym_string}</span>
            </button>
          ))}
        </div>
      )}

      {open && debouncedQuery.length >= 1 && results.length === 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-sm text-zinc-500">
          No members found
        </div>
      )}
    </div>
  )
}
