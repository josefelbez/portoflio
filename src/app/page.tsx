'use client'

import Image from "next/image"

import { Raleway } from 'next/font/google'

import { LazyMotion, domAnimation, m } from "framer-motion"

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { CiCircleChevDown } from 'react-icons/ci'

import Link from "next/link"
import { Header } from "./components/Header"
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useParallax(scrollYProgress, 300);

  return (
    <main className="bg-zinc-100">
      <Header />
      <section className="flex flex-col px-5 justify-center items-center gap-5 text-white">
        <div className="flex flex-col gap-10 justify-center items-center h-screen">
          <LazyMotion features={domAnimation}>
            <m.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="w-fit rounded-full overflow-hidden aspect-square">
              <Image className="max-w-[150px] object-contain" alt="My Photo" src="/me.jpg" width={250} height={250} priority />
            </m.div>
          </LazyMotion>
          <hgroup className={`${raleway.className} text-center space-y-5 md:space-y-5`}>
            <h2 className="text-2xl md:text-4xl font-bold">Welcome to my portfolio!</h2>
            <h3 className="text-md md:text-xl">My name is Josef and im a front end developer!</h3>
          </hgroup>
          <ul className="flex gap-5 text-2xl hover:children:text-zinc-300">
            <li> <Link href="http://linkedin.com/in/josefelbez" target="_blank"> <BsLinkedin /> </Link> </li>
            <li> <Link href="http://github.com/josef.elbez" target="_blank"> <BsGithub/> </Link> </li>
          </ul>
        </div>

        <div className="mb-5 text-5xl mt-auto animate-bounce cursor-pointer ease-linear duration-75 rounded-full hover:bg-white hover:text-zinc-900">
          <Link href="#2"> <CiCircleChevDown /> </Link>
        </div>
      </section>

      <section id="1" className="h-screen p-4 pb-0 flex flex-col relative text-white">
        <div ref={ref} className="h-full bg-gradient-to-b from-zinc-800 to-zinc-900 p-4 flex justify-center text-white">
          a
        </div>
      </section>

      <section id="2" className="h-screen p-4 flex flex-col relative text-white">
        <div ref={ref} className="h-full bg-gradient-to-b from-zinc-800 to-zinc-900 p-4 flex justify-center text-white">
         b 
        </div>
      </section>
      
      <motion.div className="progress" style={{ scaleX }} />
    </main>
  )
}
