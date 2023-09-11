import { z } from 'zod'

export const loginValidator = z.object({
    password: z.string().nonempty('password must have at least 8 characters').min(8),
    email: z.string().min(8).nonempty('enter a valid email').email(),
})