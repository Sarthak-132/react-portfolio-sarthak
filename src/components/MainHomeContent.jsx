import HomeSideImage from "./HomeSideImage.jsx";
import HomeSideContent from "./HomeSideContent.jsx";
import "../styles/Home.css";
function MainHomeContent() {
  return (
    <>
      <div className="layout-Home flex justify-between items-center h-5/6 ">
        <HomeSideImage />
        <HomeSideContent />
      </div>

      
    </>
  );
}

export default MainHomeContent;
