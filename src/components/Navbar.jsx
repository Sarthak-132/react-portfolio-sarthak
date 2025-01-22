import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <div className="navbar">
      <div
        className="nav-logo w-12 h-12 ml-20 rounded-full bg-slate-900 transition duration-300 ease-out hover:bg-slate-700"
        id="logo"
      >
        <img src={logo} alt="Logo" />
      </div>

      <nav className={show ? "menu-mobile" : "menu-web"}>
        <ul className="menu-web flex align-middle gap-10 p-4 mr-16 font-semibold text-slate-300 {show ? 'menu-mobile' : 'menu-web'}">
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
      </nav>
      <div className="ham-menu">
        <button onClick={handleButtonToggle}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
