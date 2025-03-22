"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AnimatedSection from "@/components/animated-section"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Johnson Enterprises",
    content:
      "Working with this construction company was a seamless experience. Their attention to detail and commitment to quality exceeded our expectations. The project was completed on time and within budget.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Developer",
    content:
      "I've worked with many construction firms over the years, but none have matched the level of professionalism and expertise that this team brings. They transformed our vision into reality with precision.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Homeowner",
    content:
      "Our home renovation was handled with such care and skill. The team was responsive, transparent, and delivered exceptional craftsmanship. We couldn't be happier with the results.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
          transition: { duration: 0.8 },
        },
      }}
      className="w-full py-12 md:py-24 lg:py-32 bg-construction-blue text-white"
    >
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-construction-yellow px-3 py-1 text-sm text-construction-gray font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Client Feedback</h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} direction="up" className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm md:p-10">
            <Quote className="absolute right-6 top-6 h-12 w-12 text-construction-yellow opacity-20" />

            <div className="relative h-[250px] md:h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <blockquote className="space-y-4">
                    <p className="text-lg italic text-white/90 md:text-xl">"{testimonials[current].content}"</p>
                    <footer className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12 border-2 border-construction-yellow">
                        <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                        <AvatarFallback className="bg-construction-yellow text-construction-gray">
                          {testimonials[current].name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white">{testimonials[current].name}</p>
                        <p className="text-sm text-white/70">{testimonials[current].role}</p>
                      </div>
                    </footer>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  className={`h-2 w-2 rounded-full ${index === current ? "bg-construction-yellow" : "bg-white/30"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute bottom-6 right-6 flex space-x-2 md:bottom-10 md:right-10">
              <Button
                size="icon"
                variant="outline"
                onClick={prev}
                aria-label="Previous testimonial"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={next}
                aria-label="Next testimonial"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </motion.section>
  )
}

