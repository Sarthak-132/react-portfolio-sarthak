import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex bg-black w-full h-16 justify-between">
      <div className="w-12 h-12">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="flex  ">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>

        <li>
          <a href="">Project</a>
        </li>

        <li>
          <a href="">Skill</a>
        </li>

        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
