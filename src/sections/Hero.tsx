import memojiImage from '@assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@assets/icons/arrow-down.svg';
import grainImage from '@assets/images/grain.jpg';
import StarIcon from '@assets/icons/star.svg';
import SparkIcon from '@assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import Link from 'next/link';


export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div 
        className='absolute inset-0 -z-30 opacity-5' 
        style={{
          backgroundImage: `url(${grainImage.src})`
        }}> </div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit
        orbitDuration='30s'>
          <SparkIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>  
        <HeroOrbit size={440} rotation={79} shouldOrbit
        orbitDuration='32s' shouldSpin spinDuration='3s'>
          <SparkIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>          
        <HeroOrbit size={520} rotation={-41} shouldOrbit
        orbitDuration='34s'>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>   
        <HeroOrbit size={530} rotation={178} shouldOrbit
        orbitDuration='36s' shouldSpin spinDuration='3s'>
          <SparkIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>   
        <HeroOrbit size={550} rotation={20} shouldOrbit
        orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>    
        <HeroOrbit size={590} rotation={98} shouldOrbit
        orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit> 
        <HeroOrbit size={650} rotation={-5} shouldOrbit
        orbitDuration='42s'>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>    
        <HeroOrbit size={710} rotation={144} shouldOrbit
        orbitDuration='44s' shouldSpin spinDuration='3s'>
          <SparkIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>  
        <HeroOrbit size={720} rotation={85} shouldOrbit
        orbitDuration='46s'>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>    
        <HeroOrbit size={800} rotation={-72} shouldOrbit
        orbitDuration='48s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit> 

      </div>
      <div className="container">
        <div className='flex flex-col items-center'>
          <Image
            src={memojiImage}
            className='size-[100px]'
            alt="person peeking from behind laptop"
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 w-2.5 h-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>Available for new project</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1
            className='font-serif text-4xl text-center mt-8 uppercase tracking-widest md:text-5xl'>
            YUJIN <br /> PORTPOILO</h1>
          <p className='mt-4 text-sm text-center text-white/60 md:text-lg'>안녕하세요<br/>성장하고 있는 프론트엔드 개발자 김유진 입니다.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center mt-8 gap-4 md:flex-row'>
          <a href="#project" 
          className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'
          >
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className="size-4" />
          </a>
          <a href="#contact"
          className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>🖐️</span>
            <span className='font-semibold'>Let's Connect</span>
          </a>
        </div>
      </div>
    </div>
  )
};
