'use client';

import DesktopNavItem from './desktop-nav-item';
import { navItems } from './nav-items';

const Links: React.FC = () => (
  <div className="hidden items-center gap-8 lg:flex">
    {navItems.map((item, index) => (
      <DesktopNavItem key={index} {...item} />
    ))}
  </div>
);

export default Links;
