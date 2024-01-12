import { IconFeed } from './ui/icons'

export default function Home() {

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
    <div className="text-5xl font-bold">Sharp icons for <span className="bg-gradient-to-r from-primary to-[#f50049] bg-clip-text text-transparent">Sharp UI&apos;s.</span></div>
    <p className="text-lg text-center mt-4 max-w-2xl colr-slate-400">Pixel perfect, designed on a 24x24 pixel grid. Choose your color, download the full pack or single icons in SVG format, or quickly copy the SVG code.</p>
  </div>
)

