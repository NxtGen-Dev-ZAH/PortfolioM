import {
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillBar from "@/components/ui/SkillBar";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-zinc-900 p-1 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-800">
            <div className="rounded-full bg-zinc-800 p-2">
              <Layers className="h-5 w-5 text-cyan-500" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-zinc-400 md:text-xl">
              With a decade of experience across various electrical engineering disciplines, I bring a comprehensive
              skill set in both technical and software domains.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:bg-zinc-900 hover:border-cyan-500/50">
            <div className="p-2 rounded-full bg-zinc-800">
              <Cpu className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="text-xl font-bold">Hardware Design</h3>
            <p className="text-zinc-400 text-center">
              Expert in circuit design, PCB layout, power systems, and embedded hardware development.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:bg-zinc-900 hover:border-cyan-500/50">
            <div className="p-2 rounded-full bg-zinc-800">
              <Zap className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="text-xl font-bold">Power Systems</h3>
            <p className="text-zinc-400 text-center">
              Specialized in power distribution, renewable energy integration, and efficient energy management solutions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:bg-zinc-900 hover:border-cyan-500/50">
            <div className="p-2 rounded-full bg-zinc-800">
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
                className="h-6 w-6 text-cyan-500"
              >
                <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                <path d="m6 17 3.13-5.78c.53-.97.43-2.22-.26-3.12-.69-.9-.69-2.12-.07-3.02a4 4 0 0 1 6.74.84"></path>
                <path d="m5 17 4-7"></path>
                <path d="M15 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Automation</h3>
            <p className="text-zinc-400 text-center">
              Proficient in PLC programming, SCADA systems, and industrial automation for manufacturing environments.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-zinc-900 border border-zinc-800">
              <TabsTrigger
                value="technical"
                className="data-[state=active]:bg-zinc-800 data-[state=active]:text-cyan-500"
              >
                Technical
              </TabsTrigger>
              <TabsTrigger
                value="software"
                className="data-[state=active]:bg-zinc-800 data-[state=active]:text-cyan-500"
              >
                Software
              </TabsTrigger>
              <TabsTrigger
                value="soft"
                className="data-[state=active]:bg-zinc-800 data-[state=active]:text-cyan-500"
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="space-y-4 mt-4">
              <div className="space-y-4">
                <SkillBar skill="Power Systems Design" percentage={95} color="cyan" />
                <SkillBar skill="Circuit Design & Analysis" percentage={92} color="cyan" />
                <SkillBar skill="Embedded Systems" percentage={90} color="cyan" />
                <SkillBar skill="PLC Programming" percentage={88} color="cyan" />
                <SkillBar skill="PCB Design" percentage={85} color="cyan" />
                <SkillBar skill="SCADA Systems" percentage={82} color="cyan" />
              </div>
            </TabsContent>
            <TabsContent value="software" className="space-y-4 mt-4">
              <div className="space-y-4">
                <SkillBar skill="AutoCAD Electrical" percentage={90} color="purple" />
                <SkillBar skill="MATLAB/Simulink" percentage={88} color="purple" />
                <SkillBar skill="Altium Designer" percentage={85} color="purple" />
                <SkillBar skill="C/C++ Programming" percentage={82} color="purple" />
                <SkillBar skill="Python" percentage={80} color="purple" />
              </div>
            </TabsContent>
            <TabsContent value="soft" className="space-y-4 mt-4">
              <div className="space-y-4">
                <SkillBar skill="Project Management" percentage={95} color="gradient" />
                <SkillBar skill="Problem Solving" percentage={93} color="gradient" />
                <SkillBar skill="Team Leadership" percentage={90} color="gradient" />
                <SkillBar skill="Technical Writing" percentage={88} color="gradient" />
                <SkillBar skill="Client Communication" percentage={85} color="gradient" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 