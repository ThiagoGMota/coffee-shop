
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar'

describe('navbar component', () => {
    it('rederiza navbar', () => {
        render(<Navbar/>)

        const navBar = screen.getByRole('navigation')

        expect(navBar).toBeInTheDocument()
    })
    it('renderiza rotas', () => {
        render(<Navbar/>)

        const homeLink = screen.getByRole('link', { name: /home/i });
        const aboutLink = screen.getByRole('link', { name: /about/i });
        const menuLink = screen.getByRole('link', { name: /menu/i });

        expect(homeLink).toBeInTheDocument()
        expect(aboutLink).toBeInTheDocument()
        expect(menuLink).toBeInTheDocument()
    })
    
})