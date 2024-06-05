import * as z from 'zod';

export const userValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3,{message: 'minimum of 3 characters'}).max(30),
    username: z.string().min(3, {message: 'minimum of 3 characters'}).max(10, {message:'maximum of 10 characters'}),
    bio: z.string().min(3, {message:'mimimum of 3 characters'}).max(1000, {message:'maximum of 1000 characters'}),

})
