import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-md">
      <div className="container mx-auto flex  items-center p-4">
      <Link href="/">
                <Image src="/favicon.ico" className="inline w-10" width={100} height={100} alt="Logo"/>
                </Link>
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Blog Title */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <Link href="/">
            <span className="hover:text-gray-300 transition duration-300">
              Harivansh-X-Blog
            </span>
          </Link>
        </h1>

        {/* Navigation */}
        <nav className="space-x-6 text-lg font-medium">
          <Link
            href="/"
            className="hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
