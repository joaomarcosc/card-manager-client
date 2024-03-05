import { LoginType, RegisterType } from '@schemas/auth'
import { service } from './api'

export async function registerService(data: RegisterType): Promise<void> {
  await service.post<void>('/users/create', data)
}

export interface ILoginResponse {
  user: {
    id: string
    name: string
    email: string
    created_at: string
    updated_at: string
    session_id: string
  }
}

export async function loginService(data: LoginType): Promise<ILoginResponse> {
  const response = await service.post<ILoginResponse>('/auth/login', data)

  return response.data
}

export async function logoutService(userId?: string): Promise<void> {
  await service.post<void>(`/auth/logout/${userId}`)
}
