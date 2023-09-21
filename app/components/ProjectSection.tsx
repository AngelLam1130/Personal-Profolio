"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "RACK Neural Audio Inverter",
    description: "(Won a monetary prize)RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
    image: "./images/project/1.png",
    tag: ["All", "SWE"],
    gitUrl: "https://github.com/Romainpaulus/RKA-808",
    achievement: "(Won a monetary prize)RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "Silicon Valley Chinese Sports Association Web Development",
    description: "Silicon Valley Chinese Sports Association Web is a website that allows attendees to sign up the competition, group their team and follow up the information of the competition. ",
    image: "./images/project/2.png",
    tag: ["All", "SWE"],
    gitUrl: "http://svcsa.org/index",
    achievement: "(Won a monetary prize)RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "Voluntary Project in Tanzania Africa on Climate Change, Sustainability and Personal Hygiene",
    description: "This project was organized by Raleigh International,UK to let the young people take part in community building, environmental projects and outdoor expedition to equip young people with leadership skills and create lasting change with communities to take urgent action on the world’s most important issues.",
    image: "./images/project/3.png",
    tag: ["All", "Volunteer"],
    gitUrl: "/",
    previewUrl: "/",
    achievement: "Organized 2 community meeting as a leader.Built a toilet for local primary school.Built 20 rocket stoves for local communitiy.Taught more than 40 classes on climate change and sustainability.",
  },
  {
    id: 4,
    title: "Fundraising for Tanzania Community with Disposable Chopstick Handmade Model",
    description: "To fundraise for Tanzania community, I gathered the used disposable chopsticks at the dorm and use them build a model in two months. The model successfully sold at a charity action in the end. ",
    image: "./images/project/4.png",
    tag: ["All", "Volunteer"],
    gitUrl: "/",
    previewUrl: "/",
    achievement: "Sold at $1000 USD",
  },
  {
    id: 5,
    title: "Fundraising for Shanghai United Foundation with Hiking 50KM in one day ",
    description: "Completing a 50-kilometer hike to raise funds is an event aimed at encouraging everyone to pay attention to the philanthropic sector and inspire donations through the unwavering dedication of the hikers.",
    image: "./images/project/5.png",
    tag: ["All", "Volunteer"],
    gitUrl: "https://baozou.lianquan.org/",
    previewUrl: "/",
    achievement: "Successfully fundraise $5000 USD",
  },
  {
    id: 6,
    title: "2022 Naraka Bladepoint Pro League Season",
    description: "Project 5 description",
    image: "./images/project/6.png",
    tag: ["All", "Esports"],
    gitUrl: "/",
    previewUrl: "/",
    achievement: "(Won a monetary prize)RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
  },
  {
    id: 7,
    title: "Call of Abyss 2020-2022",
    description: "Project 5 description",
    image: "./images/project/7.png",
    tag: ["All", "Esports"],
    gitUrl: "/",
    previewUrl: "/",
    achievement: "(Won a monetary prize)RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
  },
  {
    id: 8,
    title: "Fantasy Westward Journey Pro League 2020-2022",
    description: "Project 5 description",
    image: "./images/project/8.png",
    tag: ["All", "Esports"],
    gitUrl: "/",
    previewUrl: "/",
    achievement: "(Won a monetary prize)RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
  },
  {
    id: 9,
    title: "2020 Annual Ceremony of CC Live",
    description: "Project 5 description",
    image: "./images/project/9.png",
    tag: ["All", "Esports"],
    gitUrl: "/",
    previewUrl: "/",
    achievement: "(Won a monetary prize)RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="SWE"
          isSelected={tag === "SWE"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Esports"
          isSelected={tag === "Esports"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Volunteer"
          isSelected={tag === "Volunteer"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hobby"
          isSelected={tag === "Hobby"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            achievement={project.achievement}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            // previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;