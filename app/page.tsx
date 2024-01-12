import Image from 'next/image'
import { IconFeed } from './ui/icons'
import { Field, Label } from './ui/catalyst/fieldset'
import { Input } from './ui/catalyst/input'
import { Button } from './ui/catalyst/button'
import { Text } from './ui/catalyst/text'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-8 sm:p-16 md:p-24">
      <Hero />
      <IconFeed />
      <CallToAction />
    </main>
  )
}

const Hero = () => (
  <div className="flex flex-col items-center justify-center mx-auto px-8 py-16 sm:p-16"> 
    <h1 className="sr-only">Rubicons</h1>
    <div className="text-5xl font-bold text-center">Sharp icons for <span className="bg-gradient-to-r from-primary to-[#f50049] bg-clip-text text-transparent">Sharp&nbsp;UI&apos;s.</span></div>
    <p className="text-lg text-center mt-4 max-w-2xl colr-slate-400">Pixel perfect, designed on a 24x24 pixel grid. Choose your color, download the full pack or single icons in SVG format, or quickly copy the SVG code.</p>
  </div>
)

const CallToAction = () => (
  <div className="flex flex-col items-center justify-center mx-auto">
    <div className='grid grid-cols-2 gap-8'>
      {/* Image left side */}
      <div className='relative col-span-1 w-full'>
        <Image src='/rubicons-cta.jpeg' fill className='object-cover rounded' alt='decorative' />
      </div>
      {/* Text right side with email form */}
      <div className='flex flex-col items-center sm:items-start justify-center col-span-1'>
        <h2 className='text-3xl font-bold text-center sm:text-left mb-2'>Get the full pack</h2>
        <Text>Get the full pack of icons in SVG format. We&apos;ll also send you a new icon every week.</Text>
        <form className='w-full py-2'>
          <Field className='space-y-4'>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' type='text' placeholder='John Doe' />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='text' placeholder='mail@email.com' />
            </div>
            <Button type='submit' className='w-full'>Get the full pack</Button>
          </Field>
        </form>
      </div>
    </div>
  </div>
)