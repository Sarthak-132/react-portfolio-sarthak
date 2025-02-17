import { Chrono } from "react-chrono";
function AboutEducation() {
  const items = [
    {
      title: "July 2024 to January 2025",
      cardSubtitle: "DDUGKY TRAINEE",
      cardDetailedText:
        "Web Development trainee for 6 months in DDUGKY center, Bhopal ",
      media: {
        type: "IMAGE",
        source: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VKrYDj3PvVkJPSS9r0qPwq7B_72ZJw9fSQ&s",
        },
      },
    },
  ];
  return (
    <>
      <div className="chromo">
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      </div>
    </>
  );
}

export default AboutEducation;
