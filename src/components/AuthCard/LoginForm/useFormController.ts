import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginType as FormData } from '../../../schemas/auth'
import { useAuth } from '../../../hooks/useAuth'
import { toast } from 'react-toastify'
import { useAuthStore } from '@atoms/authStore'

export function useFormController() {
  const { loginUser } = useAuth()
  const { userAuthentication, logout } = useAuthStore()

  const controller = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  })

  const loginUserMutation = loginUser({
    onSuccess: (response) => {
      const {
        user: { session_id: sessionId, ...rest },
      } = response
      userAuthentication(rest, sessionId)
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        toast.error('Credenciais invalidas')
        return
      }

      toast.error('Ocorreu um erro, tente novamente mais tarde!')

      logout()
    },
  })

  function handleSubmit(data: FormData) {
    loginUserMutation.mutate({
      body: data,
    })
  }

  return {
    controller,
    handleSubmit,
    isLoading: loginUserMutation.isPending,
  }
}
