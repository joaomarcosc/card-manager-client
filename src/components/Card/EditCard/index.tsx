import styles from './styles.module.scss'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useFormController } from './useFormController'

interface IEditCard {
  setOpen: (value: boolean) => void
  id: string
  title?: string
  subtitle?: string
  description?: string
}

export function EditCard(props: IEditCard) {
  const { controller, handleSubmit } = useFormController({
    setOpen: props.setOpen,
    id: props.id,
  })

  return (
    <form
      onSubmit={controller.handleSubmit(handleSubmit)}
      className={styles.createCard_wrapper}
    >
      <Input
        defaultValue={props.title}
        label="Titulo"
        {...controller.register('title')}
      />

      <Input
        defaultValue={props.subtitle}
        label="Subtitulo"
        {...controller.register('subtitle')}
      />

      <Input
        defaultValue={props.description}
        label="Descricao"
        {...controller.register('description')}
      />

      <Button size="md">Editar card</Button>
    </form>
  )
}
