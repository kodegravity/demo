'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User, ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const POSTS = [
  {
    title: 'Migrating to Kubernetes: A Practical Guide for Enterprise Teams',
    excerpt: 'Learn how to plan, execute, and operationalize a Kubernetes migration without business disruption. We share battle-tested patterns from 40+ migrations.',
    date: 'March 15, 2024',
    author: 'Sarah Chen',
    category: 'DevOps',
    readTime: '8 min read',
  },
  {
    title: 'Cost Optimization: How We Reduced Cloud Spend by 40%',
    excerpt: 'A deep dive into cloud cost optimization strategies. We break down reserved instances, spot pricing, and architectural changes that drive real savings.',
    date: 'March 8, 2024',
    author: 'Marcus Johnson',
    category: 'Cloud Cost',
    readTime: '6 min read',
  },
  {
    title: 'Zero Trust Architecture: Moving Beyond Perimeter Security',
    excerpt: 'Enterprise security is evolving. Discover how zero trust architecture, identity-based access, and continuous verification protect modern cloud workloads.',
    date: 'March 1, 2024',
    author: 'Dr. Emily Rodriguez',
    category: 'Security',
    readTime: '10 min read',
  },
  {
    title: 'Data Lakes vs. Warehouses: Choosing Your Analytics Platform',
    excerpt: 'Confused by data architecture options? We clarify the differences, trade-offs, and decision criteria for building your next-gen analytics platform.',
    date: 'February 22, 2024',
    author: 'Alex Patel',
    category: 'Data & Analytics',
    readTime: '7 min read',
  },
  {
    title: 'Platform Engineering: The Future of DevOps',
    excerpt: 'Platform engineering is reshaping how enterprises deliver infrastructure. Learn how to build internal developer platforms that accelerate teams.',
    date: 'February 15, 2024',
    author: 'Lisa Wang',
    category: 'Platform Engineering',
    readTime: '9 min read',
  },
  {
    title: 'Multi-Cloud Strategy: AWS, Azure, GCP, and How to Choose',
    excerpt: 'Multi-cloud is no longer optional. We share strategies for avoiding vendor lock-in, managing complexity, and optimizing costs across clouds.',
    date: 'February 8, 2024',
    author: 'James O\'Brien',
    category: 'Cloud Strategy',
    readTime: '11 min read',
  },
]

export default function Blog() {
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
            Hexiware <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Insights, patterns, and best practices from our team of senior cloud, data, and platform engineers.
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-6 lg:px-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-indigo-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full">Featured</span>
            <span className="text-sm text-slate-600">March 15, 2024</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Migrating to Kubernetes: A Practical Guide for Enterprise Teams</h2>
          <p className="text-lg text-slate-600 mb-6">
            Learn how to plan, execute, and operationalize a Kubernetes migration without business disruption. We share battle-tested patterns from 40+ migrations.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-indigo-600 text-white grid place-items-center font-semibold">SC</div>
              <div>
                <div className="font-semibold text-slate-900">Sarah Chen</div>
                <div className="text-sm text-slate-600">Senior DevOps Engineer</div>
              </div>
            </div>
            <Button className="w-fit rounded-full bg-indigo-600 hover:bg-indigo-700">
              Read Article <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* All Posts */}
      <section className="container mx-auto px-6 lg:px-10 pb-20">
        <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-indigo-600 transition">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 grid place-items-center text-sm font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-slate-900">{post.author}</div>
                      <div className="text-xs text-slate-500">{post.date}</div>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 transition" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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

