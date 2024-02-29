import { Button } from '../../Button'
import { Input } from '../../Input'
import { useFormController } from './useFormController'
import styles from './styles.module.scss'

export function LoginForm() {
  const { controller, handleSubmit } = useFormController()
  console.log(controller.formState.errors)
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

      <Button>Entrar</Button>
    </form>
  )
}
