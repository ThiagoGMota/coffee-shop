import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const BtnToMenu = () => {
  return (
    <Link 
      href={'menu'}
      className='bg-amber-950 rounded-full py-1 hover:bg-orange-700 text-white flex items-center justify-between gap-4 lg:gap-7'
    >
        <p className='pl-4'>Order Now</p>
        
        <div className='text-amber-950 bg-white rounded-full mr-1'>
            <MoveUpRight size={36} />
        </div>

    </Link>
  )
}
