import { pt_serif } from '@/app/fonts'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ServiceCardProps{
    title:  string
    text:   string
    imgSrc: string
}
export const CardService = ({title, text, imgSrc}:ServiceCardProps) => {
  return (
    <Card className='w-80 shadow-2xl z-10'>
        <CardHeader className='flex justify-center items-center'>
            <Image src={imgSrc} alt='' width={70} height={100} className='p-2 rounded-full bg-[#F4EFF1]' />
        </CardHeader>
        <CardContent className='text-center'>
            <h1 className={`text-2xl mb-4 text-amber-950 font-semibold ${pt_serif.className}`}>{title}</h1>
            <p className='font-normal'>{text}</p>

        </CardContent>
        <CardFooter className='flex justify-center items-center text-amber-950'>
            <Link href={'/menu'} className='flex items-center gap-2'>
                Learn More <MoveUpRight size={12}/>
            </Link>
        </CardFooter>
    </Card>
  )
}
