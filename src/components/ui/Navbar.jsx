"use client";

import ThemeToggle from "./Themetoggle";

export default function Navbar({ children}) {
  return (
<nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto  sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999] text-foreground">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
      <h1 className="mr-4 block cursor-pointer py-1.5 text-base font-semibold">Abdiel Bernal</h1>

    <div className="hidden lg:block ">
      <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="flex items-center p-1 text-sm gap-x-2 ">
          <a href="#" className="flex items-center">Pages</a>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2">
          <a href="#" className="flex items-center">Account</a>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2">
          <a href="#" className="flex items-center">Blocks</a>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2">
          <a href="#" className="flex items-center">Docs</a>
        </li>
      </ul>
    </div>
    <ThemeToggle />
  </div>
</nav>
  );
} 