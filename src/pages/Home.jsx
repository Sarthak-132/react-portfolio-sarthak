import MainHomeContent from "../components/MainHomeContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../universal.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className="Home">
        <div className="main-container">
          <MainHomeContent />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Home;
