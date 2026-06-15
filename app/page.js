'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, Cloud, ShieldCheck, Database, Server, Cog, LifeBuoy,
  CheckCircle2, Sparkles, Rocket, BarChart3, Lock, Workflow, Quote,
  Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Menu, X, ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Company', href: '#company' },
  { label: 'How We Work', href: '#how' },
  { label: 'Case Studies', href: '#cases' },
]

const SERVICES = [
  { icon: Database, title: 'Data & Analytics', desc: 'Data warehouses, lakes, streaming pipelines, ML/AI models — maintained and scaled across cloud and on-prem.' },
  { icon: ShieldCheck, title: 'Cyber Security', desc: 'End-to-end security solutions that protect your data, networks and reputation with zero-trust architecture.' },
  { icon: Cloud, title: 'Cloud Migration', desc: 'Lift, shift and re-architect mission critical workloads to AWS, Azure or GCP — without business disruption.' },
  { icon: LifeBuoy, title: 'Managed IT Services', desc: 'Proactive, 24×7 managed services delivered by experienced engineers who become an extension of your team.' },
  { icon: Workflow, title: 'DevOps & Platform', desc: 'CI/CD, Kubernetes, IaC and SRE — modern platforms that ship faster with confidence and observability.' },
  { icon: Lock, title: 'Data Protection & Recovery', desc: 'Backup, DR and resilience strategies for hybrid environments. Sleep well, recover faster.' },
]

const STEPS = [
  { n: '01', title: 'Discover', desc: 'We learn your business, current stack and constraints in a structured discovery sprint.' },
  { n: '02', title: 'Design', desc: 'Pragmatic architecture and a clear, costed roadmap aligned to outcomes — not buzzwords.' },
  { n: '03', title: 'Deliver', desc: 'Senior engineers build alongside your team using modern DevOps practices and quality gates.' },
  { n: '04', title: 'Operate', desc: 'We run, observe and evolve the platform — measurable SLAs and continuous improvement.' },
]

const TESTIMONIALS = [
  { quote: 'Hexiware modernised our data platform in 4 months. We finally trust our numbers and ship insights weekly.', name: 'Carl Oliver', role: 'Head of Data, FinPro' },
  { quote: 'Their engineers feel like our own team. The migration was the smoothest enterprise project we have ever run.', name: 'Christa Smith', role: 'CTO, Northstar Retail' },
  { quote: 'Knowledgeable, accountable and genuinely senior. They understood our culture and policies from day one.', name: 'Dean Tolle', role: 'VP Engineering, Vaultlane' },
]

const LOGOS = ['Aurelia', 'Northstar', 'Vaultlane', 'FinPro', 'Sigma', 'Helix']

const STATS = [
  { k: '120+', v: 'Enterprise projects shipped' },
  { k: '99.98%', v: 'Managed platform uptime' },
  { k: '40%', v: 'Avg. cloud cost reduction' },
  { k: '< 30d', v: 'Time-to-first-value' },
]

