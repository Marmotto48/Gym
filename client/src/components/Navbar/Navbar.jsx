import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavbarUser from "./navbarUser";
import NavbarVistor from "./navbarVistor";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  return <div>{user.isAuth ? <NavbarUser /> : <NavbarVistor />}</div>;
};

export default Navbar;
