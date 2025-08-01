"use client";

export default function Navbar({ children}) {
  return (
<nav class="block w-full max-w-screen-lg px-4 py-2 mx-auto  sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999] bg-sidebar-accent/100 text-foreground dark:bg-sidebar-dark-accent/100 dark:text-sidebar-dark-accent">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
      <h1 className="mr-4 block cursor-pointer py-1.5 text-base font-semibold">Abdiel Bernal</h1>

    <div class="hidden lg:block ">
      <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li class="flex items-center p-1 text-sm gap-x-2 ">
          <a href="#" class="flex items-center">Pages</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2">
          <a href="#" class="flex items-center">Account</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2">
          <a href="#" class="flex items-center">Blocks</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2">
          <a href="#" class="flex items-center">Docs</a>
        </li>
      </ul>
    </div>
    <button
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
       
      </span>
    </button>
  </div>
</nav>
  );
} 