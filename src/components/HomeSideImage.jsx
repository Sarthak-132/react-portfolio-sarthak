import sideImageHome from "../assets/sideImageHome.png";

function HomeSideImage() {
  return (
    <>
      <div className="homeSideImageContainer w-3/6">
        <img
          src={sideImageHome}
          className="homeSideImage p-0"
          alt="sideImageHome"
        />
      </div>
    </>
  );
}

export default HomeSideImage;
