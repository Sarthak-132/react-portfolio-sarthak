import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <div className="navbar">
      <div
        className="nav-logo w-12 h-12 ml-20 rounded-full transition duration-300 ease-out hover:bg-red-400"
        id="logo"
      >
        <img src={logo} alt="Logo" />
      </div>

      <nav className={show ? "menu-mobile" : "menu-web"}>
        <ul className="menu-web flex align-middle gap-10 p-4 pr-16 font-semibold text-slate-300 ">
          <li className="transition duration-300 ease-out hover:underline ">
            <Link to="/" className=" hover:text-red-600">
              Home
            </Link>
          </li>
          <li className="transition duration-300 ease-out hover:underline">
            <Link to="/About" className="hover:text-red-600">
              About
            </Link>
          </li>
          <li className="transition duration-300 ease-out hover:underline">
            <Link to="/Projects" className="hover:text-red-600">
              Project
            </Link>
          </li>
          <li className="transition duration-300 ease-out hover:underline">
            <Link to="/Skill" className="hover:text-red-600">
              Skill
            </Link>
          </li>
          <li className="transition duration-300 ease-out hover:underline">
            <Link to="/Contact" className="hover:text-red-600">
              Contact
            </Link>
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
