import { twMerge } from "tailwind-merge"
import { PropsWithChildren } from "react"

export const HeroOrbit = ({ 
    children, 
    size,
    rotation,
    shouldOrbit = false,
    shouldSpin = false,
    spinDuration,
    orbitDuration,
 }: PropsWithChildren<{ size: number, rotation: number, 
    shouldOrbit?: boolean, orbitDuration?: string
    shouldSpin?: boolean, spinDuration?: string }>) => {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <div className={twMerge(shouldOrbit ? "animate-spin" : "")}
        style={{animationDuration: orbitDuration}}>
        <div 
        className='flex items-start justify-start'
        style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`
        }}>
          <div className={twMerge(shouldSpin ? "animate-spin" : "")}
          style={{animationDuration: spinDuration}}>
            <div className='inline-flex'
            style={{
              transform: `rotate(${rotation * -1}deg)`
              }}>
              {children}
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}
