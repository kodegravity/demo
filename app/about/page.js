'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Target, Zap, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200/70">
        <div className="container mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-700 grid place-items-center shadow-lg shadow-indigo-500/30">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="font-bold text-xl">Hexiware</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="outline" className="rounded-full">← Back Home</Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 lg:px-10 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Hexiware</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Founded in 2015, Hexiware has been helping enterprise teams transform their cloud, data, and AI strategies. We partner with leaders to build resilient, scalable platforms that drive measurable business outcomes.
          </p>
        </motion.div>
      </section>

      {/* Mission & Values */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To empower enterprises with pragmatic, senior-led consulting that transforms legacy infrastructure into cloud-native, data-driven platforms.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe consulting should be honest, outcomes-focused, and delivered by engineers who care deeply about long-term success—not short-term billable hours.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <ul className="space-y-4">
                {[
                  { icon: Target, title: 'Results-Driven', desc: 'We measure success by your outcomes, not our hours.' },
                  { icon: Users, title: 'Genuine Partnership', desc: 'We become an extension of your team.' },
                  { icon: Zap, title: 'Senior Expertise', desc: 'Only our best engineers work with you.' },
                  { icon: Globe, title: 'Pragmatic Solutions', desc: 'We solve real problems, not implement buzzwords.' },
                ].map((v, i) => (
                  <li key={i} className="flex gap-3">
                    <v.icon className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">{v.title}</div>
                      <div className="text-sm text-slate-600">{v.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team & Stats */}
      <section className="container mx-auto px-6 lg:px-10 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { stat: '120+', label: 'Enterprise Projects' },
            { stat: '200+', label: 'Cloud Engineers' },
            { stat: '11+', label: 'Years of Excellence' },
            { stat: '99.98%', label: 'Platform Uptime' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{item.stat}</div>
              <div className="text-slate-600">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-bold mb-12">Our Story</h2>
          <div className="max-w-3xl space-y-6 text-slate-600 leading-relaxed">
            <p>
              Hexiware was founded in 2015 by a group of senior architects frustrated with the gap between enterprise needs and consulting delivery. We saw talented engineers burning out on projects that were more about billable hours than real outcomes.
            </p>
            <p>
              We started small—just four engineers working on one data platform project. Within two years, we'd expanded to Toronto and built a reputation for delivering complex cloud and data transformations that actually stuck.
            </p>
            <p>
              Today, we've grown to 200+ engineers across multiple offices, but we've kept our founding values: hire only senior talent, measure success by client outcomes, and stay ruthlessly focused on outcomes—not process.
            </p>
            <p>
              From Fortune 500 financial services firms to high-growth startups, our clients trust us with mission-critical infrastructure. And we take that responsibility seriously, every single day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Let's discuss your cloud, data, and AI challenges. Schedule a call with one of our senior architects.
        </p>
        <Link href="/#contact">
          <Button className="rounded-full px-8 h-12 bg-indigo-600 hover:bg-indigo-700 text-base">
            Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 lg:px-10 text-center text-sm">
          <p>© {new Date().getFullYear()} Hexiware Consulting Inc. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

