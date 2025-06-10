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
import Zustand from "@assets/icons/zustand.svg";
import TailwindIcon from "@assets/icons/tailwind.svg";
import ReactQueryIcon from "@assets/icons/react-query.svg";
import StyledComponents from "@assets/icons/styled-components.svg";
import FramerMotion from "@assets/icons/framer-motion.svg";
import RecoilIcon from "@assets/icons/recoil.svg";

import { useEffect, useRef } from "react";
import ScrollOut from "scroll-out";
import { Toolboxitems } from "@/components/Toolboxitems";
import Link from "next/link";
import MyInfo from "@/components/Myinfo";

const frontboxItems = [
  { title: "HTML5", iconType: Html5Icon },
  { title: "CSS", iconType: CSS },
  { title: "Javascript", iconType: JsIcon },
  { title: "Typescript", iconType: TsIcon },
  { title: "Next.js", iconType: NextjsIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Tailwind CSS", iconType: TailwindIcon },
];

const toolboxItems = [
  { title: "Zustand", iconType: Zustand },
  { title: "react-query", iconType: ReactQueryIcon },
  { title: "styled-components", iconType: StyledComponents },
  { title: "framer-motion", iconType: FramerMotion },
  { title: "Recoil", iconType: RecoilIcon },
];
export const AboutSection = () => {
  return (
    <div className="py-20 lg-py-28">
      <div id="About" className="container">
        <SectionHeader title="About Me" />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-5 lg:col-span-5">
              <CardHearder title={"My profile"} description={""} />
              <div className="flex mx-auto md:px-10">
                <Image
                  src={MyImage}
                  alt="My Image"
                  className="hidden md:block md:w-[160px]"
                />

                <div className="flex flex-col md:mt-4">
                  <MyInfo />
                  <span className="px-6 mt-4">
                    작은 물방울이 모여 콩나물이 자라듯, 작은 노력들이 모여
                    성장을 만든다고 믿습니다. 완벽한 환경이 아니어도 배우고
                    도전하는 것을 멈추지 않으며, 매일 조금씩 나아가는 개발자가
                    되고자 합니다.
                  </span>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 ">
              <CardHearder
                title={"Frontend Development"}
                description={
                  "React.js와 Next.js를 활용한 프론트엔드 개발 경험이 있으며, JavaScript(ES6), TypeScript, Tailwind CSS 사용에 능숙합니다."
                }
                className=""
              />

              <Toolboxitems
                items={frontboxItems}
                className="mt-2"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <Toolboxitems
                items={frontboxItems}
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s] mt-3 md:hidden"
              />
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-3 lg:col-span-1 ">
              <CardHearder
                title={"Tools & Libraries"}
                description={`프로젝트에 따라 
            상태관리, 스타일링 등 각각의 목적에 맞는 다양한 라이브러리를 사용한 경험이 있습니다.
`}
                className=""
              />
              <div className="flex flex-col gap-3">
                <Toolboxitems
                  items={toolboxItems}
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <Toolboxitems
                  items={toolboxItems}
                  itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s]"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
