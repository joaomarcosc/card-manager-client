import { useFormController } from './useFormController'
import styles from './styles.module.scss'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function LoginForm() {
  const { controller, handleSubmit, isLoading } = useFormController()

  return (
    <form
      className={styles.loginForm_wrapper}
      onSubmit={controller.handleSubmit(handleSubmit)}
    >
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

      <Button loading={isLoading}>Entrar</Button>
    </form>
  )
}
