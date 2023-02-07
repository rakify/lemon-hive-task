import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        marginBottom: "50px",
      }}
    >
      <div className="footer">
        <Link
          href="/"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img src="/images/Vector.png" alt="home" className="w-5 h-5" />
          Back to Homepage
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
