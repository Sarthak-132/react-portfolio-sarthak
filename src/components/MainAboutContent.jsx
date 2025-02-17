import AboutSideContent from "./AboutSideContent";
import AboutSideImage from "./AboutSideImage";
import AboutEducation from "./AboutEducation";

function MainAboutContent() {
  return (
    <>
      <div className="firstAbout flex justify-between align-top pt-10 px-4">
        <AboutSideImage />
        <AboutSideContent />
      </div>
      <div className="Education">
        <AboutEducation />
      </div>
    </>
  );
}

export default MainAboutContent;
