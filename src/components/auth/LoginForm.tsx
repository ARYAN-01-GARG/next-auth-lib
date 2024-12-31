'use client';

import React, { useTransition } from 'react'
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
import { FormSuccess } from './FormSuccess';
import { login } from '@/actions/login';

export default function LoginForm() {
  const [isPending , startTransition ] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values);
    })
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
                        disabled={isPending}
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
                        disabled={isPending}
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
            <FormSuccess message={''}/>
            <Button
              type='submit'
              className='w-full'
              disabled={isPending}
            >
              Login
            </Button>
          </form>
        </Form>
    </CardWrapper>
  )
}
