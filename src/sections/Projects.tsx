import pokePage from "@/assets/images/poke-page.png";
import chatbotPage from "@/assets/images/chatbot-page.png";
import weddingPage from "@/assets/images/weddingPage.png";
import Page from "@/assets/images/preparing-page.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GitIcon from "@/assets/icons/github.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    number: "project 1",
    title: "포켓몬 도감채우기 게임",
    date: "24.11~25.03",
    results: [
      {
        title:
          "사용자가 간단한 게임을 통해 코인을 획득하고, 모은 코인으로 다양한 등급의 포켓몬 카드를 뽑아 수집할 수 있는 포켓몬 게임입니다.",
      },
    ],
    link: "https://jinijini-online.vercel.app/",
    image: pokePage,
    git: "https://github.com/yujini-kim/pokemon-game.git",
    infolink: "",
  },
  {
    number: "project 2",
    title: "AI 챗봇",
    date: "25.01~25.03",
    results: [
      {
        title:
          "방문자가 질문하면 미리 제공된 Markdown 파일을 기반으로 답변하는 AI 챗봇 기능을 제공합니다.",
      },
    ],
    link: "",
    image: chatbotPage,
    git: "https://github.com/yujini-kim/jinijini-online.git",
    infolink: "",
  },
  {
    number: "project 3",
    title: "축의금 분석하기",
    date: "25.04~25.05",
    results: [
      {
        title: `이 프로젝트는 사용자와 상대방의 카카오톡 대화 내용을 분석하여, AI가 친밀도를 점수화하고 그에 따라 적절한 축의금 금액을 추천해주는 애플리케이션입니다.
`,
      },
    ],
    link: "https://www.weddinggiftai.online/",
    image: weddingPage,
    git: "https://github.com/tonghwi/yujindong.git",
    infolink:
      "https://www.notion.so/1d5d67feba0a80cf9985f8b34e2b7189?source=copy_link",
  },
  {
    number: "project 4",
    title: "공중화장실 위치찾기",
    date: "25.06~",
    results: [
      {
        title: `이사용자의 현재 위치를 기반으로 주변 공공화장실을 지도 위에 표시하고,

위치 정보, 운영 시간, 남녀 구분, 장애인 화장실 여부 등 다양한 정보를 함께 제공합니다.`,
      },
    ],
    link: "https://www.weddinggiftai.online/",
    image: Page,
    git: "https://github.com/tonghwi/yujindong.git",
    infolink:
      "https://www.notion.so/20bd67feba0a80cbbdf8e0f7fda292f5?source=copy_link",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="mt-20 pb-16 lg:py-24">
      <div className="container">
        <SectionHeader title="Project" />
        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className=" px-8 pt-8
            md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px + ${index * 40}px`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  background: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400
              inline-flex gap-2 font-bold uppercase tracking-widest text-sm
              text-transparent bg-clip-text"
                  >
                    <span>{project.number}</span>
                  </div>

                  <h3
                    className="text-2xl mt-2
            md:text-3xl md:mt-5"
                  >
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-white/70">
                    {project.date}
                  </span>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-6">
                    <a href={project.link}>
                      <button
                        className="bg-white text-gray-950 
              rounded-xl font-semibold inline-flex items-center
              justify-center gap-2 p-2 md:w-auto"
                      >
                        <span className="text-xs">Visit Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.git}>
                      <button
                        className="bg-white text-gray-950
              rounded-xl font-semibold inline-flex items-center
              justify-center gap-2 p-2 md:w-auto"
                      >
                        <span className="text-xs">Git Hub</span>
                        <GitIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.infolink}>
                      <button
                        className="bg-white text-gray-950
              rounded-xl font-semibold inline-flex items-center
              justify-center gap-2 p-2 md:w-auto"
                      >
                        <span className="text-xs">상세내용</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 mb:-mb-0 lg:mt-0 lg:absolute lg:h-full
            lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
