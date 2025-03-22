"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="w-full overflow-hidden">
      <div className="relative h-[85vh] w-full">
        <div ref={parallaxRef} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern construction site"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/30 to-construction-orange/30 mix-blend-overlay" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building Your <span className="text-construction-yellow">Vision</span>, Crafting Your{" "}
              <span className="text-construction-yellow">Future</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-[700px] text-lg text-white/90 md:text-xl"
            >
              Premier construction services with unmatched quality, innovation, and reliability for your most ambitious
              projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4"
            >
              <Button
                size="lg"
                className="gap-1 bg-construction-yellow hover:bg-construction-yellow/90 text-construction-gray"
              >
                Our Projects <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-construction-blue/20 text-white border-construction-yellow hover:bg-construction-blue/30 backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  )
}

