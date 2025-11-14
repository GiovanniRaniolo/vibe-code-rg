import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Zap, Globe, Briefcase, BookOpen, Code2, Users, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border py-4">
        <div className="container mx-auto px-4">
          <img src="/glitch_logo.png" alt="Every" className="h-8" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Learn <span className="text-primary">Claude Code</span> in One Day
        </h2>
        <p className="text-xl mb-4">
          A live, beginner-friendly workshop with <span className="font-semibold">Dan Shipper</span>—walk away with a working project and the confidence to use
        </p>
        <p className="text-xl mb-8">Claude with code every day</p>
        
        <p className="text-muted-foreground mb-2 max-w-2xl mx-auto">
          Use guided curriculum and group lessons, work on hands-on support—using the tools Claude already knows—like React, JavaScript, HTML and CSS.
        </p>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Work on your own app idea in real time. Make it yours. Ship it to the world. No experience needed.
        </p>
        
        <p className="text-sm text-muted-foreground mb-6">
          DECEMBER 2024 SOLD OUT DECEMBER 2025 FILLING
        </p>
        
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg mb-12">
          Get Started and Launch a New App (It's Simple)
        </Button>

        {/* Browser Window Mockup */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-secondary rounded-t-lg p-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-muted rounded px-3 py-1 text-xs text-muted-foreground ml-4">
              Welcome to Claude Code
            </div>
          </div>
          <div className="bg-black p-8">
            <div className="pixelated-text text-6xl md:text-8xl text-primary leading-tight">
              CLAUDE<br/>CODE
            </div>
          </div>
        </div>

        {/* Image Cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Card className="bg-secondary border-border overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
              Classical Art 1
            </div>
            <div className="p-4 text-sm">Focus on the core concepts of Claude Code that will transform the way you code</div>
          </Card>
          <Card className="bg-secondary border-border overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
              Classical Art 2
            </div>
            <div className="p-4 text-sm">Develop and run an actual project at-home, and watch an expert look through these concepts in live (5 mins per sprint for demos)</div>
          </Card>
          <Card className="bg-secondary border-border overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
              Classical Art 3
            </div>
            <div className="p-4 text-sm">Build the community by exchanging between all participants and Dan about concepts, tips, tricks, and difficulties</div>
          </Card>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-primary max-w-4xl mx-auto"></div>

      {/* What You'll Learn Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-8">What you'll learn (and do)</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Code2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">What Claude Code is—how you use it from beginner training</h4>
                </div>
              </div>
              <div className="flex gap-4">
                <Target className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Learn helpful modern tools and frameworks with</h4>
                </div>
              </div>
              <div className="flex gap-4">
                <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Walk out of a day using actual Claude</h4>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Deploy an application as an engineer Alice or an idea, resolve, or enforce</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-8">How the day works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-primary font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <p>Learn the fundamentals—getting comfortable with Claude, learning how it works, and understanding key concepts</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <p>Practice—a series of exercises to practice key skills</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <p>Build something together—a live coding session where we'll build an app</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <p>Work on your idea—follow our guide to build an app using a template</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Outcomes you can expect</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="pixelated-text text-4xl text-primary">CLAUDE<br/>CODE</div>
            </div>
            <p className="text-sm text-muted-foreground">Walk into the day with no programming experience and walk out with a live application</p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">Understand not just how to use Claude but why— learn the fundamentals that guide when and how to use AI</p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">A live application—put your vision into the world at the end of the day</p>
          </div>
          <div className="text-center">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">A clear route to build your next 10 applications—understand what makes sense as an AI project</p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="container mx-auto px-4 py-16 bg-secondary/30">
        <h3 className="text-3xl font-bold text-center mb-12">What you get</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm">A comprehensive curriculum that takes you from zero to hero</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm">A full day live online workshop with Dan and 20-30 participants</p>
          </div>
          <div className="text-center">
            <Code2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm">A full day course—covers everything you need to go from completely new to professional</p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm">A running app by the end of the day—something small to be incredibly proud of</p>
          </div>
          <div className="text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm">A live group setting written guide to make apps — you get lifetime access to all materials</p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-sm">Recordings of the workshop sessions to integrate into your life at your own pace</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-sm text-muted-foreground space-y-2">
          <p>Here's all the components inside of the full day course that will take you from zero to deploying your first app:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>What is Claude Code and how does it work? (45 min)</li>
            <li>The fundamentals—what you need to know to code with Claude (2 hours)</li>
            <li>Start an idea—find an idea that is worth working on and start your app</li>
            <li>Guided live building—watch Dan build an app live, from start to finish</li>
            <li>Work time—build your app, ask questions, get support from Dan and other classmates</li>
            <li>Try app-share, answer questions</li>
          </ul>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-2">Details</h3>
          <div className="flex justify-center gap-8 text-sm mb-8">
            <div>
              <span className="font-semibold">VIRTUAL 1:1</span>
            </div>
            <div>
              <span className="font-semibold">$2,495 $1,495 PT</span>
            </div>
            <div>
              <span className="font-semibold">10x 60 HOUR</span>
            </div>
          </div>
          
          <Card className="bg-secondary border-border p-8 mb-8">
            <div className="text-5xl font-bold mb-2">$1,500</div>
            <div className="text-muted-foreground mb-6">For the day</div>
            <p className="text-sm text-muted-foreground mb-6">
              SINGLE PAYCHECK • THIS ONE TIME • COMPLETE A REAL APP
            </p>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
              Join the Workshop Today
            </Button>
          </Card>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">A note from Dan</h3>
          <div className="grid md:grid-cols-[200px,1fr] gap-8">
            <div className="aspect-square bg-muted rounded flex items-center justify-center text-muted-foreground">
              Dan's Photo
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                I want to tell you about one of the most incredible days I've ever had. It was April 13th, 2024, and I was teaching a small group of people how to build apps with Claude Code for the very first time.
              </p>
              <p>
                I wasn't sure what to expect. Would people get it? Would they be able to build something? Would they have fun?
              </p>
              <p>
                The answer was yes to all three. By the end of the day, every single person had built and deployed a working application. Not a tutorial. Not a toy. A real app that they could share with friends and family.
              </p>
              <p>
                The most amazing part wasn't just that everyone shipped something. It was how they felt at the end. There was this palpable sense of "I can do this. I can build things. I can make my ideas real."
              </p>
              <p>
                That feeling is what this workshop is about. Not just learning Claude Code, but discovering that you have the power to build anything you can imagine.
              </p>
              <p>
                I hope you'll join me for a day that might just change how you see yourself and what you're capable of.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Frequently asked questions</h3>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">Is this live or self-paced?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              This is a live, full-day workshop. You'll be working alongside Dan and a small group of other participants. You'll get recordings afterward so you can review anything you missed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">Do I need to know how to code?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No! This workshop is designed for complete beginners. If you've never written a line of code before, you're in the right place. We'll start from the very beginning and build up from there.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">What if I can't make the live session?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We highly recommend attending live so you can ask questions and get real-time support. But if you can't make it, you'll get access to all the recordings and materials.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">What if I already know how to code?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Great! You'll move through the fundamentals quickly and have more time to work on your project. Many experienced developers have taken this workshop to learn how to work effectively with AI coding tools.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">How long does the workshop run?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              The workshop runs for approximately 6-8 hours, with breaks throughout the day. We'll start in the morning and by evening you'll have a deployed application.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">What do I need to bring/have ready?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Just a computer and an internet connection. We'll provide all the tools, templates, and guidance you need. Make sure you have a Claude account set up before the workshop starts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">Can I build anything I want?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! We provide templates and guidance to help you get started, but you're free to build whatever you want. Many people come with an idea already in mind.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left">Is there a community I can join?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! All workshop participants get access to our private Discord community where you can continue to learn, share projects, and get support from Dan and other alumni.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left">What's your refund policy?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We offer a 30-day money-back guarantee. If you're not satisfied with the workshop for any reason, just let us know within 30 days and we'll refund your full purchase price.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img src="/glitch_logo.png" alt="Every" className="h-8 mb-2" />
            <h3 className="text-3xl font-bold mb-4">What Comes Next</h3>
            <p className="text-muted-foreground mb-8">Keep in touch. Build your dream app in one day</p>
            
            <div className="flex gap-4 mb-8">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-background border border-border rounded px-4 py-2 text-sm"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-sm">
              <div>
                <h4 className="font-semibold mb-4">About</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">Team</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">& more</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">Work</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Newsletter</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Consulting</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">AI Strategy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Engage</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">Twitter</a></li>
                  <li><a href="#" className="hover:text-foreground transition">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
