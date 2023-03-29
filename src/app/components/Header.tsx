'use client'

import Link from "next/link"

import { Josefin_Sans } from "next/font/google"
import { CiMenuFries } from "react-icons/ci"
import { BsArrowRight } from "react-icons/bs"
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
        <header className="z-50 absolute top-0 left-0 w-full p-5 flex items-center justify-end sm:justify-center">
            <nav>
                <ul className={`first:children:sm:hidden first:children:flex ${josefin.className} flex children:hidden children:sm:flex gap-10 text-white uppercase first:children:rounded-full first:children:p-3 children:p-1 first:children:border children:border-b children:border-transparent hover:children:border-white children:duration-75 children:ease-linear`}>
                    <motion.li whileHover={{ scale: 1.2, rotate: 90 }} onClick={() => menuHandler()}className="text-2xl cursor-pointer"> 
                        <CiMenuFries /> 
                    </motion.li>
                    <li> <Link href="">Home</Link> </li>
                    <li> <Link href="">Projects</Link> </li>
                    <li> <Link href="">My Stack</Link> </li>
                    <li> <Link href="">About</Link> </li>
                </ul>
                <LazyMotion features={domAnimation}>
                    {menuOpen && (                    
                        <m.div key="modal" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="z-50 absolute inset-0 w-full h-screen bg-gradient-to-b from-zinc-800 to-zinc-900">
                            <div className="flex items-center justify-between w-full p-5 text-white border-b">
                                <h2 className="pl-3 font-bold">Menu</h2>
                                <m.span 
                                whileHover={{ scale: 1.2, rotate: 90 }} 
                                initial={{rotate: 90}}
                                animate={{rotate: 0}}
                                onClick={() => menuHandler()}
                                className="p-3 text-2xl cursor-pointer border border-transparent rounded-full hover:border-white"
                                >
                                    <GrClose className="children:stroke-white"/>
                                </m.span>
                            </div>
                            <ul className="p-5 children:flex children:pr-2 children:children:items-center children:children:justify-between children:children:flex children:children:px-3 children:children:py-5 children:children:w-full">
                                <li> <Link href=""> <span>Home</span> <span> <BsArrowRight/> </span> </Link> </li>
                                <li> <Link href=""> <span>Projects</span> <span> <BsArrowRight/> </span> </Link> </li>
                                <li> <Link href=""> <span>My Stack</span> <span> <BsArrowRight/> </span> </Link> </li>
                                <li> <Link href=""> <span>About</span> <span> <BsArrowRight/> </span> </Link> </li>
                            </ul>
                        </m.div>
                    )}
                </LazyMotion>
            </nav>
        </header>
    )
}