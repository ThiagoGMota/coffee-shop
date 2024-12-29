import Image from 'next/image'
import React from 'react'
import { abril_fatface, pt_serif } from '../fonts'
import { MoveUpRight } from 'lucide-react'
import { BtnToMenu } from './BtnToMenu'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center px-4 lg:px-16 mt-6 lg:mt-12'>
        <div className='w-full lg:w-1/2'>
        <Image 
          src='/bg-1.jpg'
          alt='background' 
          width={900}
          height={100}            
          priority
          className='w-full h-auto'
        />
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-6 xl:gap-[45px] mb-6 lg:mb-0'>
        <h1 className={`text-3xl xl:text-7xl text-amber-950 ${abril_fatface.className} text-center lg:text-left`}>
          Discover The Art <br className="hidden lg:inline"/>Of Perfect Coffee
        </h1>
        <p className='px-2 text-black font-medium text-center lg:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur eligendi doloremque exercitationem consequatur natus! Pariatur ex, voluptatum alias fugit ratione amet numquam temporibus commodi odio beatae dolorem itaque?
        </p>
        <div className='flex justify-center lg:justify-start'>
          <BtnToMenu/>
        </div>
        <div className={`text-amber-950 text-xl lg:text-2xl flex justify-between max-w-xs lg:max-w-sm mx-auto lg:mx-0 gap-8 lg:gap-0 ${pt_serif.className}`}>
          <div className='flex flex-col items-center lg:items-start'>
            <span>1K+</span>
            <span>Reviews</span>
          </div>
          <div className='flex flex-col items-center lg:items-start'>
            <span>4K+</span>
            <span>Best Sell</span>
          </div>
          <div className='flex flex-col items-center lg:items-start'>
            <span>56K+</span>
            <span>Menu</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero

