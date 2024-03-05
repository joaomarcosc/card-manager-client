import { useAtom } from 'jotai'
import { darkModeAtom } from './atoms/themeAtom'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import Providers from './Providers'
import { DevOnly } from './components/DevOnly'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-modal/styles.css'

function App() {
  const [darkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light',
    )
  }, [darkMode])

  return (
    <Providers>
      <RouterProvider router={router} />
      <ToastContainer />
      <DevOnly>
        <ReactQueryDevtools
          initialIsOpen={false}
          position="left"
          buttonPosition="bottom-left"
        />
      </DevOnly>
    </Providers>
  )
}

export default App
