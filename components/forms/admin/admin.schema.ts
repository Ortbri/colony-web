import { z } from 'zod'

export const loginSchema = z.object({
  data1: z.string().email(),
  data2: z.string().min(5)
})
