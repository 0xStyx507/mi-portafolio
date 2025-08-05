import ThemeToggle from "./themeToggle";

export default function Navbar({children, className = "", ...props}) {
  return ( 

<nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
  
  <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
  
    <a href="#" className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
      Material Tailwind
    </a>
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" className="flex items-center">Pages</a>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" className="flex items-center">Account</a>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" className="flex items-center">Blocks</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" className="flex items-center">Docs</a>
        </li>
      </ul>
    </div>
      <div className={`flex items-center ${className}`}>
        {children}
        <ThemeToggle />
      </div>
  </div>
</nav> 
  );
}