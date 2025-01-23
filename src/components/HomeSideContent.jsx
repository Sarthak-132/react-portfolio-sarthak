function HomeSideContent() {
  return (
    <>
      <div className="homeSideContent text-5xl ">
        <h1>
          Hey there &#128075;
          <br /> I am <strong className="text-red-500">Sarthak Dhoke</strong>
        </h1>
        <h1>Web Developer</h1>

        <div className="Home-Btn flex justify-between pt-10 text-lg font-medium">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-700 hover:text-black px-7 py-1 rounded-md">
            Get CV
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-700 hover:text-black px-7 py-1 rounded-md">
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeSideContent;
