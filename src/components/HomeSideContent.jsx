function HomeSideContent() {
  return (
    <>
      <div className="homeSideContent text-4xl ">
        <h1>
          Hey there &#128075;
          <br /> I'm{" "}
          <span className="text-5xl blackAndWhite"> Sarthak Dhoke</span>
        </h1>
        <h1>Web Developer</h1>

        <div className="Home-Btn flex justify-between pt-10 text-base ">
          <button className="px-5 py-2 rounded-md home-btn">Get CV</button>
          <button className="px-5 py-2 rounded-md home-btn">Contact</button>
        </div>
      </div>
    </>
  );
}

export default HomeSideContent;
