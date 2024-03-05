import { z } from 'zod'

// Create Card Params
export const CreateCardSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().optional(),
  description: z.string().optional(),
})
export type CreateCardType = z.infer<typeof CreateCardSchema>

// List Cards Params
export const ListCardParamsSchema = z.object({
  userId: z.string().min(1),
})
export type ListCardParamsType = z.infer<typeof ListCardParamsSchema>

// List Cards Params
export const ListCardResponseSchema = z.object({
  cards: z.array(
    z.object({
      id: z.string().min(1),
      title: z.string().min(1),
      subtitle: z.string().min(1),
      description: z.string().min(1),
    }),
  ),
})
export type ListCardResponseType = z.infer<typeof ListCardResponseSchema>

// Create Card Params
export const EditCardSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
})
export type EditCardType = z.infer<typeof EditCardSchema>
