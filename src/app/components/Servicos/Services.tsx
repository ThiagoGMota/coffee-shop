'use client'

import { abril_fatface } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import { CardService } from './CardService'

export const Services = () => {
  return (
    <section className="bg-[#F4EFF1]">
     
      <div className="relative text-center flex flex-col  mb-12">
        <Image 
            src={'/bg-3.png'} 
            alt='cafe' 
            width={150} 
            height={200} 
            className=' self-start'
        />
        <h1 className={`text-amber-950 text-4xl mb-4 ${abril_fatface.className} `}>
          Our Delicious Service
        </h1>
        <p>Lorem ipsum dolor sit amet collendus hic. Aut facere eius nemo minima rerum, laudantium</p>
        {/* Adicione aqui o conteúdo adicional da seção de serviços */}
      </div>
      <div className='flex flex-col'>
        <div className='flex items-center  justify-center gap-4 flex-col sm:flex-row sm:px-4 lg:gap-12'>
            <CardService 
                title='Coffee Types' 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. In consectetur, incidunt nisi quod veritatis neque porro asperiores eius labore' 
                imgSrc='/icon-service1.png'
            />
            <CardService 
                title='Coffee Types' 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. In consectetur, incidunt nisi quod veritatis neque porro asperiores eius labore' 
                imgSrc='/icon-service2.png'
            />
            <CardService 
                title='Coffee Types' 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. In consectetur, incidunt nisi quod veritatis neque porro asperiores eius labore' 
                imgSrc='/icon-service3.png'
            />
        </div>
      <Image 
            src={'/bg-3.png'} 
            alt='cafe' 
            width={150} 
            height={200} 
            className=' self-end'
        />
      </div>
    </section>
  )
}

