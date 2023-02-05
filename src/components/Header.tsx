import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center pt-4 mb-0.6 lg:mb-1">
      <div
      // onClick={() => history("/")}
      >
        <img
          src="/images/Logo.png"
          alt="logo-pokemon"
          className="w-32 lg:w-64 lg:h-24 mt-1 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
