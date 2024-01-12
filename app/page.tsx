import Image from 'next/image'
import Search from './ui/search'
import { IconFeed } from './ui/icons'

const Icons = [
  {
    name: 'Search',
    stroke: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21H5C3.34315 21 2 19.6569 2 18V6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11L8 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<circle cx="15.5" cy="15.5" r="4.5" stroke="currentColor" stroke-width="2"/>
<path d="M22 22L19 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>,
    solid: <svg width="auto" height="auto" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 21H5C3.34315 21 2 19.6569 2 18V6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2 11L8 11" stroke="black" stroke-width="2" stroke-linecap="round" />
      <circle cx="15.5" cy="15.5" r="4.5" stroke="black" stroke-width="2" />
      <path d="M22 22L19 19" stroke="black" stroke-width="2" stroke-linecap="round" />
    </svg>
  }
]

// Create type for icon schema


export default function Home({ searchParams }: { searchParams: any }) {
  // console.log(searchParams)
  // const activeColor = searchParams.color || '#f7ded7'
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Hero />
      <IconFeed  />
    </main>
  )
}

const Hero = () => (
  <div className="flex flex-col items-center justify-center mx-auto p-16"> 
    <h1 className="sr-only">Rubicons</h1>
    <div className="text-5xl font-bold">Sharp icons for <span className='bg-gradient-to-r from-primary to-[#f50049] bg-clip-text text-transparent'>Sharp UI's.</span></div>
    <p className="text-lg text-center mt-4 max-w-2xl colr-slate-400">Pixel perfect, designed on a 24x24 pixel grid. Choose your color, download the full pack or single icons in SVG format, or quickly copy the SVG code.</p>
  </div>
)

