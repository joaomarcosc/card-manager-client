import { useAtom } from 'jotai'
import { darkModeAtom } from './atoms/themeAtom'
import { useEffect } from 'react'
import Container from './components/Container'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  const [darkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light',
    )
  }, [darkMode])

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
