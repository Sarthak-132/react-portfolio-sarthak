import MainHomeContent from "../components/MainHomeContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../universal.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <MainHomeContent />
        <Footer />
      </div>
    </>
  );
}

export default Home;
