import { Database } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Smart Grid Monitoring System",
    description: "Designed and implemented a comprehensive real-time monitoring system for power distribution networks, featuring advanced analytics and predictive maintenance capabilities. The system reduced outage response time by 35% and improved energy efficiency by 22%.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "Smart Grid Monitoring System",
    tags: ["IoT", "SCADA", "Power Systems", "Data Analytics"]
  },
  {
    title: "Advanced Manufacturing Automation",
    description: "Developed a state-of-the-art PLC-based control system for manufacturing automation, integrating real-time monitoring, predictive maintenance, and adaptive control algorithms. The implementation increased production efficiency by 40% and reduced downtime by 65%.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "Automated Industrial Control System",
    tags: ["PLC", "HMI", "Automation", "Industry 4.0"]
  },
  {
    title: "Solar Power Optimization System",
    description: "Created an intelligent system to maximize energy harvesting from solar panels using advanced MPPT algorithms, weather prediction, and automated panel positioning. The system increased energy yield by 28% and provided seamless grid integration with battery storage solutions.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "Solar Power Optimization System",
    tags: ["Renewable Energy", "Embedded Systems", "IoT", "Energy Storage"]
  },
  {
    title: "Microgrid Control System",
    description: "Engineered a comprehensive microgrid control system for a remote community, integrating renewable sources, energy storage, and intelligent load management. The system provided 99.9% uptime and reduced diesel generator usage by 75%.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "Microgrid Control System",
    tags: ["Microgrids", "Control Systems", "Energy Management", "Renewable Integration"]
  },
  {
    title: "Industrial IoT Monitoring Platform",
    description: "Built an IoT platform for industrial equipment monitoring and predictive maintenance. The system collects real-time data from sensors, processes it through advanced algorithms, and predicts failures before they occur, reducing maintenance costs by 35%.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "Industrial IoT Monitoring",
    tags: ["IoT", "Big Data", "Machine Learning", "Predictive Maintenance"]
  },
  {
    title: "Electric Vehicle Charging Network",
    description: "Designed the electrical infrastructure for a citywide EV charging network, optimizing power distribution, implementing smart charging algorithms, and integrating with renewable energy sources to minimize grid impact while maximizing availability.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "EV Charging Network",
    tags: ["EV Charging", "Smart Grid", "Load Balancing", "Renewable Energy"]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-black to-zinc-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-zinc-900 p-1 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-800">
            <div className="rounded-full bg-zinc-800 p-2">
              <Database className="h-5 w-5 text-cyan-500" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-zinc-400 md:text-xl">
              A selection of my most impactful engineering projects in power systems, automation, and renewable energy
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 