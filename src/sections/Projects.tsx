import pokePage from "@/assets/images/poke-page.png";
import chatbotPage from "@/assets/images/chatbot-page.png";
import weddingPage from "@/assets/images/weddingPage.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    number: "project 1",
    title: "포켓몬 도감채우기 게임",
    results: [
      {
        title:
          "이 웹 애플리케이션은 사용자가 간단한 게임을 통해 코인을 획득하고, 모은 코인으로 다양한 등급의 포켓몬 카드를 뽑아 수집할 수 있는 포켓몬 게임입니다. Tailwind CSS를 사용해 빠른 스타일링과 반응형 디자인을 구현하였고, React Query를 통해 API로부터 데이터를 효율적으로 페칭 및 캐싱하여 로딩과 에러 상태를 간결하게 관리하였습니다. 또한, Firebase Authentication과 Firestore를 활용해 별도의 백엔드 서버 없이도 사용자 인증과 데이터 관리를 안정적으로 수행하며, Vercel과의 연동으로 손쉬운 배포 및 환경 변수 관리를 구현했습니다.",
      },
    ],
    link: "https://jinijini-online.vercel.app/",
    image: pokePage,
  },
  {
    number: "project 2",
    title: "AI 챗봇",
    results: [
      {
        title:
          "이 프로젝트는 open AI API를 활용하여 구축된 챗봇 시스템입니다. 챗봇은 public/markdown 폴더 내의 Markdown 파일들을 지식 기반으로 활용하여, 사용자 질문에 대해 적절한 답변을 제공합니다. 또한, 챗봇 UI는 비밀번호 인증을 통해 접근이 제한되며, 대화 내역을 브라우저의 로컬 스토리지에 저장하여 세션 내에서 연속적인 대화가 가능하도록 설계되었습니다",
      },
    ],
    link: "",
    image: chatbotPage,
  },
  {
    number: "project 3",
    title: "축의금 분석하기(진행중)",
    results: [
      {
        title: `이 프로젝트는 사용자와 상대방의 카카오톡 대화 내용을 분석하여, AI가 친밀도를 점수화하고 그에 따라 적절한 축의금 금액을 추천해주는 애플리케이션입니다.
Next.js와 Spring Boot를 기반으로 프론트엔드와 백엔드를 분리하여 개발 중입니다.`,
      },
    ],
    link: "https://www.weddinggiftai.online/",
    image: weddingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 tracking-widest">
          Project
        </h2>
        <p
          className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md
        mx-auto"
        >
          see how I transfromed concepts into engaging digital experiences
        </p>
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
                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full 
              rounded-xl font-semibold inline-flex items-center
              justify-center gap-2 mt-8 md:w-auto px-6"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
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
