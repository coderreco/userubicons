"use client"

import Controls from "./ui/layout/controls"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Controls />
    </>
  )
}