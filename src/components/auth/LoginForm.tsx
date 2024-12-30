'use client';

import React from 'react'
import { CardWrapper } from './CardWrapper';

export default function LoginForm() {
  return (
    <CardWrapper
        headerLabel='Welcome Back'
        backButtonLabel='Don&apos;t have an account?'
        backButtonHref='/auth/register'
        showSocial
    >
        Login Form
    </CardWrapper>
  )
}
