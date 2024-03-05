import { service } from './api'
import {
  CreateCardType,
  EditCardType,
  ListCardResponseType,
} from '@schemas/cards'

export async function createCardsService(
  body: CreateCardType,
  userId?: string,
): Promise<void> {
  const res = await service.post<void>(`cards/create/${userId}`, body)
  return res.data
}

export async function listCardsService(
  userId?: string,
): Promise<ListCardResponseType> {
  const res = await service.get<ListCardResponseType>(`cards/${userId}`)
  return res.data
}

export async function deleteCardService(
  id: string,
  userId?: string,
): Promise<void> {
  await service.delete<void>(`cards/${userId}/card/${id}`)
}

export async function editCardService(
  id: string,
  body: EditCardType,
  userId?: string,
): Promise<void> {
  await service.patch<void>(`cards/${userId}/card/${id}`, body)
}
