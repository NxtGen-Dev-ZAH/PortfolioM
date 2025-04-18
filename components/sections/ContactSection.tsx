import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-zinc-900 to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-800/20 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center justify-center rounded-full bg-zinc-900 p-1 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-800 self-start">
              <div className="rounded-full bg-zinc-800 p-2">
                <Mail className="h-5 w-5 text-cyan-500" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
              <p className="max-w-[600px] text-zinc-400 md:text-xl">
                I'm available for consulting, project work, and long-term engagements. Let's discuss how I can
                contribute to your electrical engineering needs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-zinc-800 p-2 w-10 h-10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="font-medium">alexander.maxwell@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-zinc-800 p-2 w-10 h-10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Location</p>
                  <p className="font-medium">San Francisco, California</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-black font-medium">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-cyan-500 transition-colors"
              >
                Download Resume
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
            <h3 className="text-xl font-bold">Send a Message</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Subject
                </label>
                <input
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Subject of your message"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-black font-medium">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 