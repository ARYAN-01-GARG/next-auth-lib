'use client';

import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';

export default function Social() {
  return (
    <div className='w-full flex items-center gap-x-2'>
        <Button
            size={'lg'}
            className='w-full'
            variant={'outline'}
            onClick={() => {}}
        >
            <FcGoogle size={30} className='h-5 w-5 '/>
        </Button>
        <Button
            size={'lg'}
            className='w-full'
            variant={'outline'}
            onClick={() => {}}
        >
            <FaGithub size={30} className='h-5 w-5 '/>
        </Button>
    </div>
  )
}
