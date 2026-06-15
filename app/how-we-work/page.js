'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HowWeWork() {
  const steps = [
    {
      n: '01',
      title: 'Discovery & Assessment',
      details: [
        'Structured 2-week discovery sprint',
        'Technology stack audit',
        'Team capabilities assessment',
        'Identify quick wins and blockers',
        'Roadmap and costing delivered',
      ],
    },
    {
      n: '02',
      title: 'Design & Architecture',
      details: [
        'Pragmatic architecture aligned to your outcomes',
        'Technology selection rationale',
        'Migration/deployment strategy',
        'Risk assessment and mitigation',
        'Executive-ready presentation deck',
      ],
    },
    {
      n: '03',
      title: 'Delivery & Implementation',
      details: [
        'Senior engineers embedded on your team',
        'Agile sprints with clear milestones',
        'Continuous code review and quality gates',
        'Knowledge transfer and documentation',
        'Go-live planning and execution',
      ],
    },
    {
      n: '04',
      title: 'Operations & Optimization',
      details: [
        '24/7 managed operations (if needed)',
        'Performance monitoring and optimization',
        'Cost governance and FinOps',
        'Quarterly business reviews',
        'Continuous improvement roadmap',
      ],
    },
  ]


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
            How We <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            A proven four-stage methodology that transforms legacy infrastructure into modern, scalable platforms. Delivered by senior architects who genuinely care about your outcomes.
          </p>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="container mx-auto px-6 lg:px-10 py-20">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              <div className={i % 2 === 1 ? 'md:order-3' : ''}>
                <div className="text-6xl font-bold text-indigo-100 mb-4">{step.n}</div>
                <h2 className="text-3xl font-bold mb-6">{step.title}</h2>
                <ul className="space-y-3">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-indigo-200 to-blue-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">{step.n}</div>
                    <p className="text-indigo-700 font-semibold">{step.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-6 lg:px-10 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Typical Project Timeline</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { weeks: 'Week 1-2', phase: 'Discovery Sprint', activities: 'Stakeholder interviews, tech audit, constraints mapping' },
              { weeks: 'Week 3-4', phase: 'Design & Planning', activities: 'Architecture design, roadmap creation, risk mitigation' },
              { weeks: 'Week 5-16', phase: 'Delivery', activities: 'Sprint-based development, code review, QA, documentation' },
              { weeks: 'Week 17+', phase: 'Operations', activities: 'Production support, optimization, knowledge transfer' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-24 flex-shrink-0">
                  <div className="text-sm font-bold text-indigo-600 bg-indigo-50 p-3 rounded-lg text-center">{item.weeks}</div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-lg mb-1">{item.phase}</h3>
                  <p className="text-slate-600 text-sm">{item.activities}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Expected Outcomes</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: '< 30 days', desc: 'Time-to-first-value' },
              { metric: '40%', desc: 'Average cost reduction' },
              { metric: '99.98%', desc: 'Platform uptime' },
              { metric: '10x', desc: 'Faster deployment cycles' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl font-bold mb-2">{item.metric}</div>
                <div className="text-indigo-100">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Transformation?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Let's discuss your project scope and timeline. Schedule a free discovery call with our team.
        </p>
        <Link href="/#contact">
          <Button className="rounded-full px-8 h-12 bg-indigo-600 hover:bg-indigo-700 text-base">
            Book Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
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

