import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  title: 'Hexiware — Modern IT Consulting & Cloud Engineering',
  description: 'Hexiware builds, scales and secures cloud-native businesses. Data, AI, DevOps, Cybersecurity and Managed Services for ambitious teams.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
