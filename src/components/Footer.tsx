import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "50%",
        marginLeft: "50%",
        height: "56px",
        width: "270px",
        color: "white",
        marginBottom: "50px",
      }}
    >
      <footer className="footer">
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
      </footer>
    </div>
  );
};

export default Footer;
