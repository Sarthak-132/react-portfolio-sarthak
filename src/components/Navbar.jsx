import logo from "../assets/logo.png";
import styled from "../styles/Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [activePage, setActivePage] = useState("Home");

  const handleLogoClick = () => {
    setActivePage("Home");
  };

  return (
    <div className={styled.navbar}>
      <div
        className="w-12 h-12 ml-20 rounded-full bg-slate-900 transition duration-300 ease-out hover:bg-slate-700"
        id={styled.logo}
      >
        <img src={logo} alt="Logo" />
      </div>

      <ul className="flex align-middle gap-10 p-4 mr-16 font-semibold text-slate-300 ">
        <li className="transition duration-300 ease-out text-cyan-400 underline">
          <a href="">Home</a>
        </li>
        <li className="transition duration-300 ease-out hover:text-cyan-400 hover:underline">
          <a href="">About</a>
        </li>
        <li className="transition duration-300 ease-out hover:text-cyan-400 hover:underline">
          <a href="">Project</a>
        </li>
        <li className="transition duration-300 ease-out hover:text-cyan-400 hover:underline">
          <a href="">Skill</a>
        </li>
        <li className="transition duration-300 ease-out hover:text-cyan-400 hover:underline">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
