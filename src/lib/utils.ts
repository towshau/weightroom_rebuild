import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatWeight(kg: number | null | undefined): string {
  if (kg == null) return ''
  return kg % 1 === 0 ? String(kg) : kg.toFixed(1)
}
