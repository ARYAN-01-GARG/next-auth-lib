import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "@/schemas/index"
import bcrypt from "bcryptjs"
import { getUserByEmail } from "@/data/user";

export default {
    providers: [
        Credentials({
            async authorize(credentials){
                const validatedFields = LoginSchema.safeParse(credentials);

                if(validatedFields.success){
                    const { email, password } = validatedFields.data;

                    const user = await getUserByEmail(email);

                    if(!user || !user.password) return null;

                    const isValid = await bcrypt.compare(password, user.password);

                    if(isValid) return user;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig