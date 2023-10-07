import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  return (
    <Link to={'/'} className=" text-4xl font-bold">สถานการณ์ผู้ติดเชื้อ COVID-19</Link>
  );
};

export default Navbar;
