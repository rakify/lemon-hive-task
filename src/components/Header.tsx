import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center pt-4 mb-10 sm:mb-3">
      <Link href="/">
        <img
          src="/images/Logo.png"
          alt="logo-pokemon"
          className="w-32 lg:w-64 lg:h-24 mt-1 cursor-pointer"
        />
      </Link>
    </header>
  );
};

export default Header;
