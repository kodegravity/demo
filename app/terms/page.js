'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TermsOfService() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-slate-600">Last updated: March 2024</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 lg:px-10 pb-20">
        <div className="max-w-3xl prose prose-slate">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-8 text-slate-700">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Service Overview</h2>
              <p className="leading-relaxed">
                Hexiware Consulting Inc. ("Company", "we", "our", or "us") provides consulting services for cloud infrastructure, data engineering, DevOps, and platform engineering. These Terms of Service ("Terms") govern your engagement with Hexiware and establish the rights and obligations of both parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Engagement Agreement</h2>
              <p className="leading-relaxed">
                All service engagements are governed by a separate Master Service Agreement (MSA) or Statement of Work (SOW) between you and Hexiware. In the event of any conflict between this Terms of Service and your MSA/SOW, the MSA/SOW shall take precedence.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Service scope is defined in the applicable SOW</li>
                <li>Pricing and billing terms are outlined in the SOW</li>
                <li>Timeline and deliverables are mutually agreed upon</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment & Invoicing</h2>
              <p className="leading-relaxed">
                All invoices shall be paid within thirty (30) days of invoice date unless otherwise agreed in writing. Late payments will incur a monthly interest charge of 1.5% or the maximum rate permitted by law, whichever is lower. Hexiware reserves the right to suspend services if payment is overdue by 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                Work product created by Hexiware specifically for you ("Deliverables") shall be owned by you, provided all payments are current. We retain ownership of:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Pre-existing tools, frameworks, and methodologies</li>
                <li>General concepts, ideas, and know-how developed during the engagement</li>
                <li>Open-source code and third-party components</li>
                <li>Our documentation and processes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
              <p className="leading-relaxed">
                Both parties agree to maintain the confidentiality of sensitive information shared during the engagement, including business strategies, financial data, and technical specifications. This obligation survives for two (2) years after the end of the engagement.
              </p>
              <p className="leading-relaxed mt-4">
                Exclusions: Information that is publicly available, independently developed, or required to be disclosed by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              <p className="leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, HEXIWARE SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of revenue, profit, or business opportunity</li>
                <li>Loss of data or business interruption</li>
                <li>Damages exceeding the total fees paid in the 12 months preceding the claim</li>
              </ul>
              <p className="leading-relaxed mt-4">
                The foregoing limitations apply even if Hexiware has been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Warranties & Disclaimers</h2>
              <p className="leading-relaxed">
                Hexiware warrants that:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Services will be performed in a professional and workmanlike manner</li>
                <li>Our engineers possess the skills and experience stated in our proposal</li>
                <li>Deliverables will not infringe third-party intellectual property rights</li>
              </ul>
              <p className="leading-relaxed mt-4">
                EXCEPT AS EXPRESSLY STATED, HEXIWARE MAKES NO OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Termination</h2>
              <p className="leading-relaxed">
                Either party may terminate the engagement with written notice:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>For cause (material breach not cured within 30 days)</li>
                <li>For convenience (with 30 days written notice)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Upon termination, all outstanding invoices become immediately due. You remain liable for all work completed up to the termination date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify and hold Hexiware harmless from any claims, damages, and costs (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Your use of deliverables outside the scope of the engagement</li>
                <li>Your modification of deliverables without our consent</li>
                <li>Your failure to implement our recommendations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Dispute Resolution</h2>
              <p className="leading-relaxed">
                Any disputes arising from these Terms shall be governed by the laws of Ontario, Canada. Both parties agree to attempt good-faith negotiation before pursuing legal action. If litigation is necessary, it shall be resolved in the courts of Toronto, Ontario.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to Terms</h2>
              <p className="leading-relaxed">
                We may update these Terms from time to time. Continued engagement after posting changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Information</h2>
              <p className="leading-relaxed">
                For questions regarding these Terms, contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> legal@hexiware.com</p>
                <p><strong>Address:</strong> Suite 800, 250 Yonge Street, Toronto, ON M5B 2L7, Canada</p>
                <p><strong>Phone:</strong> +1 (800) 555-0199</p>
              </div>
            </div>
          </motion.div>
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

