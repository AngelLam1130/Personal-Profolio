"use client";
import React,{useTransition,useState} from 'react'
import { TabButton } from './TabButton';
import Image from 'next/image';

const TAB_DATA = [
    {
        title: "SWE Skills",
        id: "SWE skills",
        content: (
          <ul className="list-disc pl-2">
            <li>Next.js</li>
            <li>React.js</li>
            <li>PHP</li>
            <li>Html&CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        ),
      },
      {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
            <li>Northeastern University🇺🇸<span>M.S. Information System</span></li>
            <li>University of Shanghai for Science and Technology🇨🇳B.B.A. International Business</li>
            <li>Brest Business School🇫🇷B.B.A. International Business Management</li>
          </ul>
        ),
      },
      {
        title: "PM Skills",
        id: "PM skills",
        content: (
          <ul className="list-disc pl-2">
            <li>Budget Management</li>
            <li>Supplier Management</li>
            <li>Cross-functional Communication</li>
            <li>Media Production</li>
          </ul>
        ),
      },
];

const AboutSection = () => {
  const [tab,setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  
  const handleTabChange = (id) =>{
    startTransition(() => {
        setTab(id);
    });
  };
  
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image
                src='/images/about-image.png'
                alt = 'about image'
                width={500}
                height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Aspiring software engineer pursuing computer science degree and accomplished project manager with extensive experience in cross-functional collaboration, execution cycle planning, data analytics and breaking down problems. Experienced with utilizing JavaScript, PHP, HTML and CSS in software development. Beyond my professional life, I'm a solo traveler who has worked in France and volunteered in Africa and explored over 20 countries, even hiked on a volcano. Now, I'm channeling that adapting spirit into the changing world as product manager.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                       selectTab={()=>handleTabChange("SWE skills")} 
                       active={tab === "SWE skills"}
                    >
                        {" "}
                        SWE Skills{" "}
                    </TabButton>
                    <TabButton 
                       selectTab={()=>handleTabChange("PM skills")} 
                       active={tab === "PM skills"}
                    >
                        {" "}
                        PM Skills{" "}
                    </TabButton>
                    <TabButton 
                       selectTab={()=>handleTabChange("education")} 
                       active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>
        </div>
    </section>
  )
}


export default AboutSection;