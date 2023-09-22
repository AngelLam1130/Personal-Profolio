"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const ContactSection = () => {
  return (
    <section id="projects">
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 text-center mb-20 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <br></br>
            <br></br>
           
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Nice to meet you❤️❤️❤️',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Let\'s connect🤝🤝🤝',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </h1>
        <br></br>
        <br></br>
    </section>
  )
}
