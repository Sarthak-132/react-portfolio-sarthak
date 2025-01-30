import { contact_links } from "../data/Data.js";
import FooterLinks from "./FooterLinks.jsx";

function Footer() {
  return (
    <>
      <div className="footer flex items-end justify-between h-1/6 ">
        <div className="copright pb-2">
          <p className="ml-10">
            Copyright &copy; 2023{" "}
            <span className="font-bold text-lg"> Sarthak Dhoke </span> All
            rights reserved
          </p>
        </div>
        <ul className="flex justify-end">
          {contact_links.map((link) => (
            <FooterLinks key={link.src} {...link} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Footer;
