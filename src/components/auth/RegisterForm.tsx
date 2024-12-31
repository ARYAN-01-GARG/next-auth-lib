'use client';

import React, { useState, useTransition } from 'react'
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
import { RegisterSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/auth/FormError';
import { FormSuccess } from '@/components/auth/FormSuccess';
import { register } from '@/actions/register';
import { CardWrapper } from '@/components/auth/CardWrapper';

export default function RegisterForm() {

  const [error , setError ] = useState<string | undefined>('');
  const [success , setSuccess ] = useState<string | undefined>('');
  const [isPending , startTransition ] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name:'',
      email: '',
      password: ''
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('');
    setSuccess('');
    startTransition(() => {
      register(values)
        .then((data) => {
          setSuccess(data.success);
          setError(data.error);
        })
    })
  }

  return (
    <CardWrapper
        headerLabel='Create an Account'
        backButtonLabel='Already have an account?'
        backButtonHref='/auth/login'
        showSocial
    >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6">
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({field} ) => (
                  <FormItem>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <FormControl>
                      <Input
                        id='name'
                        type='text'
                        disabled={isPending}
                        placeholder='john doe'
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
            <FormError message={error}/>
            <FormSuccess message={success}/>
            <Button
              type='submit'
              className='w-full'
              disabled={isPending}
            >
              Create an account
            </Button>
          </form>
        </Form>
    </CardWrapper>
  )
}
