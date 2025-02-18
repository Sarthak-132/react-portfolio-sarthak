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
      <div className="inner-nav">
        <div
          className="nav-logo w-12 h-12 mr-64 rounded-full transition duration-300 ease-out"
          id="logo"
        >
          <img src={logo} alt="Logo" />
        </div>

        <nav className={show ? "menu-mobile" : "menu-web"} id="nav-links">
          <ul className="menu-web flex align-middle gap-10 font-2xl text-slate-300 ">
            <li className="transition duration-300 ease-out hover:underline ">
              <Link to="/" className="  links-nav">
                Home
              </Link>
            </li>
            <li className="transition duration-300 ease-out hover:underline">
              <Link to="/About" className=" links-nav">
                About
              </Link>
            </li>
            <li className="transition duration-300 ease-out hover:underline">
              <Link to="/Projects" className=" links-nav">
                Project
              </Link>
            </li>
            <li className="transition duration-300 ease-out hover:underline">
              <Link to="/Skill" className=" links-nav">
                Skill
              </Link>
            </li>
            <li className="transition duration-300 ease-out hover:underline">
              <Link to="/Contact" className=" links-nav">
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
    </div>
  );
}

export default Navbar;
