import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  id?: string;
}

const Certification = ({ title, issuer, date, id }: CertificationProps) => {
  return (
    <Card className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-cyan-500/50 transition-colors group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-zinc-800 p-3 group-hover:bg-cyan-500/10 transition-colors">
            <Award className="h-6 w-6 text-cyan-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <p className="text-zinc-400 text-sm mb-2">{issuer}</p>
            <p className="text-zinc-500 text-sm">Issued: {date}{id && ` • ${id}`}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialProps {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

const Testimonial = ({ name, role, initials, quote }: TestimonialProps) => {
  return (
    <Card className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-cyan-500/50 transition-colors">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-zinc-800 h-12 w-12 flex items-center justify-center">
              <span className="text-cyan-500 font-bold">{initials}</span>
            </div>
            <div>
              <h4 className="font-bold">{name}</h4>
              <p className="text-zinc-400 text-sm">{role}</p>
            </div>
          </div>
          <p className="text-zinc-400 italic">
            {quote}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "Professional Engineer (PE) License",
      issuer: "California Board of Professional Engineers",
      date: "2018",
      id: "License #EL12345"
    },
    {
      title: "Certified Energy Manager (CEM)",
      issuer: "Association of Energy Engineers",
      date: "2019",
      id: "Certification #CEM12345"
    },
    {
      title: "LEED Accredited Professional",
      issuer: "U.S. Green Building Council",
      date: "2020",
      id: "Credential #LEED12345"
    },
    {
      title: "IEEE Senior Member",
      issuer: "Institute of Electrical and Electronics Engineers",
      date: "2021"
    },
    {
      title: "Innovation in Renewable Energy Award",
      issuer: "American Society of Mechanical Engineers",
      date: "2022",
      id: "For Solar Optimization System"
    },
    {
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      date: "2019",
      id: "Certification #PMP12345"
    }
  ];

  const testimonials = [
    {
      name: "John Donovan",
      role: "CTO, EnergyTech Solutions",
      initials: "JD",
      quote: "Alexander's expertise in power systems and renewable energy integration was instrumental in the success of our microgrid project. His innovative approach and attention to detail resulted in a system that exceeded our expectations."
    },
    {
      name: "Sarah Rodriguez",
      role: "Operations Director, Manufacturing Solutions",
      initials: "SR",
      quote: "The automation system Alexander designed for our manufacturing facility has dramatically improved our efficiency and reduced downtime. His technical knowledge and problem-solving abilities are truly exceptional."
    }
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 bg-gradient-to-b from-black to-zinc-900 relative">
      <div className="absolute inset-0 bg-grid-zinc-800/20 bg-[size:30px_30px] opacity-20"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-zinc-900 p-1 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-800">
            <div className="rounded-full bg-zinc-800 p-2">
              <Award className="h-5 w-5 text-cyan-500" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications & Awards</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-zinc-400 md:text-xl">
              Professional certifications and recognition in the field of electrical engineering
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Certification
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              id={cert.id}
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Client Testimonials</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                initials={testimonial.initials}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection; 