'use client';

import React from 'react'

export default function layout({
    children
} : {
    children: React.ReactNode
}) {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
        {children}
    </div>
  )
}
