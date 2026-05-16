import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContextValue'

const storageKey = 'wfs-cv-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.localStorage.getItem(storageKey) || 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(storageKey, theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
