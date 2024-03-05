import { Button } from '@components/Button'
import styles from './styles.module.scss'
import { useCard } from '@hooks/useCards'
import { toast } from 'react-toastify'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { EditCard } from './EditCard'
import { Modal } from '@components/Modal'

interface IProps {
  id: string
  title?: string
  subtitle?: string
  description?: string
}

export function Card(props: IProps) {
  const queryClient = useQueryClient()
  const { deleteCard } = useCard()
  const [open, setOpen] = useState(false)
  const deleteCardMutate = deleteCard({
    onSuccess: () => {
      toast.success('Cartao deletado com sucesso')

      queryClient.invalidateQueries({
        queryKey: ['list-cards'],
      })
    },
  })

  function handleDeleteCard() {
    deleteCardMutate.mutate({ id: props.id })
  }

  return (
    <div className={styles.card_wrapper}>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EditCard
          setOpen={setOpen}
          id={props.id}
          title={props.title}
          description={props.description}
          subtitle={props.subtitle}
        />
      </Modal>
      <h1 className={styles.card__title}>{props.title}</h1>
      <h3 className={styles.card__subtitle}>{props.subtitle}</h3>

      <div className={styles.card__divider} />

      <div className={styles.card__text}>{props.description}</div>

      <div className={styles.card__footer}>
        <Button onClick={() => setOpen(true)} variant="text" size="sm">
          Editar
        </Button>
        <Button
          onClick={handleDeleteCard}
          variant="contained"
          size="sm"
          color="error"
          loading={deleteCardMutate.isPending}
        >
          Excluir
        </Button>
      </div>
    </div>
  )
}
