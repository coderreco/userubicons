"use client"

import { useSearchParams } from "next/navigation"

export default function Brand() { 
  const searchParams = useSearchParams()
  // Get the color param from the URL. If it doesn't exist, use the default color
  let activeColor = searchParams.get('color')?.toString() || "#E68A48"

  // Color param will not have a # in front of it so we need to add it
  activeColor = activeColor.startsWith('#') ? activeColor : `#${activeColor}`

  return (
    <div className="flex-shrink-0 flex items-center gap-2">
      <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.52938 0L18 2.09524L9.52941 7.33333L1.05882 5.76191L8.5 11L8.47059 22L0 15.7143V5.2381L9.52938 0Z" fill={activeColor}/>
        <path d="M19 5.07143V14.7143L13 19V9L17.5 6.14286L16 5L17.5 4L19 5.07143Z" fill={activeColor}/>
      </svg>
      <span className="text-xl font-bold">Rubicons</span>
    </div>
  )
}