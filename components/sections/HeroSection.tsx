import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
              <span className="text-zinc-400">Available for new projects</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Abdul Rehman
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mt-1">
                  Electrical Engineer
                </span>
              </h1>
              <p className="max-w-[600px] text-zinc-400 md:text-xl leading-relaxed">
                Specializing in <span className="text-cyan-400 font-medium">power systems</span>,
                <span className="text-cyan-400 font-medium"> circuit design</span>, and
                <span className="text-cyan-400 font-medium"> embedded systems</span> with a passion for sustainable
                energy solutions and industrial automation.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-black font-medium">
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-cyan-500 transition-colors"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mx-auto lg:mr-0 relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 blur-3xl"></div>
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-1 backdrop-blur-md">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-medium text-zinc-500">Portfolio.tsx</div>
                </div>
                <div className="space-y-2 font-mono text-sm text-zinc-400">
                  <p>
                    <span className="text-cyan-400">const</span>{" "}
                    <span className="text-purple-400">Engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-500">name:</span>{" "}
                    <span className="text-amber-400">"Abdul Rehman"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-500">specialization:</span>{" "}
                    <span className="text-amber-400">"Electrical Engineering"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-500">focus:</span> [
                  </p>
                  <p className="pl-8">
                    <span className="text-amber-400">"Power Systems"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-amber-400">"Circuit Design"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-amber-400">"Embedded Systems"</span>
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-zinc-500">experience:</span>{" "}
                    <span className="text-purple-400">10</span>
                  </p>
                  <p>&#125;;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 