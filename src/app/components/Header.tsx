'use client'

import Link from "next/link"

import { Josefin_Sans } from "next/font/google"
import { CiMenuFries } from "react-icons/ci"
import { GrClose } from "react-icons/gr"

import { motion, LazyMotion, domAnimation, m } from "framer-motion"

import { useEffect, useState } from "react"

const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200']
})

export const Header = () => {


    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => (
        setMenuOpen(false)
    ), [])

    const menuHandler = () => {
        setMenuOpen(prev => !prev)
    }

    return(
        <header className="fixed top-0 left-0 w-full p-5 flex items-center justify-end sm:justify-center">
            <nav>
                <ul className={`first:children:sm:hidden first:children:flex  ${josefin.className} flex children:hidden children:sm:flex gap-10 text-white uppercase children:border children:rounded-full children:p-3 children:border-transparent hover:children:border-white children:duration-75 children:ease-linear`}>
                    <motion.li 
                        whileHover={{ scale: 1.2, rotate: 90 }} 
                        onClick={() => menuHandler()}
                        className="text-2xl cursor-pointer"
                    > 
                        <CiMenuFries /> 
                    </motion.li>
                    <li> <Link href="">Home</Link> </li>
                    <li> <Link href="">Projects</Link> </li>
                    <li> <Link href="">About</Link> </li>
                </ul>
                <LazyMotion features={domAnimation}>
                    {menuOpen && (                    
                        <m.div key="modal" initial={{opacity: 0, x:100}} animate={{opacity: 1, x:0}} exit={{x:100, opacity:0}} className="absolute inset-0 w-full h-screen bg-gradient-to-b from-zinc-600 to-zinc-900">
                            <div className="flex items-center justify-between w-full p-5 text-white border-b">
                                <h2 className="pl-3 font-bold">Menu</h2>
                                <m.span 
                                whileHover={{ scale: 1.2, rotate: 90 }} 
                                onClick={() => menuHandler()}
                                className="p-3 text-2xl cursor-pointer border border-transparent rounded-full hover:border-white"
                                >
                                    <GrClose className="children:stroke-white"/>
                                </m.span>
                            </div>
                        </m.div>
                    )}
                </LazyMotion>
            </nav>
        </header>
    )
}