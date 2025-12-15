'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <div 
      className='cursor-pointer bg-white border py-1 px-3 flex justify-center items-center max-w-20' 
      onClick={() => router.back()}
    >
      назад
    </div>
  );
}