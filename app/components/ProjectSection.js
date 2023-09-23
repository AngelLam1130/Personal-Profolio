"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "RACK Neural Audio Inverter",
    description: "RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
    image: "./images/project/1.png",
    tag: ["All", "SWE"],
    gitUrl: "https://github.com/Romainpaulus/RKA-808",
    achievement: "🌟Won a monetary prize.",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "Silicon Valley Chinese Sports Association Web Development",
    description: "Silicon Valley Chinese Sports Association Web is a website that allows attendees to sign up the competition, group their team and follow up the information of the competition. ",
    image: "./images/project/2.png",
    tag: ["All", "SWE"],
    gitUrl: "http://svcsa.org/index",
    achievement: "🌟Built web page of Track and Field Game from scratch improving the efficiency of signing up by 100%. ",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "Voluntary Project in Tanzania Africa on Climate Change, Sustainability and Personal Hygiene",
    description: "This project was organized by Raleigh International,UK to let the young people take part in community building, environmental projects and outdoor expedition to equip young people with leadership skills and create lasting change with communities to take urgent action on the world’s most important issues.",
    image: "./images/project/3.png",
    tag: ["All", "Volunteer"],
    gitUrl: "https://raleighinternational.org/?utm_term=raleigh%20international&utm_campaign=Branded+Terms&utm_source=adwords&utm_medium=ppc&hsa_acc=7094492291&hsa_cam=19682535839&hsa_grp=147683377404&hsa_ad=648065620688&hsa_src=g&hsa_tgt=kwd-307876508625&hsa_kw=raleigh%20international&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw3etEBN7J_TMANKfRt_qn5VhKRHMXOmM2bDPqYOQiPO0x1mQV_VGA0aAiqFEALw_wcB",
    previewUrl: "/",
    achievement: "🌟Organized 2 community meeting as a leader.Built a toilet for local primary school.Built 20 rocket stoves for local communitiy.Taught more than 40 classes on climate change and sustainability.",
  },
  {
    id: 4,
    title: "Fundraising for Tanzania Community with Disposable Chopstick Handmade Model",
    description: "To fundraise for Tanzania community, I gathered the used disposable chopsticks at the dorm and use them build a model in two months. The model successfully sold at a charity action in the end. ",
    image: "./images/project/4.png",
    tag: ["All", "Volunteer"],
    gitUrl: "https://abrasive-broom-c74.notion.site/Volunteer-Fundraising-e628696f53174b9f8558f7d663a5a492",
    previewUrl: "/",
    achievement: "🌟Sold at $1000 USD",
  },
  {
    id: 5,
    title: "Fundraising for Shanghai United Foundation with Hiking 50KM in one day ",
    description: "Completing a 50-kilometer hike to raise funds is an event aimed at encouraging everyone to pay attention to the philanthropic sector and inspire donations through the unwavering dedication of the hikers.",
    image: "./images/project/5.png",
    tag: ["All", "Volunteer"],
    gitUrl: "https://baozou.lianquan.org/",
    previewUrl: "/",
    achievement: "🌟Successfully fundraise $5000 USD",
  },
  {
    id: 6,
    title: "2022 Naraka Bladepoint Pro League (NBPL)",
    description: "Naraka:Bladepoint is a martial arts-style action-adventure battle royale game published by NetEase Games.NBPL is the official esports league organized by NetEase.",
    image: "./images/project/6.png",
    tag: ["All", "Work"],
    gitUrl: "https://www.youtube.com/watch?v=fsanNvoi9nE&t=2264s",
    previewUrl: "/",
    achievement: "🌟Successfully produce 2 seasons and 1 world final. Successfully execute the side-event in Japan and Singapore.",
  },
  {
    id: 7,
    title: "2020-2022 Call of Abyss(COA) & Identity V Pro League(IVL)",
    description: "\"Identity V \" is a horror multiplayer asymmetrical competitive game published by NetEase Games.IVL is the official esports league organized by NetEase.COA is the annual tournament of Identity V players.",
    image: "./images/project/7.png",
    tag: ["All", "Work"],
    gitUrl: "https://ivl.163.com/",
    previewUrl: "/",
    achievement: "🌟Successfully produce 2 on-site final with 2500 audience.",
  },
  {
    id: 8,
    title: "2020-2022 Fantasy Westward Journey Pro League",
    description: "Fantasy Westward Journey is a MMORPG developed and run by NetEase.",
    image: "./images/project/8.png",
    tag: ["All", "Work"],
    gitUrl: "https://www.bilibili.com/video/BV1oR4y1M7A1/?spm_id_from=333.788.recommend_more_video.0&vd_source=75fc53524cbfabe526584f79e4cfd2e5",
    previewUrl: "/",
    achievement: "🌟Successfully adapt XR, AR, 3D mapping in the project.",
  },
  // {
  //   id: 9,
  //   title: "2020 Annual Ceremony of CC Live",
  //   description: "Project 5 description",
  //   image: "./images/project/9.png",
  //   tag: ["All", "Esports"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   achievement: "(Won a monetary prize)RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
  // },
  {
    id: 10,
    title: "Bag Packer",
    description: "I love traveling. I have been to more than 20 countries in the world including Africa, Europe, Latin America and Asia.",
    image: "./images/project/10.png",
    tag: ["All", "Hobby"],
    gitUrl: "https://abrasive-broom-c74.notion.site/Angel-s-Travel-Log-d618e8d2a0a947dd9e3e083f2346b86f",
    previewUrl: "/",
    achievement: "Hike on the volcano in Nicaragua and glacier hike in Iceland.Solo bus travel from north of Vietnam to the south of Vietnam. ",
  },
  // {
  //   id: 11,
  //   title: "Glacier Hiking in Iceland",
  //   description: "Project 5 description",
  //   image: "./images/project/11.png",
  //   tag: ["All", "Hobby"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   achievement: "(Won a monetary prize)RACK Neural Audio Inverter is an AI latents inversion remixer that allows music producer to create electronic music with one click.",
  // },
  {
    id: 12,
    title: "Outdoor Cycling",
    description: "Cycling makes me feel free. I enjoy cycling for hours to feel the breeze and visit city corners.",
    image: "./images/project/12.png",
    tag: ["All", "Hobby"],
    gitUrl: "https://abrasive-broom-c74.notion.site/Cycling-a8bbea2b8e4b46e286885c2f6e09fc6e",
    previewUrl: "/",
    achievement: "30KM per cycling is a minimum standard for me.",
  },
  {
    id: 13,
    title: "Stand Up Paddling (SUP)",
    description: "Have you ever visited a island by SUP? Have you ever played football in a lake by SUP? Falling to the water and finding ways to secure yourself back on the board is fun.",
    image: "./images/project/13.png",
    tag: ["All", "Hobby"],
    gitUrl: "https://abrasive-broom-c74.notion.site/Stand-Up-Paddling-c433a78d1e114bf2962e671692865aaa",
    previewUrl: "/",
    achievement: "I am very good at securing myself back on the board.",
  },
  {
    id: 14,
    title: "Camper",
    description: "I would say mayself an ace on camping. I have started to camp since 2016 from wild camping which required you to dig a temporary toilet for yourself to current glamping. ",
    image: "./images/project/14.png",
    tag: ["All", "Hobby"],
    gitUrl: "https://abrasive-broom-c74.notion.site/Camping-baa2fd3c45d045bea4437d052f658627",
    previewUrl: "/",
    achievement: "Trekked and campped in Tanzania safari for 3 weeks. Organized 4 glamping to gather new friends to meet each other.",
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
      <h2 className="text-center text-4xl font-bold text-white mt-15 mb-8 md:mb-12">
        My Experience
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="SWE"
          isSelected={tag === "SWE"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
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