"use client"

import { useEffect } from "react";
// Create icon schema
import { Text } from "./catalyst/text"
import Search from "./search"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { unstable_noStore } from "next/cache";

const noStore = unstable_noStore
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

type Icon = {
  name: string,
  stroke: JSX.Element,
  solid: JSX.Element
}

const IconCard = ({ icon, color, ...props }: { icon: Icon, color: string }) => {
  // const { size = 24 } = props as { color: string, size: number };
  return (
    <div className="flex flex-col items-center justify-center rounded border-[0.25px] border-slate-300 dark:border-slate-800 p-4">
      <div className="flex items-center justify-center w-full aspect-square">
        <div style={{color: color}} className={`relative w-6 h-6`}>
          {icon.stroke}
        </div>
      </div>
      <Text>{icon.name}</Text>
    </div>
  )
} 

export const IconFeed = () => {
  const searchParams = useSearchParams();
  // Get the color param from the URL. If it doesn't exist, use the default color
  let activeColor = searchParams.get('color')?.toString() || "#E68A48"

  // Color param will not have a # in front of it so we need to add it
  activeColor = activeColor.startsWith('#') ? activeColor : `#${activeColor}`

  return (
  <div className="relative w-full max-w-5xl">
    <Search placeholder="Search icons" />
    <div className="grid grid-cols-8 gap-4 mt-8">
      {Array.from({ length: 64 }).map((_, i) => (
        <IconCard key={i} icon={Icons[0]} color={activeColor} />
      )
      )}
    </div>
  </div>
)}