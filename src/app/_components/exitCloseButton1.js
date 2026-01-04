'use client'

import { useRouter } from 'next/navigation'
import { ArrowBack, ExitButton } from './icons'

export default function ExitCloseButton({link}) {
  const router = useRouter()
  return (
    <button 
        type="button" 
        className='cursor-pointer select-none' 
        onClick={() => router.push(link ?? "#")}
    >
      <ExitButton />
    </button>
  )
}