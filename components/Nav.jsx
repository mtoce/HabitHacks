"use client"

import React from 'react'
import { navLinks } from '@/constants'

const Nav = () => {
  return (
    <nav className='flex flex-row items-center justify-between p-4 bg-neutral-800'>
        {/* Logo Div Top Left */}
        <div>
            <h1 className='text-[38px]'>~ Habit Hacks ~</h1>
            {/* Insert Logo Here When Done */}
        </div>
        {/* NavLinks Container */}
        <div>
            <ul className='flex flex-row gap-6'>
                {navLinks.map((link, index) => (
                    <li key={link.id} className=''>
                        <a href={link.id}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Nav