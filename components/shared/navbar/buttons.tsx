'use client';

import { Dispatch, SetStateAction } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Buttons = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <div className="flex items-center gap-4">
    <div className="hidden lg:block">
      {/* <Button className="hover:scale-105 transition-all duration-300"> */}
      <Link
        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors"
        href="/contact">
        Contact Us
        <ArrowRight className="w-4 h-4" />
      </Link>
      {/* </Button> */}
    </div>

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-black transition-all hover:scale-105 hover:text-black/70 active:scale-95 lg:hidden">
      {menuOpen ? (
        <X className="w-7 h-7" />
      ) : (
        <Menu className="w-7 h-7" />
      )}
    </button>
  </div>
);

export default Buttons;
