import { Chrono } from "react-chrono";
function AboutEducation() {
  const items = [
    {
      title: "July 2024 to January 2025",
      cardTitle: "JSMIES (DDUGKY)",
      url: "https://www.jsmies.in/",
      cardSubtitle: "Web developer TRAINEE",
      cardDetailedText:
        "Web Development trainee for 6 months in DDUGKY center, Bhopal (Madhya Pradesh)",
    },
    {
      title: "July 2019 to June 2023",
      cardTitle: "JEC, JABALPUR ",
      url: "https://www.jecjabalpur.ac.in/",
      cardSubtitle: "B.Tech (Information Technology) - 7.2 CGPA",
      cardDetailedText:
        "Jabalpur Engineering College, Jabalpur, Madhya Pradesh",
    },
    {
      title: "July 2018 to June 2019",
      cardTitle: "Higher Secondary school",
      url: "https://commons.wikimedia.org/wiki/File:Saraswati_Shishu_Vidya_Mandir_%26_Higher_Secondary_School,_Pandhurna_-_panoramio.jpg",
      cardSubtitle: "12th Standard (Mathematics) - 82%",
      cardDetailedText:
        "Saraswati Shishu Vidya Mandir school, Pandhurna, Madhya Pradesh",
    },
    {
      title: "July 2016 to June 2017",
      cardTitle: "High school ",
      url: "https://commons.wikimedia.org/wiki/File:Saraswati_Shishu_Vidya_Mandir_%26_Higher_Secondary_School,_Pandhurna_-_panoramio.jpg",
      cardSubtitle: "10th Standard - 87.5%",
      cardDetailedText:
        "Saraswati Shishu Vidya Mandir school, Pandhurna, Madhya Pradesh",
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
