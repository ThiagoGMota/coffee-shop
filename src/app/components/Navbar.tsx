'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Logo } from './Logo'
import { Menu, ShoppingCart, X } from 'lucide-react'

const Navbar = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const links = [
        {'href':'/', 'nome':'HOME'},
        {'href':'/about', 'nome':'ABOUT'},
        {'href':'/menu', 'nome':'MENU'},
    ]

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className='bg-white px-4 sm:px-20 py-4'>
            <div className='flex justify-between items-center'>
                <div className='w-1/3 flex justify-start'>
                    <Logo />
                </div>
                <div className='hidden sm:flex justify-between w-1/3'>
                    {links.map((link) => (
                        <Link 
                            key={link.nome}
                            href={link.href}
                            className={clsx('text-amber-900 border-4 border-transparent',
                                { 'border-b-amber-950 font-semibold': pathname === link.href })}
                        >
                            {link.nome}
                        </Link>
                    ))}
                </div>
                <div className='w-1/3 flex justify-end'>
                    <Link href={'/carrinho'}>
                        <ShoppingCart/>
                    </Link>
                </div>
                <button onClick={toggleMenu} className='sm:hidden text-amber-900'>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className='sm:hidden mt-4'>
                    {links.map((link) => (
                        <Link 
                            key={link.nome}
                            href={link.href}
                            className={clsx('block py-2 text-amber-900 border-b border-amber-200',
                                { 'font-semibold': pathname === link.href })}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.nome}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar

