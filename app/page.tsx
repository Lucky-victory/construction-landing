import { Building2, Clock, HardHat, Truck } from "lucide-react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import BentoGrid from "@/components/bento-grid"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />

        {/* Services Section */}
        <AnimatedSection className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-construction-gradient px-3 py-1 text-sm text-white font-medium">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-construction-gray">
                  Building Excellence
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive construction services with a focus on quality, safety, and client
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <AnimatedSection
                delay={0.1}
                direction="left"
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md bg-white hover:border-construction-yellow"
              >
                <Building2 className="h-12 w-12 text-construction-blue" />
                <h3 className="text-xl font-bold">Commercial</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Office buildings, retail spaces, and industrial facilities
                </p>
              </AnimatedSection>
              <AnimatedSection
                delay={0.2}
                direction="left"
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md bg-white hover:border-construction-orange"
              >
                <HardHat className="h-12 w-12 text-construction-orange" />
                <h3 className="text-xl font-bold">Residential</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Custom homes, renovations, and multi-family housing
                </p>
              </AnimatedSection>
              <AnimatedSection
                delay={0.3}
                direction="right"
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md bg-white hover:border-construction-red"
              >
                <Truck className="h-12 w-12 text-construction-red" />
                <h3 className="text-xl font-bold">Infrastructure</h3>
                <p className="text-center text-sm text-muted-foreground">Roads, bridges, and public works projects</p>
              </AnimatedSection>
              <AnimatedSection
                delay={0.4}
                direction="right"
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md bg-white hover:border-construction-darkblue"
              >
                <Clock className="h-12 w-12 text-construction-darkblue" />
                <h3 className="text-xl font-bold">Renovation</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Remodeling, restoration, and historic preservation
                </p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        <div id="projects">
          <PortfolioSection />
        </div>
        <div id="about">
          <BentoGrid />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  )
}

