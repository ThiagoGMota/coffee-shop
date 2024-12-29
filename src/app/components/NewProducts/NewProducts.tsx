import { abril_fatface } from '@/app/fonts'
import React from 'react'
import { ProductCard } from '../ProductCard'

export const NewProducts = () => {
  return (
    <main className='flex flex-col justify-center items-center px-4 py-12 md:py-20'>
      <div className='flex text-center flex-col gap-4 mb-8 md:mb-12 max-w-2xl'>
        <h1 className={`text-amber-950 text-3xl md:text-4xl ${abril_fatface.className}`}>
          Enjoy A New Blend Of Coffee Style
        </h1>
        <p className='text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ex, vel quod officia quos
          veniam animi eaque harum, saepe itaque
        </p>
      </div>
      <div className='w-full max-w-full overflow-x-auto pb-4 md:px-16'>
        <div className='flex flex-row gap-4 md:gap-8 min-w-max'>
          <ProductCard
            srcImage='/produto-1.png'
            alt='produto'
            productName='Arabic Caffee'
            price={20}
            description='Coffee 50% milk 50%'
          />
          <ProductCard
            srcImage='/produto-1.png'
            alt='produto'
            productName='Arabic Caffee'
            price={20}
            description='Coffee 50% milk 50%'
          />
          <ProductCard
            srcImage='/produto-2.png'
            alt='produto'
            productName='Jean Caffee'
            price={15}
            description='Coffee 50% milk 50%'
          />
          <ProductCard
            srcImage='/produto-3.png'
            alt='produto'
            productName='Black Caffee'
            price={15}
            description='Coffee 50% milk 50%'
          />
        </div>
      </div>
    </main>
  )
}

