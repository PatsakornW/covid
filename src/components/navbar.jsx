import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  return (
    <Link to={'/'} className="text-center text-5xl font-medium text-neutral-800 ">สถานการณ์ผู้ติดเชื้อ COVID-19</Link>
  );
};

export default Navbar;
