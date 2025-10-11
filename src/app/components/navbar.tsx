'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Agri University</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/address">Address</Link>
        <Link href="/facilities">Facilities</Link>
        <Link href="/terms">Terms & Policies</Link>
      </div>
    </nav>
  );
};

export default Navbar;
