import { z } from 'zod'

export const loginValidator = z.object({
    password: z.string().nonempty('password must have at least 8 characters').min(8),
    email: z.string().nonempty('enter a valid email').min(8).email(),
})