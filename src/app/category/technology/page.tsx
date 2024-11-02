import GridLayout10 from "@/components/GridLayout10";
import GridLayout3 from "@/components/GridLayout3";
import GridLayout4 from "@/components/GridLayout4";
import GridLayout5 from "@/components/GridLayout5";
import GridLayout6 from "@/components/GridLayout6";
import React from "react";
import news from "../../../../public/main.json";
const Technology = () => {
  const techNews = news.filter((content) => content.category === "technology");
  return (
    <>
      <GridLayout3 news={techNews[0]} border={false} />
      <GridLayout6 news={techNews} border />
      <GridLayout4 border news={techNews[1]} />
      <GridLayout5 border news={[techNews[2], techNews[3]]} />
      <GridLayout10 news={techNews} />
    </>
  );
};

export default Technology;
