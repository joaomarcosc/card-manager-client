import styles from './styles.module.scss'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useFormController } from './useFormController'

export function CreateCard({ setOpen }: { setOpen: (value: boolean) => void }) {
  const { controller, handleSubmit, isLoading } = useFormController({ setOpen })

  return (
    <form
      onSubmit={controller.handleSubmit(handleSubmit)}
      className={styles.createCard_wrapper}
    >
      <Input label="Titulo" {...controller.register('title')} />

      <Input label="Subtitulo" {...controller.register('subtitle')} />

      <Input label="Descricao" {...controller.register('description')} />

      <Button loading={isLoading} size="md">
        Criar card
      </Button>
    </form>
  )
}
