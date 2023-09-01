import { z } from 'zod'

export const registerValidator = z.object({
    displayName: z.string().nonempty('username must have at least 4 characters').min(4),
    confirmPassword: z.string().nonempty('password must have at least 8 characters').min(8),
    password: z.string().nonempty('password must have at least 8 characters').min(8),
    email: z.string().nonempty('enter a valid email').min(8).email(),
})