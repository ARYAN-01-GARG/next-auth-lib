'use server';

import * as z from 'zod';
import { RegisterSchema } from "@/schemas";

export const register = async (values : z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    console.log(validatedFields);
    if(!validatedFields) {
        return { error : 'All Fields are required!'}
    }

    return { success : 'Email sent'}
}