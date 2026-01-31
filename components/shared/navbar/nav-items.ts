export interface NavItem {
  text: string;
  url?: string;
}

export const navItems: NavItem[] = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/about' },
  { text: 'Services', url: '/services' },
  { text: 'Experience', url: '/experience' },
  { text: 'Projects', url: '/projects' },
];
