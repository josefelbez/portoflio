'use client'

import Image from "next/image"

import { Raleway } from 'next/font/google'

import { motion, LazyMotion, domAnimation, m } from "framer-motion"

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

import {BsGithub, BsLinkedin} from 'react-icons/bs'
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-zinc-100">
      <section className="px-5 h-screen w-full flex flex-col gap-10 justify-center items-center text-white bg-gradient-to-b from-zinc-600 to-zinc-900">
        <LazyMotion features={domAnimation}>
          <m.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="rounded-full overflow-hidden aspect-square">
            <Image className="max-w-[150px]  md:max-w-[250px] object-contain" alt="My Photo" src="/me.jpg" width={350} height={350} priority />
          </m.div>
        </LazyMotion>
        <hgroup className={`${raleway.className} text-center space-y-5 md:space-y-10`}>
          <h2 className="text-2xl md:text-5xl font-bold">Welcome to my portfolio!</h2>
          <h3 className="text-md md:text-xl">My name is Josef and i'm a front end developer!</h3>
        </hgroup>
        <ul className="flex gap-5 text-2xl hover:children:text-zinc-300">
          <li> <Link href="http://linkedin.com/in/josefelbez" target="_blank"> <BsLinkedin /> </Link> </li>
          <li> <Link href="http://github.com/josef.elbez" target="_blank"> <BsGithub/> </Link> </li>
        </ul>
      </section>
    </main>
  )
}
