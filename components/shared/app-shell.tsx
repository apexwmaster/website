'use client';

import { usePathname } from 'next/navigation';
import ContactCTA from './contact-cta';
import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const showContactCTA = pathname !== '/contact';

  return (
    <>
      {children}
      {showContactCTA && <ContactCTA />}
    </>
  );
}

export default AppShell;

