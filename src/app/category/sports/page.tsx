import GridLayout from "@/components/GridLayout";
import GridLayout10 from "@/components/GridLayout10";
import GridLayout4 from "@/components/GridLayout4";
import GridLayout7 from "@/components/GridLayout7";
import React from "react";
import news from "../../../../public/main.json";
const Sports = () => {
  const sportsNews = news.filter((content) => content.category === "sports");
  return (
    <>
      <GridLayout4 news={sportsNews[0]} />
      <GridLayout news={sportsNews.slice(1, 8)} />
      <GridLayout7 border news={sportsNews.slice(8, 13)} />
      <GridLayout10 news={sportsNews.slice(13, 16)} />
    </>
  );
};

export default Sports;
