'use client'

import { useRouter } from 'next/navigation'
import { ArrowBack, ExitButton } from './icons'

export default function BackButton() {
  const router = useRouter()
  return (
    <button type="button" className='cursor-pointer select-none' onClick={() => router.back()}>
      <ArrowBack />
    </button>
  )
}