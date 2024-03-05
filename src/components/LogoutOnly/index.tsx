import { useAuthStore } from '@atoms/authStore'
import { Navigate, Outlet } from 'react-router-dom'

export function LogoutOnly() {
  const auth = useAuthStore()

  if (auth.isLoggedIn) {
    return <Navigate to={'/'} />
  }

  return <Outlet />
}
