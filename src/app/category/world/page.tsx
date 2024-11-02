import GridLayout10 from "@/components/GridLayout10";
import GridLayout2 from "@/components/GridLayout2";
import GridLayout4 from "@/components/GridLayout4";
import GridLayout6 from "@/components/GridLayout6";
import GridLayout7 from "@/components/GridLayout7";
import React from "react";
import news from "../../../../public/main.json";
const Politics = () => {
  const worldNews = news.filter((content) => content.category === "world");
  console.log(worldNews.length);
  return (
    <div>
      <GridLayout4 news={worldNews[0]} />
      <GridLayout2 border news={worldNews.slice(1, 9)} topLeftTitle="More" />
      <GridLayout6 border news={worldNews.slice(9, 13)} />
      <GridLayout7 border news={worldNews.slice(13, 18)} />
      <GridLayout10 news={worldNews.slice(18, -1)} />
    </div>
  );
};

export default Politics;
