import React from 'react'
import { Logo } from './Logo'
import { Copyright } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className='bg-purple-950 h-96 pt-20 text-white'>
      <div>
        <div className='w-1/4 flex flex-col'>
            <Logo variant='variant' />
        </div>
        <div className='w-1/4 flex flex-col'></div>
        <div className='w-1/4 flex flex-col'></div>
        <div className='w-1/4 flex flex-col'></div>
      </div>
      <div>
        <p className='flex'>2024  <Copyright className='mx-2'/>   Todos os direitos reservados</p>
      </div>
    </footer>
  )
}
