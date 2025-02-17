import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../universal.css";
import "../styles/About.css";
import MainAboutContent from "../components/MainAboutContent";

function About() {
  return (
    <>
      <Navbar />
      <div className="main-container-about">
        <MainAboutContent />

        <Footer />
      </div>
    </>
  );
}

export default About;
