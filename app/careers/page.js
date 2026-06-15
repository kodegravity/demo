'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, MapPin, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const JOBS = [
  {
    title: 'Senior Cloud Architect',
    level: 'Senior',
    location: 'Toronto, ON',
    type: 'Full-time',
    desc: 'Lead cloud architecture initiatives for Fortune 500 clients. Design scalable, secure infrastructure across AWS, Azure, and GCP.',
  },
  {
    title: 'Platform Engineer - Kubernetes',
    level: 'Mid-Senior',
    location: 'Toronto, ON',
    type: 'Full-time',
    desc: 'Build and maintain Kubernetes platforms, CI/CD pipelines, and developer tools. 5+ years of hands-on platform engineering required.',
  },
  {
    title: 'Data & Analytics Engineer',
    level: 'Mid',
    location: 'Remote',
    type: 'Full-time',
    desc: 'Design and implement enterprise data warehouses, lakes, and ML pipelines. Work with leading technology firms on analytics transformation.',
  },
  {
    title: 'Security Engineer - Cloud',
    level: 'Senior',
    location: 'Toronto, ON',
    type: 'Full-time',
    desc: 'Design zero-trust architectures, conduct penetration testing, and lead security hardening initiatives for enterprise cloud environments.',
  },
  {
    title: 'DevOps Engineer',
    level: 'Mid',
    location: 'Toronto, ON',
    type: 'Full-time',
    desc: 'Automate infrastructure provisioning, manage IaC frameworks, and implement observability solutions. Strong Terraform and GitOps experience required.',
  },
  {
    title: 'Solutions Architect',
    level: 'Senior',
    location: 'Toronto, ON',
    type: 'Full-time',
    desc: 'Partner with enterprises to design and implement technology solutions. Present to C-suite stakeholders and lead technical engagements.',
  },
]

export default function Careers() {
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
            Join Our <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            We're hiring senior engineers who want to build enterprise-grade platforms. Work on impactful projects, grow your skills, and make a real difference.
          </p>
        </motion.div>
      </section>

      {/* Culture */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Hexiware</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'High-Impact Projects', desc: 'Work on mission-critical infrastructure for Fortune 500 companies.' },
              { icon: Users, title: 'Senior Team', desc: 'Learn from and collaborate with the best engineers in the industry.' },
              { icon: Briefcase, title: 'Professional Growth', desc: 'Clear career progression, mentorship, and continuous learning.' },
              { icon: MapPin, title: 'Flexible Work', desc: 'Remote-friendly options and flexible working arrangements.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <item.icon className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-6 lg:px-10 py-20">
        <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
        <div className="space-y-4">
          {JOBS.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold group-hover:text-indigo-600 transition">{job.title}</h3>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded">{job.level}</span>
                  </div>
                  <p className="text-slate-600 mb-3">{job.desc}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" /> {job.type}
                    </span>
                  </div>
                </div>
                <Button className="w-full md:w-auto rounded-full bg-indigo-600 hover:bg-indigo-700">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits & Perks</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              'Competitive salary & bonus',
              'Comprehensive health insurance',
              'RRSP matching (up to 4%)',
              'Home office setup allowance',
              'Professional development budget',
              'Flexible PTO policy',
              'Annual team events',
              'Remote-friendly culture',
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="h-6 w-6 rounded-full bg-indigo-600 text-white grid place-items-center text-sm">✓</div>
                <span className="font-medium text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Don't See Your Role?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          We're always looking for talented engineers. Send us your resume and let's talk about how you can grow with Hexiware.
        </p>
        <Button className="rounded-full px-8 h-12 bg-indigo-600 hover:bg-indigo-700 text-base">
          Send Your CV
        </Button>
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

