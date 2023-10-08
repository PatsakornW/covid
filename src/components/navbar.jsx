import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link
      to={"/"}
      className=" drop-shadow-2xl text-center text-5xl font-medium text-neutral-800 "
    >
      สถานการณ์ผู้ติดเชื้อ COVID-19
    </Link>
  );
};

export default Navbar;
