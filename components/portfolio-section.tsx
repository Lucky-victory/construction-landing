"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "@/components/animated-section"
import { useRef } from "react"

const projects = [
  {
    id: 1,
    category: "commercial",
    title: "Modern Office Complex",
    description: "A state-of-the-art office building with sustainable features and innovative design.",
    image: "https://images.pexels.com/photos/7078383/pexels-photo-7078383.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: "2023",
  },
  {
    id: 2,
    category: "commercial",
    title: "Retail Shopping Center",
    description: "A contemporary shopping center with multiple retail spaces and amenities.",
    image:
      "https://images.pexels.com/photos/2861655/pexels-photo-2861655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    year: "2022",
  },
  {
    id: 3,
    category: "residential",
    title: "Luxury Apartment Building",
    description: "High-end residential apartments with premium finishes and community spaces.",
    image:
      "https://images.pexels.com/photos/14243303/pexels-photo-14243303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    year: "2023",
  },
  {
    id: 4,
    category: "residential",
    title: "Custom Family Home",
    description: "A bespoke single-family residence designed to client specifications.",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    year: "2021",
  },
  {
    id: 5,
    category: "infrastructure",
    title: "Highway Expansion Project",
    description: "Major infrastructure improvement expanding capacity and enhancing safety.",
    image:
      "https://images.pexels.com/photos/21853717/pexels-photo-21853717/free-photo-of-wide-asphalt-highway.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: "2022",
  },
  {
    id: 6,
    category: "infrastructure",
    title: "Municipal Bridge",
    description: "A modern bridge connecting communities with sustainable materials.",
    image:
      "https://images.pexels.com/photos/8961158/pexels-photo-8961158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    year: "2023",
  },
]

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("all")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5 },
        },
      }}
      className="w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-construction-blue px-3 py-1 text-sm text-white font-medium">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-construction-gray">Our Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our completed projects showcasing our expertise and quality craftsmanship.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <AnimatedSection direction="down" delay={0.2} className="flex justify-center">
              <TabsList className="mb-8 bg-yellow-50 p-1">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-construction-yellow data-[state=active]:text-construction-gray"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="commercial"
                  className="data-[state=active]:bg-construction-yellow data-[state=active]:text-construction-gray"
                >
                  Commercial
                </TabsTrigger>
                <TabsTrigger
                  value="residential"
                  className="data-[state=active]:bg-construction-yellow data-[state=active]:text-construction-gray"
                >
                  Residential
                </TabsTrigger>
                <TabsTrigger
                  value="infrastructure"
                  className="data-[state=active]:bg-construction-yellow data-[state=active]:text-construction-gray"
                >
                  Infrastructure
                </TabsTrigger>
              </TabsList>
            </AnimatedSection>

            <TabsContent value={activeTab} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="group relative overflow-hidden rounded-lg border shadow-sm hover:shadow-md hover:border-construction-yellow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 bg-construction-yellow text-construction-gray px-3 py-1 text-sm font-medium">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <span className="text-sm text-construction-orange font-medium">{project.year}</span>
                      </div>
                      <p className="mt-2 text-muted-foreground">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>

        <AnimatedSection direction="up" delay={0.4} className="mt-12 flex justify-center">
          <Button size="lg" className="bg-construction-blue hover:bg-construction-blue/90 text-white">
            View All Projects
          </Button>
        </AnimatedSection>
      </div>
    </motion.section>
  )
}

