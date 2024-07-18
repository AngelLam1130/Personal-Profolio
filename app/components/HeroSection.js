"use client"
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mt-200 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <br></br>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                        Hello, I am{''}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Anqi (Angel) LIN',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Software Engineer',
                            1000,
                            'Esports Producer',
                            1000,
                            'Project Manager',
                            1000,
                            'Solo Traveler',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                {/* <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
                    ABCDEFGHIJKLMN
                </p> */}
                <br></br>
                <br></br>
                <div>
                    <a 
                        href='https://www.linkedin.com/in/anqi-lin-52a361269/'
                        className='ml-4 px-4 py-2 w-auto sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-200 via-yellow-500 to-orange-500 hover:bg-slate-200 text-black text-bold'>
                        LinkedIn
                    </a>
                    <a 
                        href='https://github.com/AngelLam1130'
                        className='px-4 py-2 w-auto sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-200 via-yellow-500 to-orange-500 hover:bg-slate-200 text-black text-bold'>
                        Github
                    </a>
                    {/* <a 
                        href='https://www.instagram.com/lin.anqi.10/'
                        className='mr-4 px-4 py-2 w-auto sm:w-fit rounded-full bg-gradient-to-br from-yellow-200 via-yellow-500 to-orange-500 hover:bg-slate-200 text-black text-bold'>
                        Ins
                    </a> */}
                {/* </div>
                <div>
                    <br></br> */}
                    {/* <a 
                        href='https://drive.google.com/file/d/1kvVC4sAEAGSpO8yAZqp40S4eSHVFjthg/view?usp=sharing'
                        className='mr-4 px-4 py-2 w-auto sm:w-fit rounded-full bg-gradient-to-br from-yellow-200 via-yellow-500 to-orange-500 hover:bg-slate-200 text-black text-bold'>
                        Resume
                    </a> */}
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-10 lg:mt-0'>
                <div className="rounded-full bg-[#181818] w-[380px] h-[380px] relative">
                    <Image
                        src = '/images/hero-image.png'
                        alt = 'hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={380}
                        height={380}
                    />
                </div>
            </div>
        </div>
    
    </section>
  )
}
