import { atomWithStorage } from 'jotai/utils'
import { ILoginResponse } from '../services/auth'
import { useQueryClient } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '@hooks/useAuth'

export type TypeUserData = Omit<ILoginResponse['user'], 'session_id'>

function getUserAtomValue() {
  if (localStorage.getItem('token') === 'undefined') {
    return null
  }

  const user = JSON.parse(localStorage.getItem('user') ?? '{}') as TypeUserData

  if (JSON.stringify(user) === '{}') {
    return null
  }

  return user as TypeUserData
}

function getUserSessionTokenAtomValue() {
  if (localStorage.getItem('token') === 'undefined') {
    return null
  }

  const token = JSON.parse(localStorage.getItem('token') ?? 'null') as
    | string
    | null

  return token
}

export const userAtom = atomWithStorage<TypeUserData | null>(
  'user',
  getUserAtomValue(),
)

export const tokenAtom = atomWithStorage<string | null>(
  'token',
  getUserSessionTokenAtomValue(),
)

export function useAuthStore() {
  const queryClient = useQueryClient()
  const { logoutUser } = useAuth()

  const logoutUserQuery = logoutUser()

  const navigate = useNavigate()

  const [user, setUser] = useAtom(userAtom)
  const [token, setToken] = useAtom(tokenAtom)
  const isLoggedIn = Boolean(token && user?.id)

  function logout() {
    setUser(null)
    setToken(null)
    logoutUserQuery.mutate(user?.id)
    queryClient.invalidateQueries()

    navigate('/login')
  }

  function userAuthentication(user: TypeUserData, newToken: string) {
    setUser(user)
    setToken(newToken)
  }

  useEffect(() => {
    if (!token || !user) {
      navigate('/login')
    }
  }, [token, user, navigate])

  return {
    user,
    token,
    logout,
    userAuthentication,
    isLoggedIn,
  }
}
