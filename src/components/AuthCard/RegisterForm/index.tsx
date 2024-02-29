import { Button } from '../../Button'
import { Input } from '../../Input'
import { useFormController } from './useFormController'
import styles from './styles.module.scss'

export function RegisterForm() {
  const { controller, handleSubmit } = useFormController()

  return (
    <form
      className={styles.loginForm_wrapper}
      onSubmit={controller.handleSubmit(handleSubmit)}
    >
      <Input
        {...controller.register('name')}
        label="Nome"
        placeholder="Seu nome"
        error={controller.formState.errors.name?.message}
      />

      <Input
        {...controller.register('email')}
        label="E-mail"
        placeholder="Seu e-mail"
        error={controller.formState.errors.email?.message}
      />

      <Input
        {...controller.register('password')}
        label="Senha"
        placeholder="Sua senha"
        type="password"
        error={controller.formState.errors.password?.message}
      />

      <Input
        {...controller.register('confirmPassword')}
        label="Confirmar senha"
        placeholder="Confirme a senha"
        type="password"
        error={controller.formState.errors.confirmPassword?.message}
      />

      <Button>Criar conta</Button>
    </form>
  )
}
