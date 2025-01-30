function HomeSideContent() {
  return (
    <>
      <div className="homeSideContent text-4xl ">
        <h1>
          Hey there &#128075;
          <br /> I'm <span className="text-red-500">Sarthak Dhoke</span>
        </h1>
        <h1>Web Developer</h1>

        <div className="Home-Btn flex justify-between pt-10 text-base ">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-700 hover:text-black px-6 py-1 rounded-md">
            Get CV
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-700 hover:text-black px-6 py-1 rounded-md">
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeSideContent;
