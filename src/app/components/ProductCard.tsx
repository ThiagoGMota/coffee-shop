import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

interface CardProduct{
    srcImage:   string
    alt:        string
    productName:string
    price:      number
    description:string
}
export const ProductCard = ({
    srcImage,
    alt,
    productName, 
    price, 
    description
}:CardProduct) => {
  return (
    <Card className='border-2 border-amber-950 rounded-lg w-80'>
        <CardHeader className='relative w-full h-64 mb-4'>
            <Image 
                src={ srcImage }
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
            />            
        </CardHeader>
        <CardContent>
            <div className='flex gap-8 text-2xl font-semibold mb-2 justify-between px-1'>
                <h1>{productName}</h1>
                <span>${price}</span>
            </div>
            <p>{description}</p>
        </CardContent>
        <CardFooter className='flex justify-center items-center'>
            <Button className='bg-amber-950 rounded-3xl px-20 py-6'>Order Now</Button>
        </CardFooter>
    </Card>
  )
}
