import sideImageAbout from "../assets/portfolio-img.jpg";
import cutout from "../assets/portfolio-img-cutout.png";
import "../styles/About.css";

function AboutSideImage() {
  return (
    <>
      <article className="aboutSideImageContainer w-4/12">
        <img
          className="aboutSideImage h-64 w-64"
          src={sideImageAbout}
          alt="sideImageAbout"
        />
        <img
          className=" cutout h-64 w-64"
          src={cutout}
          alt="cutout-portfolio"
        />
      </article>
    </>
  );
}

export default AboutSideImage;
