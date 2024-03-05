import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useEffect } from 'react'

function getThemeAtom() {
  if (localStorage.getItem('darkMode') === 'undefined') {
    return null
  }

  const token = JSON.parse(localStorage.getItem('darkMode') ?? 'null') as
    | boolean
    | null

  return token
}

export const darkModeAtom = atomWithStorage<boolean | null>(
  'darkMode',
  getThemeAtom(),
)

export function useThemeStore() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light',
    )
  }, [darkMode])

  return {
    darkMode,
    setDarkMode,
  }
}
