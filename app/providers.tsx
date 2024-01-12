"use client"

import { Toaster } from "sonner"
import Controls from "./ui/layout/controls"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Controls />
      <Toaster />
    </>
  )
}