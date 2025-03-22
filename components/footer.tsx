"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Building2, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const [email, setEmail] = useState("")
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    alert("Thank you for subscribing to our newsletter!")
    setEmail("")
  }

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "News & Press", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Commercial", href: "#" },
        { name: "Residential", href: "#" },
        { name: "Infrastructure", href: "#" },
        { name: "Renovation", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Projects", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
  ]

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full bg-construction-gray pt-12 md:pt-16 lg:pt-20 text-white"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-construction-yellow" />
              <span className="text-xl font-bold">
                <span className="text-construction-yellow">Build</span>
                <span className="text-white">Craft</span>
              </span>
            </div>
            <p className="text-sm text-white/70">
              Premier construction services with unmatched quality, innovation, and reliability for your most ambitious
              projects.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-construction-yellow">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-construction-yellow">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-construction-yellow">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-construction-yellow">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants} className="space-y-4">
              <h4 className="text-base font-semibold text-construction-yellow">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-construction-yellow hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          variants={itemVariants}
          className="mt-12 rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-base font-semibold text-construction-yellow">Subscribe to our newsletter</h4>
              <p className="text-sm text-white/70">
                Stay updated with our latest projects, industry insights, and company news.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-construction-yellow"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-construction-yellow hover:bg-construction-yellow/90 text-construction-gray"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-construction-yellow/20">
              <MapPin className="h-5 w-5 text-construction-yellow" />
            </div>
            <div>
              <p className="font-medium text-white">Address</p>
              <p className="text-sm text-white/70">123 Construction Way, Building City, BC 12345</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-construction-yellow/20">
              <Phone className="h-5 w-5 text-construction-yellow" />
            </div>
            <div>
              <p className="font-medium text-white">Phone</p>
              <p className="text-sm text-white/70">(555) 123-4567</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-construction-yellow/20">
              <Mail className="h-5 w-5 text-construction-yellow" />
            </div>
            <div>
              <p className="font-medium text-white">Email</p>
              <p className="text-sm text-white/70">info@buildcraft.com</p>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-between space-y-4 py-6 md:flex-row md:space-y-0"
        >
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} BuildCraft Construction. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="#" className="text-white/50 hover:text-construction-yellow hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-construction-yellow hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/50 hover:text-construction-yellow hover:underline">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

