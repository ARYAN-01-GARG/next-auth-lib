'use server';

import * as z from 'zod';
import bcrpty from 'bcryptjs';
import { db } from '@/lib/db';
import { RegisterSchema } from "@/schemas";

export const register = async (values : z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error : 'All Fields are required!'}
    }
    const { name, email, password } = validatedFields.data;

    const existingUser = await db.user.findUnique({
        where : {
            email
        }
    });

    if(existingUser) {
        return { error : 'User already exists!'}
    }

    const hashedPassword = await bcrpty.hash(password, 10);

    await db.user.create({
        data : {
            name,
            email,
            password : hashedPassword
        }
    });


    return { success : 'Email sent'}
}