import Link from "next/link";
import { CircuitBoard, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-black/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <CircuitBoard className="h-7 w-7 text-cyan-500 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-lg font-bold tracking-tight">Zaheer Ahmed</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="#about"
            className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            Experience
          </Link>
          <Link
            href="#certifications"
            className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            Certifications
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-zinc-700 text-white hover:bg-zinc-800 hover:border-cyan-500 transition-colors"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-zinc-700 text-white hover:bg-zinc-800 hover:border-cyan-500 transition-colors"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 