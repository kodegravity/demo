'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SERVICE_DETAILS = {
  'data-analytics': {
    eyebrow: 'Data & Analytics',
    title: 'Turn complex data into useful decisions.',
    intro: 'Hexiware helps teams create dependable data foundations for reporting, analytics, and better day-to-day decisions.',
    summary: 'We help you understand the current data landscape, set practical priorities, and build systems that are easier to trust and operate.',
    services: ['Data platform assessment', 'Warehouse and lake architecture', 'Pipeline design and implementation', 'Reporting and analytics foundations', 'Data quality and governance planning'],
    outcomes: ['A clearer view of how data moves through your organisation', 'More reliable inputs for reporting and operational decisions', 'A maintainable foundation that can evolve with the business'],
  },
  'cyber-security': {
    eyebrow: 'Cyber Security',
    title: 'Make security part of how your systems work.',
    intro: 'Hexiware provides practical security guidance that fits your technology, people, and operating reality.',
    summary: 'Our work focuses on understanding exposure, strengthening the fundamentals, and giving your team a clear order of operations.',
    services: ['Security posture and architecture reviews', 'Identity and access guidance', 'Cloud security improvements', 'Security operations planning', 'Risk and control prioritisation'],
    outcomes: ['A more understandable view of current security priorities', 'Stronger access and operational practices', 'A realistic improvement roadmap your team can own'],
  },
  'cloud-migration': {
    eyebrow: 'Cloud Migration',
    title: 'Move to the cloud with a plan you can operate.',
    intro: 'Hexiware helps organisations plan and deliver cloud migrations with clear trade-offs, manageable risk, and practical ownership.',
    summary: 'From discovery through delivery, we connect architecture decisions to business priorities and the capabilities your team already has.',
    services: ['Migration readiness assessments', 'Cloud strategy and target architecture', 'Workload planning and prioritisation', 'Migration delivery support', 'Cost and operating model guidance'],
    outcomes: ['A migration sequence based on dependencies and business value', 'Fewer surprises during implementation', 'A cloud environment your team can understand and maintain'],
  },
  'managed-it-services': {
    eyebrow: 'Managed IT Services',
    title: 'Dependable technical support for growing teams.',
    intro: 'Hexiware provides ongoing technical support and platform care for organisations that need experienced help without unnecessary complexity.',
    summary: 'We work with you to clarify ownership, improve day-to-day operations, and keep important systems moving in the right direction.',
    services: ['Environment and operations reviews', 'Cloud and infrastructure support', 'Monitoring and incident guidance', 'Documentation and knowledge transfer', 'Ongoing improvement planning'],
    outcomes: ['Clearer ownership across technology operations', 'Better visibility into recurring issues and priorities', 'A support model matched to your team and environment'],
  },
  'devops-platform': {
    eyebrow: 'DevOps & Platform',
    title: 'Build a delivery platform your team can rely on.',
    intro: 'Hexiware helps teams make software delivery more repeatable through practical platform engineering and DevOps improvements.',
    summary: 'We focus on the workflows, infrastructure, and feedback loops that help teams deliver changes with more confidence.',
    services: ['CI/CD workflow design', 'Infrastructure as code', 'Platform architecture', 'Observability foundations', 'Developer experience improvements'],
    outcomes: ['More consistent delivery practices', 'Better visibility into system health and deployments', 'Platform capabilities that reduce avoidable operational work'],
  },
  'data-protection-recovery': {
    eyebrow: 'Data Protection & Recovery',
    title: 'Prepare your systems to recover when it matters.',
    intro: 'Hexiware helps teams plan backup, recovery, and resilience around the systems and business processes that matter most.',
    summary: 'We identify recovery priorities, review current practices, and help create a recovery approach that is understandable and testable.',
    services: ['Backup and recovery assessments', 'Recovery priority planning', 'Resilience architecture guidance', 'Business continuity coordination', 'Recovery documentation and exercises'],
    outcomes: ['A clearer understanding of recovery priorities', 'Fewer gaps between technical plans and business needs', 'Documented next steps for improving resilience'],
  },
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-700 shadow-lg shadow-indigo-500/30">
            <span className="font-bold text-white">H</span>
          </div>
          <div className="leading-tight">
            <div className="text-xl font-bold tracking-tight">Hexiware</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">consulting · cloud · data</div>
          </div>
        </Link>
        <Link href="/#contact">
          <Button className="h-11 rounded-full bg-indigo-600 px-6 hover:bg-indigo-700">Contact</Button>
        </Link>
      </div>
    </header>
  )
}

export default function ServicePage({ serviceKey }) {
  const service = SERVICE_DETAILS[serviceKey]

  if (!service) return null

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <section className="hero-grad overflow-hidden text-white">
        <div className="container mx-auto px-6 py-20 lg:px-10 lg:py-28">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-100 hover:text-white">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to services
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">{service.eyebrow}</div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-indigo-100">{service.intro}</p>
            <Link href="/#contact" className="mt-8 inline-block">
              <Button size="lg" className="h-12 rounded-full bg-white px-7 text-indigo-700 hover:bg-indigo-50">Discuss your needs <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto grid gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">How we can help</div>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Practical expertise, shaped to your environment.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{service.summary}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {service.services.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 p-6">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <h3 className="mt-4 font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">What to expect</div>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">A clearer path from challenge to action.</h2>
          </div>
          <div className="space-y-5">
            {service.outcomes.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-2xl font-extrabold text-indigo-200">0{index + 1}</span>
                <p className="pt-1 text-lg text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 text-center lg:px-10 lg:py-24">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Have a technology challenge to work through?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Tell us what you are trying to improve. We will review the context and discuss sensible next steps.</p>
        <Link href="/#contact" className="mt-8 inline-block">
          <Button size="lg" className="h-12 rounded-full bg-indigo-600 px-7 hover:bg-indigo-700">Get in touch <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </Link>
      </section>

      <footer className="bg-slate-900 py-12 text-slate-300">
        <div className="container mx-auto grid gap-8 px-6 text-sm md:grid-cols-3 lg:px-10">
          <div>
            <div className="text-lg font-bold text-white">Hexiware Consulting</div>
            <p className="mt-3 leading-relaxed text-slate-400">Cloud, data, security, and managed IT guidance for real-world teams.</p>
          </div>
          <div className="space-y-3">
            <a href="mailto:hello@hexiware.com" className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> hello@hexiware.com</a>
            <a href="tel:+14374638537" className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" /> +1 (437) 463-8537</a>
          </div>
          <div className="flex items-start gap-2 text-slate-400"><MapPin className="mt-0.5 h-4 w-4" /> <span>250 Yonge St, Suite 800,<br />Toronto, ON M5B 2H1</span></div>
        </div>
      </footer>
    </main>
  )
}
