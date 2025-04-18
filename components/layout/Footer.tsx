import Link from "next/link";
import { CircuitBoard } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <CircuitBoard className="h-6 w-6 text-cyan-500 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-lg font-bold tracking-tight">Abdul Rehman</span>
            </div>
            <p className="text-zinc-400 max-w-[400px]">
              Professional electrical engineer specializing in power systems, circuit design, and industrial automation.
            </p>
            <div className="flex items-center gap-4">
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

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#certifications" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    Power Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    Circuit Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Contact</h4>
              <ul className="space-y-2">
                <li className="text-zinc-400">alexander.maxwell@example.com</li>
                <li className="text-zinc-400">San Francisco, California</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          <p>© 2023 Abdul Rehman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 