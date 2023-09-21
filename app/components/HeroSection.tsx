"use client"
import Link from 'next/link';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Hello, I'm{''}
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
                        className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        LinkedIn
                    </a>
                    <a 
                        href='https://github.com/AngelLam1130'
                        className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        Github
                    </a>
                    <a 
                        href='https://www.instagram.com/lin.anqi.10/'
                        className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        Instagram
                    </a>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-[#181818] w-[500px] h-[500px] relative">
                    <img
                        src = '/images/hero-image.png'
                        alt = 'hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    
    </section>
  )
}
