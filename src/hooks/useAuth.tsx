import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { LoginType, RegisterType } from '../schemas/auth'
import * as authApi from '../services/auth'
import { AxiosError } from 'axios'

// Register User
export interface IRegisterOptionsVariables {
  body: RegisterType
}
type RegisterOptions = UseMutationOptions<
  void,
  AxiosError,
  IRegisterOptionsVariables
>

// Login User
export interface ILoginOptionsVariables {
  body: LoginType
}
type LoginOptions = UseMutationOptions<
  authApi.ILoginResponse,
  AxiosError,
  ILoginOptionsVariables
>

// Logout User
type LogoutOptions = UseMutationOptions<void, AxiosError, string | undefined>

export function useAuth() {
  function registerUser(options?: RegisterOptions) {
    return useMutation({
      mutationFn: async (variables) => authApi.registerService(variables.body),
      ...options,
    })
  }

  function loginUser(options?: LoginOptions) {
    return useMutation({
      mutationFn: (variables) => authApi.loginService(variables.body),
      ...options,
    })
  }

  function logoutUser(options?: LogoutOptions) {
    return useMutation({
      mutationFn: (userId) => authApi.logoutService(userId),
      ...options,
    })
  }

  return {
    registerUser,
    loginUser,
    logoutUser,
  }
}
