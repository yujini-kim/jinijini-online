"use client";

import { Card } from "@/components/Card";
import MyImage from "@assets/images/img.webp";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHearder } from "@/components/CardHearder";
import Image from "next/image";
import Html5Icon from "@assets/icons/html5.svg";
import JsIcon from "@assets/icons/js.svg";
import TsIcon from "@assets/icons/typescript.svg";
import CSS from "@assets/icons/css.svg";
import NextjsIcon from "@assets/icons/nextjs.svg";
import ReactIcon from "@assets/icons/react.svg";
import StorybookIcon from "@assets/icons/storybook.svg";
import TailwindIcon from "@assets/icons/tailwind.svg";
import mapImage from "@assets/images/map.png";
import mapMemoji from "@assets/images/memoji-map.webp";
import { Toolboxitems } from "@/components/Toolboxitems";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ScrollOut from "scroll-out";

const toolboxItems = [
  { title: "HTML5", iconType: Html5Icon },
  { title: "CSS", iconType: CSS },
  { title: "Javascript", iconType: JsIcon },
  { title: "Typescript", iconType: TsIcon },
  { title: "Next.js", iconType: NextjsIcon },
  { title: "React", iconType: ReactIcon },

  { title: "Tailwind CSS", iconType: TailwindIcon },
  { title: "StoryBook", iconType: StorybookIcon },
];

const hobbies = [
  {
    title: "Cooking",
    emoji: "🍔",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "8%",
    top: "35%",
  },
  {
    title: "Running",
    emoji: "🏃‍➡️",
    left: "45%",
    top: "40%",
  },
  {
    title: "Movie",
    emoji: "🎥",
    left: "30%",
    top: "65%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);

  useEffect(() => {
    ScrollOut({
      targets: "[data-scroll]",
      once: false,
    });
  }, []);

  return (
    <div className="py-20 lg-py-28">
      <div id="About" className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what "
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card data-scroll className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHearder title={"My profile"} description={""} />
              <div className="w-40 mx-auto">
                <Image src={MyImage} alt="My Image" />
              </div>
            </Card>
            <Card data-scroll className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHearder
                title={"My Toolbox"}
                description={"Explore the technologies and tools"}
                className=""
              />
              <Toolboxitems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <Toolboxitems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card
              data-scroll
              className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 
      "
            >
              <CardHearder
                title={"Beyond the Code"}
                description={"Explore my interests and hobbies"}
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card
              data-scroll
              className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 "
            >
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover
        object-left-top"
              />
              <div
                className="absolute top-1/3 left-1/2 
        -translate-x-full -translate-y-3/4 size-20 rounded-full        
        after:content-[''] after:absolute after:inset-0 after:outline 
        after:outline-2 after:-outline-offset-2 after:rounded-full
        after:outline-gray-950/30"
              >
                <div
                  className="absolute inset-0 rounded-full 
          bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"
                ></div>
                <div
                  className="absolute inset-0 rounded-full 
          bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"
                ></div>
                <Image
                  src={mapMemoji}
                  alt="smile memoji"
                  className="size-20 overflow-hidden"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
