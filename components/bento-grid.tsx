"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Building, Clock, HardHat, Ruler, Shield, Users } from "lucide-react"

const bentoItems = [
  {
    id: 1,
    title: "Commercial Excellence",
    description: "Innovative commercial spaces designed for productivity and growth",
    icon: Building,
    color: "bg-blue-100",
    iconColor: "text-construction-blue",
    size: "col-span-1 row-span-1",
    borderColor: "group-hover:border-construction-blue",
  },
  {
    id: 2,
    title: "Residential Craftsmanship",
    description: "Custom homes built with attention to every detail",
    icon: HardHat,
    color: "bg-amber-100",
    iconColor: "text-construction-orange",
    size: "col-span-1 row-span-1",
    borderColor: "group-hover:border-construction-orange",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&w=600",
    size: "col-span-2 row-span-2 md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Safety First",
    description: "Rigorous safety protocols on every project",
    icon: Shield,
    color: "bg-red-100",
    iconColor: "text-construction-red",
    size: "col-span-1 row-span-1",
    borderColor: "group-hover:border-construction-red",
  },
  {
    id: 5,
    title: "Expert Team",
    description: "Skilled professionals with decades of combined experience",
    icon: Users,
    color: "bg-green-100",
    iconColor: "text-green-600",
    size: "col-span-1 row-span-1",
    borderColor: "group-hover:border-green-600",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/8961160/pexels-photo-8961160.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    size: "col-span-2 row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    title: "On-Time Delivery",
    description: "Projects completed on schedule without compromising quality",
    icon: Clock,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
    size: "col-span-1 row-span-1",
    borderColor: "group-hover:border-purple-600",
  },
  {
    id: 8,
    title: "Precision Engineering",
    description: "Exacting standards and meticulous planning in every build",
    icon: Ruler,
    color: "bg-teal-100",
    iconColor: "text-teal-600",
    size: "col-span-1 row-span-1",
    borderColor: "group-hover:border-teal-600",
  },
]

export default function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-yellow-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-construction-orange px-3 py-1 text-sm text-white font-medium">
              Our Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-construction-gray">
              What Sets Us Apart
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the range of services and specialties that set us apart in the construction industry.
            </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {bentoItems.map((item) => (
            <motion.div
              key={item.id}
              className={`${item.size} group overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-md ${item.borderColor || ""}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {item.image ? (
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt="Project showcase"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/20 to-construction-orange/20" />
                </div>
              ) : (
                <div className={`flex h-full flex-col justify-between p-6 ${item.color}`}>
                  <div className="space-y-2">
                    <div className={`rounded-full p-2 w-fit ${item.iconColor}`}>
                      {item.icon && <item.icon className="h-6 w-6" />}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

