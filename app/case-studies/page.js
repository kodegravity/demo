'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CASES = [
  {
    client: 'FinPro',
    industry: 'Financial Services',
    challenge: 'Legacy data platform unable to scale to growing analyst demand. 3-month data refresh cycles, poor data quality.',
    solution: 'Designed and built modern cloud-native data platform on Snowflake with real-time ingestion, dbt transformations, and self-service analytics.',
    results: ['50% reduction in data refresh time', '95% data quality improvement', '10x faster insights delivery'],
    outcome: '4 months from kick-off to production, 40 analyst users on day one',
  },
  {
    client: 'Northstar Retail',
    industry: 'Retail & E-commerce',
    challenge: 'Multi-region on-premise infrastructure, manual deployment processes, 6+ month release cycles.',
    solution: 'Migrated entire stack to AWS, containerized applications with Kubernetes, implemented GitOps-driven CI/CD.',
    results: ['2-week to daily deployment cycles', '99.98% uptime SLA', '$1.2M annual cloud savings'],
    outcome: 'Fastest enterprise migration we\'ve completed. Zero downtime cutover.',
  },
  {
    client: 'Vaultlane',
    industry: 'Data Security & Compliance',
    challenge: 'Needed enterprise-grade security controls, zero-trust architecture for regulated environment.',
    solution: 'Implemented zero-trust network architecture, identity-based access, continuous compliance monitoring with Vault + HashiCorp products.',
    results: ['100% compliance audit pass', 'Eliminated network perimeter attacks', 'FedRAMP readiness in 6 months'],
    outcome: 'Blueprint now used for all enterprise sales cycles',
  },
  {
    client: 'Sigma Analytics',
    industry: 'Data Science & ML',
    challenge: 'ML models in Jupyter notebooks, no reproducibility, no model governance, data scientists limited by infrastructure.',
    solution: 'Built ML platform with reproducible environments, model registry, A/B testing framework, and automated retraining pipelines.',
    results: ['50% faster model deployment', '100% reproducibility', '200+ models under active governance'],
    outcome: 'Data science team velocity increased 3x',
  },
  {
    client: 'Helix',
    industry: 'Healthcare Tech',
    challenge: 'HIPAA-compliant infrastructure needed, complex regulatory requirements, legacy systems integration.',
    solution: 'Designed HIPAA-compliant cloud architecture on AWS, implemented encryption at rest/transit, audit logging, and disaster recovery.',
    results: ['SOC2 Type II certification', 'HIPAA compliance achieved', '99.99% uptime'],
    outcome: 'Enabled $50M Series B fundraising',
  },
  {
    client: 'Aurelia Tech',
    industry: 'SaaS / Public Cloud',
    challenge: 'High cloud spend ($2M/month), inefficient resource allocation, no cost governance.',
    solution: 'Comprehensive cloud cost optimization: reserved instances, spot pricing, architectural refactoring, rate negotiation.',
    results: ['40% cloud cost reduction ($800K/month saved)', 'Reserved capacity optimization', 'Ongoing FinOps governance'],
    outcome: 'Direct P&L impact, model replicated across multiple divisions',
  },
]

export default function CaseStudies() {
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
            Case <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Studies</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Real transformations, measurable outcomes. See how we've helped enterprise leaders modernize their cloud, data, and platform infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Cases */}
      <section className="container mx-auto px-6 lg:px-10 pb-20">
        <div className="space-y-12">
          {CASES.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`border border-slate-200 rounded-2xl p-8 md:p-12 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
            >
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-3xl font-bold">{cs.client}</h2>
                    <p className="text-slate-600 mt-1">{cs.industry}</p>
                  </div>
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-700 font-semibold rounded-full w-fit">Case Study</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="font-bold mb-3 uppercase tracking-wide text-xs text-slate-500">Challenge</h3>
                  <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 uppercase tracking-wide text-xs text-slate-500">Solution</h3>
                  <p className="text-slate-700 leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 uppercase tracking-wide text-xs text-slate-500">Outcome</h3>
                  <p className="text-slate-700 leading-relaxed font-semibold">{cs.outcome}</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4 uppercase tracking-wide text-xs text-slate-500">Key Results</h3>
                <ul className="grid md:grid-cols-3 gap-4">
                  {cs.results.map((result, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '120+', label: 'Enterprise Projects Shipped' },
              { stat: '40%', label: 'Avg Cloud Cost Reduction' },
              { stat: '99.98%', label: 'Platform Uptime' },
              { stat: '< 30d', label: 'Time-to-First-Value' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-indigo-100">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready for Your Transformation?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Let's discuss your cloud, data, and platform challenges. Schedule a discovery call with one of our senior architects.
        </p>
        <Link href="/#contact">
          <Button className="rounded-full px-8 h-12 bg-indigo-600 hover:bg-indigo-700 text-base">
            Schedule A Call <ArrowRight className="ml-2 h-4 w-4" />
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

