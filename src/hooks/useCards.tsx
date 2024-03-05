import { CreateCardType, EditCardType } from '@schemas/cards'
import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import * as cardsService from '../services/cards'
import { useAuthStore } from '@atoms/authStore'

// Create card
export interface ICreateCardOptionsVariables {
  body: CreateCardType
}
type CreateCardOptions = UseMutationOptions<
  void,
  AxiosError,
  ICreateCardOptionsVariables
>

// Delete card
export interface IDeleteCardOptionsVariables {
  id: string
}
type DeleteCardOptions = UseMutationOptions<
  void,
  AxiosError,
  IDeleteCardOptionsVariables
>

// Delete card
export interface IUpdateCardOptionsVariables {
  id: string
  body: EditCardType
}
type UpdateCardOptions = UseMutationOptions<
  void,
  AxiosError,
  IUpdateCardOptionsVariables
>

export function useCard() {
  const { token, user } = useAuthStore()

  function createCard(options?: CreateCardOptions) {
    return useMutation({
      mutationFn: (variables) =>
        cardsService.createCardsService(variables.body, user?.id),
      ...options,
    })
  }

  function listCards() {
    const queryFn = async () => cardsService.listCardsService(user?.id)

    return useQuery({
      queryKey: ['list-cards'],
      queryFn,
      enabled: Boolean(token),
    })
  }

  function deleteCard(options?: DeleteCardOptions) {
    return useMutation({
      mutationFn: (variables) =>
        cardsService.deleteCardService(variables.id, user?.id),
      ...options,
    })
  }

  function updateCard(options?: UpdateCardOptions) {
    return useMutation({
      mutationFn: (variables) =>
        cardsService.editCardService(variables.id, variables.body, user?.id),
      ...options,
    })
  }

  return {
    createCard,
    listCards,
    deleteCard,
    updateCard,
  }
}
