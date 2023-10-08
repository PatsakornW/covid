import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to={"/"}>
      <p className="drop-shadow-2xl text-center md:text-left text-5xl font-medium text-neutral-800">
        สถานการณ์ผู้ติดเชื้อ COVID-19
      </p>
    </Link>
  );
};

export default Navbar;
