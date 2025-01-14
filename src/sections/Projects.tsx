import pokePage from "@/assets/images/poke-page.png";
import Image from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card"

const portfolioProjects = [
  {
    year: "2024 03~",
    title: "포켓몬 도감채우기 게임",
    results: [
      { title: "next.js와 React를 활용하여 개발한 웹 게임" },
      { title: "별도의 백엔드 서버 없이 React의 Context API를 사용하여 전역 상태 관리" },
      { title: "React Query를 사용하여 데이터 페칭 및 상태 관리 최적화" },
      { title: "로딩 시 Skeleton 컴포넌트를 사용하여 사용자 경험 향상" },
    ],
    link: "https://www.jinijini.online/",
    image: pokePage,
  },
  {
    year: "날짜짜",
    title: "프로젝트명",
    results: [
      { title: "설명1" },
      { title: "설명2" },
      { title: "설명3" },
    ],
    link: "",
    image: pokePage,
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
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 tracking-widest">Project</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md
        mx-auto">
        see how I transfromed concepts into engaging digital experiences</p>
        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card key={index} 
            className=" px-8 pt-8
            md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
            style={{
              top: `calc(64px + ${index * 40}px`
            }}> 
            <div className="absolute inset-0 -z-10 opacity-5" style={{
              background: `url(${grainImage.src})`
            }}
            ></div>
            <div className="lg:grid lg:grid-cols-2 gap-16">
              <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400
              inline-flex gap-2 font-bold uppercase tracking-widest text-sm
              text-transparent bg-clip-text">
                <span>{project.year}</span>
              </div>
            
            <h3 className="text-2xl mt-2
            md:text-3xl md:mt-5">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-2 mt-4 md:mt-5">
              {project.results.map(result => (
                <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckCircleIcon className="w-5 h-5 md:w-5 md:h-5 shrink-0" />
                  {result.title}
                </li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full 
              rounded-xl font-semibold inline-flex items-center
              justify-center gap-2 mt-8 md:w-auto px-6">
                <span>Visit Live Site</span>
                <ArrowUpRightIcon className="size-4"/>
              </button>
            </a>  
            </div>
            <div className="relative">
            <Image src={project.image} alt={project.title} 
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
  )
};
