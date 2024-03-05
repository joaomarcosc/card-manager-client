import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { RegisterSchema, RegisterType as FormData } from '../../../schemas/auth'
import { useAuth } from '../../../hooks/useAuth'
import { toast } from 'react-toastify'

export function useFormController() {
  const auth = useAuth()
  const controller = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
  })

  const registerUserMutation = auth.registerUser({
    onSuccess: () => {
      toast.success('Conta criada com sucesso!')
    },
    onError: () => {
      toast.error('Ocorreu algum erro, tente novamente mais tarde!')
    },
  })

  async function handleSubmit(data: FormData) {
    registerUserMutation.mutate({ body: data })
  }

  return {
    controller,
    handleSubmit,
  }
}