function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-700 grid place-items-center shadow-lg shadow-indigo-500/30">
        <Sparkles className="h-5 w-5 text-white" />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-white" />
      </div>
      <div className="leading-tight">
        <div className="font-bold text-xl tracking-tight">Hexiware</div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 -mt-0.5">consulting · cloud · data</div>
      </div>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200/70">
      <div className="container mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home"><Logo /></a>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition flex items-center gap-1">
              {n.label}
              {(n.label === 'Services' || n.label === 'Our Company') && <ChevronDown className="h-3 w-3" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden lg:inline-flex">
            <Button className="rounded-full px-6 h-11 bg-indigo-600 hover:bg-indigo-700">Contact</Button>
          </a>
          <button className="lg:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 font-medium text-slate-700">{n.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700">Contact</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
      {/* dashboard panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute right-0 top-6 w-[88%] max-w-[460px] bg-white rounded-2xl shadow-2xl shadow-indigo-900/30 p-5 float-slow"
      >
        <div className="flex items-center gap-1.5 mb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[10px] font-semibold text-slate-500">hexiware.cloud / overview</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {['Uptime', 'Cost', 'Latency'].map((t, i) => (
            <div key={t} className="rounded-lg bg-slate-50 p-3">
              <div className="text-[10px] text-slate-500">{t}</div>
              <div className="text-sm font-bold text-slate-800">{['99.98%','-38%','82ms'][i]}</div>
            </div>
          ))}
        </div>
        <div className="h-28 relative overflow-hidden rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50">
          <svg viewBox="0 0 400 120" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,90 C40,70 80,80 120,55 C160,30 200,70 240,50 C280,30 320,40 360,20 L400,15 L400,120 L0,120 Z" fill="url(#g)" />
            <path d="M0,90 C40,70 80,80 120,55 C160,30 200,70 240,50 C280,30 320,40 360,20 L400,15" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden"><div className="h-full w-3/4 bg-indigo-500" /></div>
          <span className="text-[10px] font-semibold text-slate-500">migration 74%</span>
        </div>
      </motion.div>

      {/* rocket */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute left-2 bottom-6 float-fast"
      >
        <div className="relative">
          <div className="w-24 h-44 rounded-t-full bg-gradient-to-b from-white to-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 border-4 border-white" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-3 rounded-sm bg-slate-300" />
          </div>
          <div className="w-0 h-0 mx-auto border-l-[28px] border-r-[28px] border-t-[60px] border-l-transparent border-r-transparent border-t-amber-400 shine" />
          <div className="absolute -left-5 top-24 w-6 h-16 bg-indigo-500/80 rounded-l-xl" />
          <div className="absolute -right-5 top-24 w-6 h-16 bg-indigo-500/80 rounded-r-xl" />
        </div>
      </motion.div>

      {/* floating chips */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
        className="absolute left-4 top-8 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
        <BarChart3 className="h-4 w-4 text-indigo-600" />
        <span className="text-xs font-semibold text-slate-700">+38% revenue</span>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
        className="absolute right-2 bottom-10 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-emerald-600" />
        <span className="text-xs font-semibold text-slate-700">SOC 2 ready</span>
      </motion.div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative hero-grad text-white overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -left-24 bottom-0 w-[420px] h-[420px] rounded-full bg-indigo-300/10 blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge className="bg-white/15 text-white border-white/20 hover:bg-white/20 rounded-full px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" /> Cloud Consulting & Data Engineering
          </Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Business IT specialists<br/>
            <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">you can trust.</span>
          </h1>
          <p className="mt-6 text-lg text-indigo-100/90 max-w-xl">
            Hexiware delivers proactive IT services and secure cloud solutions that reduce risk,
            enable growth and unlock measurable business outcomes — from data platforms to managed operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services">
              <Button size="lg" className="rounded-full h-12 px-7 bg-white text-indigo-700 hover:bg-indigo-50 shadow-xl shadow-indigo-900/30">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7 bg-transparent border-white/40 text-white hover:bg-white/10">
                Talk to an expert
              </Button>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-indigo-100/80">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> AWS Premier Partner</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> SOC 2 / ISO 27001</div>
          </div>
        </motion.div>

        <div className="relative">
          <HeroIllustration />
        </div>
      </div>

      {/* logo strip */}
      <div className="relative bg-white/95 backdrop-blur">
        <div className="container mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {LOGOS.map((l) => (
            <div key={l} className="text-center text-slate-400 font-bold tracking-widest text-lg select-none">{l.toUpperCase()}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="rounded-full mb-4">What we do</Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold">IT Solutions & Services</h2>
          <p className="mt-4 text-slate-600 text-lg">A recognised leader and challenger among professional and managed service providers — engineered for modern enterprise.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}>
              <Card className="card-hover group h-full rounded-2xl border-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-600/30">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-indigo-50 group-hover:bg-white/15 grid place-items-center mb-6 transition">
                    <s.icon className="h-7 w-7 text-indigo-600 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-slate-600 group-hover:text-indigo-100 leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 group-hover:text-white">
                    Find out more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Company() {
  return (
    <section id="company" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-indigo-100 rounded-[2rem] -z-10" />
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.v} className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-6">
                  <div className="text-3xl font-extrabold">{s.k}</div>
                  <div className="text-sm text-indigo-100 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {['AWS', 'Azure', 'GCP', 'Snowflake', 'Databricks', 'Kubernetes'].map((t) => (
                <div key={t} className="rounded-lg border border-slate-200 py-2 text-center text-xs font-semibold text-slate-600">{t}</div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Badge variant="secondary" className="rounded-full mb-4">Our company</Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold">Build your product right.</h2>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Building IT solutions is our passion. We boost your project performance by
            crafting platforms, products and data systems that meet every business need.
          </p>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            With 100+ senior engineers, architects and SREs on staff, we partner with you on
            full-cycle software development — or plug-in expertise exactly where you need it.
          </p>
          <div className="mt-8 space-y-3">
            {[
              'Senior, vetted engineers — no juniors hidden in invoices',
              'Outcome-based engagements with clear SLAs',
              'Security & compliance baked-in from day one',
              'Knowledge transfer so your team owns what we build',
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                <span className="text-slate-700">{t}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="inline-block mt-8">
            <Button className="rounded-full h-12 px-7 bg-indigo-600 hover:bg-indigo-700">Read more <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </a>
        </div>
      </div>
    </section>
  )
}

function HowWeWork() {
  return (
    <section id="how" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="rounded-full mb-4">How we work</Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold">A simple, senior-led delivery model</h2>
          <p className="mt-4 text-slate-600 text-lg">Four phases, one team, real outcomes — built around how modern engineering organisations actually ship.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="relative rounded-2xl border border-slate-200 p-7 h-full hover:border-indigo-300 hover:shadow-lg transition">
                <div className="text-5xl font-extrabold text-indigo-100 mb-2 group-hover:text-indigo-200">{s.n}</div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
                <div className="absolute top-6 right-6 h-9 w-9 rounded-full bg-indigo-600 text-white grid place-items-center">
                  {i === 0 && <Sparkles className="h-4 w-4" />}
                  {i === 1 && <Cog className="h-4 w-4" />}
                  {i === 2 && <Rocket className="h-4 w-4" />}
                  {i === 3 && <Server className="h-4 w-4" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="rounded-full mb-4">Case studies</Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold">What our clients say about <span className="text-indigo-600">Hexiware</span></h2>
          <p className="mt-4 text-slate-600 text-lg">Start working with a team that delivers everything you need to generate awareness, drive traction and connect with customers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card className="h-full rounded-2xl border-slate-200 hover:shadow-xl transition">
                <CardContent className="p-8">
                  <Quote className="h-7 w-7 text-amber-500 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <svg key={k} className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 8.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" /></svg>
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed">“{t.quote}”</p>
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="font-bold text-indigo-600">— {t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Enterprise() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="secondary" className="rounded-full mb-4">Enterprise grade</Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold">Focus on the enterprise at the core.</h2>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Hexiware delivers cloud services for enterprise workloads in the public cloud. We are recognised by
            Amazon Web Services as a Premier Consulting Partner — and trusted by regulated industries to migrate,
            modernise and operate their most critical platforms.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {['Healthcare', 'Financial Services', 'Retail', 'Manufacturing', 'Public Sector', 'SaaS'].map((s) => (
              <div key={s} className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="h-4 w-4 text-indigo-600" />{s}</div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 p-10 text-white shadow-2xl">
            <div className="text-sm uppercase tracking-widest text-indigo-200">Hexiware Platform</div>
            <div className="mt-2 text-3xl font-extrabold">Observability that pays for itself</div>
            <p className="mt-3 text-indigo-100">Unified dashboards across AWS, Azure & GCP. Cost, security and SLA in one pane.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[{k:'37+',v:'integrations'},{k:'24×7',v:'SOC support'},{k:'45 min',v:'avg MTTR'}].map((s)=>(
                <div key={s.v} className="rounded-xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">{s.k}</div>
                  <div className="text-xs text-indigo-200">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      toast.success('Thanks! Our team will be in touch within 1 business day.')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-700 to-blue-800 text-white">
      <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Badge className="bg-white/15 border-white/20 text-white rounded-full mb-4">Get in touch</Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold">Let's build something resilient.</h2>
          <p className="mt-5 text-indigo-100 text-lg max-w-md">
            Tell us about your challenge. A senior consultant will reply within one business day with a perspective —
            not a sales pitch.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3"><Mail className="h-5 w-5" /><a href="mailto:hello@hexiware.com" className="hover:underline">hello@hexiware.com</a></div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5" /><a href="tel:+18005550199">+1 (800) 555-0199</a></div>
            <div className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5" /><span>Suite 800, 250 Yonge Street,<br/>Toronto, ON M5B 2L7, Canada</span></div>
          </div>
        </div>
        <form onSubmit={submit} className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Name</label>
              <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm font-semibold">Work email</label>
              <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1" placeholder="jane@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-semibold">Company</label>
            <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-1" placeholder="Company Inc." />
          </div>
          <div className="mt-4">
            <label className="text-sm font-semibold">How can we help?</label>
            <Textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1" placeholder="Briefly describe your challenge or goal..." />
          </div>
          <Button type="submit" disabled={loading} className="mt-6 w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-base">
            {loading ? 'Sending...' : 'Send message'} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo className="text-white [&_*]:text-white" />
          <p className="mt-5 text-slate-400 leading-relaxed">
            Start working with Hexiware and get ready for the next step in your cloud, data and AI journey.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full border border-slate-700 hover:border-indigo-400 hover:text-indigo-300 grid place-items-center transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-white font-bold mb-5">Services</div>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.title}><a href="#services" className="hover:text-white">› {s.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-white font-bold mb-5">Useful Links</div>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'About us', href: '/about' },
              { label: 'Blog', href: '/blog' },
              { label: 'Careers', href: '/careers' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'How We Work', href: '/how-we-work' },
              { label: 'Terms of Services', href: '/terms' },
              { label: 'Privacy Policy', href: '/privacy' },
            ].map((s) => (
              <li key={s.label}><a href={s.href} className="hover:text-white">› {s.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-white font-bold mb-5">Get In Touch</div>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@hexiware.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (800) 555-0199</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> <span>Suite 800, 250 Yonge Street,<br/>Toronto, ON M5B 2L7, Canada</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Hexiware Consulting Inc. All rights reserved.</div>
          <div>Crafted with care in Toronto · Made for the cloud.</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Company />
      <HowWeWork />
      <CaseStudies />
      <Enterprise />
      <Contact />
      <Footer />
    </main>
  )
}
