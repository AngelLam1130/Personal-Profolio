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
            <br></br>
            <br></br>
            <br></br>
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
            <br></br>
            <br></br>
            <br></br>
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
            <br></br>
            <br></br>
            <br></br>
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
                height={700}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
                <div className='border border-gray-300 p-4 mt-10 text-justify'>
                  <h2 className='text-4xl font-bold text-[#efb14e] mb-4'>About Me</h2>
                  <p className='text-base lg:text-lg'>
                      Welcome to my website!!!
                  </p>
                  <p className='text-base lg:text-lg'>
                      A cool girl who loves travel and outdoor activities is channeling the adventurous spirit into role as <span class='text-m font-bold text-[#e7ef4e]'>SWE intern</span> and <span class='text-m font-bold text-[#e7ef4e]'>PM intern</span>.
                  </p>
                  <p className='text-base lg:text-lg'>
                      As project manager in NetEase Game for the past 3 years, I am equipped with extensive experience in cross-functional collaboration, execution cycle planning, data analytics and breaking down problems. Coding world is like a open land. I enjoy building my own architecture from scratch with my software development skills learning from curriculum at NEU, hackathons, tech communities such as RTC,Women Who Code and etc.
                  </p>
                </div>
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