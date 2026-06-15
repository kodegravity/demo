'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: March 2024</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 lg:px-10 pb-20">
        <div className="max-w-3xl prose prose-slate">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-8 text-slate-700">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p className="leading-relaxed">
                Hexiware Consulting Inc. ("we", "us", "our") is committed to protecting your privacy and ensuring you have a positive experience on our website and during our business interactions. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed font-semibold mb-3">Personal Information You Provide:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email address, and phone number</li>
                <li>Company name and job title</li>
                <li>Billing and payment information</li>
                <li>Project details and technical requirements</li>
              </ul>
              <p className="leading-relaxed font-semibold mb-3 mt-4">Information Collected Automatically:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website</li>
                <li>Device information and operating system</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed">We use collected information for:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Providing consulting services and support</li>
                <li>Communicating about projects, timelines, and deliverables</li>
                <li>Processing payments and invoices</li>
                <li>Sending newsletters and marketing communications (with consent)</li>
                <li>Improving our website and services</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies & Tracking Technologies</h2>
              <p className="leading-relaxed">
                Our website uses cookies to enhance your experience. Cookies allow us to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Remember your preferences</li>
                <li>Analyze website performance</li>
                <li>Track visitor behavior for analytics</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can disable cookies through your browser settings, though some features may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Services</h2>
              <p className="leading-relaxed">
                We may share your information with trusted third parties including:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li><strong>Payment Processors:</strong> Stripe, PayPal for secure payment processing</li>
                <li><strong>Analytics Providers:</strong> Google Analytics, Mixpanel for website analytics</li>
                <li><strong>Communication Tools:</strong> Slack, Microsoft Teams for project collaboration</li>
                <li><strong>Hosting Providers:</strong> AWS, Vercel for website hosting</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These third parties are contractually obligated to protect your data and use it only for specified purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Encryption of data in transit (SSL/TLS)</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and employee training</li>
                <li>Secure backup and disaster recovery procedures</li>
              </ul>
              <p className="leading-relaxed mt-4">
                While we strive to protect your information, no system is completely secure. We cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Provide contracted services</li>
                <li>Maintain accurate billing records (7 years per tax regulations)</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
              </ul>
              <p className="leading-relaxed mt-4">
                If you request deletion, we will remove your data within 30 days, except where legally required to retain it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights & Choices</h2>
              <p className="leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li><strong>Access:</strong> Request a copy of personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Portability:</strong> Request your data in a portable format</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@hexiware.com with your request.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. GDPR & PIPEDA Compliance</h2>
              <p className="leading-relaxed">
                If you are located in the European Union, your data is protected under the General Data Protection Regulation (GDPR). If you are in Canada, your data is protected under the Personal Information Protection and Electronic Documents Act (PIPEDA).
              </p>
              <p className="leading-relaxed mt-4">
                For GDPR-related requests, we have appointed a Data Protection Officer. Contact: dpo@hexiware.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover that a child has provided personal information, we will take steps to delete such information and terminate the child's account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Client Data & Confidentiality</h2>
              <p className="leading-relaxed">
                When providing consulting services, we may access client systems and data. This data is strictly confidential and:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Is only accessed for the purpose of delivering contracted services</li>
                <li>Is encrypted and secured according to client specifications</li>
                <li>Is never shared with third parties without written consent</li>
                <li>Is deleted after the engagement ends or per the service agreement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. The "Last Updated" date indicates when this policy was last revised. Continued use of our services after changes have been posted constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Information</h2>
              <p className="leading-relaxed">
                If you have questions or concerns about our privacy practices, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> privacy@hexiware.com</p>
                <p><strong>Address:</strong> Suite 800, 250 Yonge Street, Toronto, ON M5B 2L7, Canada</p>
                <p><strong>Phone:</strong> +1 (800) 555-0199</p>
                <p><strong>Response Time:</strong> We aim to respond to privacy inquiries within 10 business days</p>
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

