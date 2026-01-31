import { Navbar } from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import AppShell from '@/components/shared/app-shell'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <AppShell>{children}</AppShell>
      <Footer />
    </>
  )
}
