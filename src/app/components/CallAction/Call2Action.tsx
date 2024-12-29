import Image from 'next/image'
import React from 'react'
import { BtnToMenu } from '../BtnToMenu'
import { abril_fatface } from '@/app/fonts'

export const Call2Action = () => {
  return (
    <main className='flex flex-col justify-center items-center px-4 bg-[#F4EFF1] pt-12
    lg:flex-row lg:px-20'>
        <div className=' flex w-80  mb-12 lg:order-2 lg:w-1/2 lg:justify-end '>
            <Image
                src={'/picture-1.png'}
                alt='picture'
                width={550}
                height={300}
                className='rounded-lg'
            />
        </div>
        <div className='flex flex-col items-baseline gap-6 pb-12 lg:order-1 lg:w-1/2'>
            <h1 className={`text-3xl ${abril_fatface.className}`}>Order Your Favorite Coffe Right Now</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, autem totam earum quisquam aliquam ipsum harum accusamus, fugiat nobis quibusdam fuga maxime quae ea, praesentium qui! Corrupti eum fuga voluptatum.
            </p>
            <BtnToMenu/>
        </div>
    </main>
  )
}
