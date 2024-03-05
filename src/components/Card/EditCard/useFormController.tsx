import { useCard } from '@hooks/useCards'
import { CreateCardType } from '@schemas/cards'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface IFormProps {
  id: string
  setOpen: (value: boolean) => void
}

export function useFormController(props: IFormProps) {
  const queryClient = useQueryClient()
  const controller = useForm<CreateCardType>()
  const { updateCard } = useCard()

  const updateCardQuery = updateCard({
    onSuccess: () => {
      props.setOpen(false)
      toast.success('Card atualizado com sucesso')

      queryClient.invalidateQueries({
        queryKey: ['list-cards'],
      })
    },

    onError: () => {
      toast.error('Erro ao atualizar o card')
    },
  })

  function handleSubmit(data: CreateCardType) {
    updateCardQuery.mutate({ body: data, id: props.id })
  }

  return {
    isLoading: updateCardQuery.isPending,
    controller,
    handleSubmit,
  }
}
