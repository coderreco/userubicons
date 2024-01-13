"use client"

import { useControls } from 'leva'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'


export default function Controls() {
  const searchParams = useSearchParams()

  const { replace } = useRouter()
  const pathname = usePathname()

  // Get the color param from the URL. If it doesn't exist, use the default color
  let activeColor = searchParams.get('color')?.toString() || "#E68A48"

  // Color param will not have a # in front of it so we need to add it
  activeColor = activeColor.startsWith('#') ? activeColor : `#${activeColor}`

  // Get the size param from the URL. If it doesn't exist, use the default size
  let size = Number(searchParams.get('size')) || 24

  // Create a control for the color param
  const leva = useControls({ color: activeColor, size: { value: size, step: 8, min: 16, max: 64, label: 'Size' } })

  useEffect(() => {
    // Get the URLSearchParams object
    const params = new URLSearchParams(searchParams)
    // Remove the # from the color
    let newColor = leva.color.replace('#', '')

    let size = leva.size.toString()
    // Update the URL with the new color. This will trigger a re-render. We need to remove the # from the color
    params.set('color', newColor)
    params.set('size', size)

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [leva, pathname, searchParams, replace])
  return null
}