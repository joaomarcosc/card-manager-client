import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const LoginSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'E-mail obrigatorio' })
      .email({ message: 'E-mail invalido' }),
    password: z.string().min(1, { message: 'Senha obrigatoria' }),
  })
  .required()

type FormData = z.infer<typeof LoginSchema>

export function useFormController() {
  const controller = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  })

  function handleSubmit(data: FormData) {
    console.log(data)
  }

  return {
    controller,
    handleSubmit,
  }
}
