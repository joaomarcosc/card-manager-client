import { useCard } from '@hooks/useCards'
import { CreateCardType } from '@schemas/cards'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export function useFormController({
  setOpen,
}: {
  setOpen: (value: boolean) => void
}) {
  const queryClient = useQueryClient()
  const controller = useForm<CreateCardType>()
  const { createCard } = useCard()

  const createCardQuery = createCard({
    onSuccess: () => {
      setOpen(false)
      toast.success('Card criado com sucesso')

      queryClient.invalidateQueries({
        queryKey: ['list-cards'],
      })
    },

    onError: () => {
      toast.error('Erro ao criar o card')
    },
  })

  function handleSubmit(data: CreateCardType) {
    createCardQuery.mutate({ body: data })
  }

  return {
    loading: createCardQuery.isPending,
    controller,
    handleSubmit,
  }
}
