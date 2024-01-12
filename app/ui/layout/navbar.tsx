import Link from "next/link";

import { Badge } from "../catalyst/badge";
import Brand from "../brand";

export default function Navbar() {
  return (
    <div id="navbar-root" className="fixed inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0">
            <Link href={`/`}>
              <Brand />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 gap-4 lg:ml-6 lg:justify-end">
            <Badge color="rose">coming soon!</Badge>
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 200 300" width="auto" height="auto" className="max-h-6">
                <title>Figma.logo</title>
                <desc>Created using Figma</desc>
                <path id="path0_fill" fill="#0acf83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" />
                <path id="path1_fill" fill="#a259ff" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" />
                <path id="path1_fill_1_" fill="#f24e1e" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" />
                <path id="path2_fill" fill="#ff7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" />
                <path id="path3_fill" fill="#1abcfe" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}