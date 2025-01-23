import MainHomeContent from "../components/MainHomeContent";
import Navbar from "../components/Navbar";
import "../universal.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <MainHomeContent />
      </div>
    </>
  );
}

export default Home;
