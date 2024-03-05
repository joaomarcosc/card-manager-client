import { z } from 'zod'

export const HeaderSchema = z.object({
  Cookie: z.string().nullable(),
})
export type HeaderType = z.infer<typeof HeaderSchema>

export const LoginSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'E-mail obrigatorio' })
      .email({ message: 'E-mail invalido' }),
    password: z.string().min(1, { message: 'Senha obrigatoria' }),
  })
  .required()

export type LoginType = z.infer<typeof LoginSchema>

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: 'Nome Obrigatorio' }),
    email: z
      .string()
      .min(1, { message: 'E-mail obrigatorio' })
      .email({ message: 'E-mail invalido' }),
    password: z.string().min(1, { message: 'Senha obrigatoria' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirmar senha obrigatoria' }),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas nao sao iguais',
    path: ['confirmPassword'],
  })

export type RegisterType = z.infer<typeof RegisterSchema>
