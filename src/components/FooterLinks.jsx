import "../styles/Footer.css";

function FooterLinks({ image, src, social_link, img_size }) {
  return (
    <>
      <li className="p-2 mb-1">
        <a href={social_link}>
          <img className={img_size} src={image} alt={src} id="social-links" />
        </a>
      </li>
    </>
  );
}

export default FooterLinks;
