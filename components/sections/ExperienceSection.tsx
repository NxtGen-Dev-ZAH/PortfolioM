import { BookOpen, Lightbulb } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-zinc-900 relative">
      <div className="absolute inset-0 bg-grid-zinc-800/20 bg-[size:30px_30px] opacity-20"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-zinc-900 p-1 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-800">
            <div className="rounded-full bg-zinc-800 p-2">
              <Lightbulb className="h-5 w-5 text-cyan-500" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-zinc-400 md:text-xl">
              My professional journey and academic background in electrical engineering
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
              <Lightbulb className="mr-2 h-5 w-5 text-cyan-500" />
              Professional Experience
            </h3>

            <div className="relative pl-8 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-bold">Senior Electrical Engineer</h4>
                <div className="ml-auto text-sm text-zinc-400">2020 - Present</div>
              </div>
              <div className="text-cyan-400 mb-3">TechGrid Solutions</div>
              <p className="text-zinc-400">
                Lead engineer for power distribution systems and sustainable energy projects. Managed a team of 5
                engineers developing smart grid technologies.
              </p>
              <ul className="space-y-2 text-zinc-400 list-disc pl-5 mt-3">
                <li>Designed and implemented a smart grid monitoring system for a major utility company</li>
                <li>Reduced power outage response time by 35% through predictive analytics</li>
                <li>Led the development of renewable energy integration protocols</li>
                <li>Optimized power distribution efficiency by 22% using advanced algorithms</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-bold">Electrical Systems Engineer</h4>
                <div className="ml-auto text-sm text-zinc-400">2017 - 2020</div>
              </div>
              <div className="text-cyan-400 mb-3">AutomationPro Industries</div>
              <p className="text-zinc-400">
                Specialized in industrial automation and control systems. Designed and implemented PLC-based solutions
                for manufacturing clients.
              </p>
              <ul className="space-y-2 text-zinc-400 list-disc pl-5 mt-3">
                <li>Developed control systems for 12+ manufacturing facilities</li>
                <li>Implemented SCADA systems resulting in 40% improved efficiency</li>
                <li>Created customized HMI interfaces for process monitoring</li>
                <li>Reduced system downtime by 65% through predictive maintenance</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-bold">Embedded Systems Designer</h4>
                <div className="ml-auto text-sm text-zinc-400">2014 - 2017</div>
              </div>
              <div className="text-cyan-400 mb-3">Microtech Electronics</div>
              <p className="text-zinc-400">
                Designed embedded systems for IoT applications and consumer electronics.
              </p>
              <ul className="space-y-2 text-zinc-400 list-disc pl-5 mt-3">
                <li>Developed firmware for smart home device product line</li>
                <li>Created custom PCB designs for specialized applications</li>
                <li>Optimized power consumption in battery-operated devices</li>
                <li>Collaborated with software teams on integrated system development</li>
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
              <BookOpen className="mr-2 h-5 w-5 text-cyan-500" />
              Education
            </h3>

            <div className="relative pl-8 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-bold">MSc in Electrical Engineering</h4>
                <div className="ml-auto text-sm text-zinc-400">2012 - 2014</div>
              </div>
              <div className="text-purple-400 mb-3">Stanford University</div>
              <p className="text-zinc-400">
                Specialized in power systems and renewable energy integration. Research focus on smart grid technologies.
              </p>
              <ul className="space-y-2 text-zinc-400 list-disc pl-5">
                <li>GPA: 3.95/4.0 - Magna Cum Laude</li>
                <li>Master's Thesis: "Optimizing Renewable Energy Integration in Smart Grids"</li>
                <li>Published 2 papers in IEEE Transactions on Power Systems</li>
                <li>Research Assistant in the Renewable Energy Laboratory</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-bold">BSc in Electrical Engineering</h4>
                <div className="ml-auto text-sm text-zinc-400">2008 - 2012</div>
              </div>
              <div className="text-purple-400 mb-3">Massachusetts Institute of Technology</div>
              <p className="text-zinc-400">
                Graduated with honors. Focused on circuit design and embedded systems. Participated in the Solar Car
                Competition team.
              </p>
              <ul className="space-y-2 text-zinc-400 list-disc pl-5">
                <li>GPA: 3.92/4.0 - Summa Cum Laude</li>
                <li>Lead Electrical Engineer for MIT Solar Car Team</li>
                <li>Undergraduate Research Assistant in the Power Electronics Research Laboratory</li>
                <li>Recipient of the Presidential Undergraduate Research Award</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 