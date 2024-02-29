import { createBrowserRouter } from 'react-router-dom'
import { AccessPage } from '../pages/AccessPage'
import ErrorPage from '../pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AccessPage />,
    errorElement: <ErrorPage />,
  },
])
