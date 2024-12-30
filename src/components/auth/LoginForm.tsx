'use client';

import React from 'react'
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { LoginSchema } from '@/schemas';
import { CardWrapper } from './CardWrapper';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { FormError } from './FormError';

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values)
  }

  return (
    <CardWrapper
        headerLabel='Welcome Back'
        backButtonLabel='Don&apos;t have an account?'
        backButtonHref='/auth/register'
        showSocial
    >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6">
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({field} ) => (
                  <FormItem>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormControl>
                      <Input
                        id='email'
                        type='email'
                        placeholder='abc@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              >
              </FormField>
              <FormField
                control={form.control}
                name='password'
                render={( {field} ) => (
                  <FormItem>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormControl>
                      <Input
                        id='password'
                        type='password'
                        placeholder='*********'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              >
              </FormField>
            </div>
            <FormError message={''} />
            <Button
              type='submit'
              className='w-full'
            >
              Login
            </Button>
          </form>
        </Form>
    </CardWrapper>
  )
}
