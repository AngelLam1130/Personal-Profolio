"use client";
import React,{useTransition,useState} from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        ),
      },
      {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
            <li>Fullstack Academy of Code</li>
            <li>University of California, Santa Cruz</li>
          </ul>
        ),
      },
      {
        title: "Certifications",
        id: "certifications",
        content: (
          <ul className="list-disc pl-2">
            <li>AWS Cloud Practitioner</li>
            <li>Google Professional Cloud Developer</li>
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
            <img
                src='/images/about-image.png'
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
                       selectTab={()=>handleTabChange("skills")} 
                       active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                       selectTab={()=>handleTabChange("education")} 
                       active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                       selectTab={()=>handleTabChange("certifications")} 
                       active={tab === "certifications"}
                    >
                        {" "}
                        Certifications{" "}
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