'use client';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <div className="w-20">
    <Link href="/">
      <Image
        src="/logo.png"
        width={484}
        height={137}
        alt="APEX Consulting & Surveying"
      />
    </Link>
  </div>
);

export default Logo;
