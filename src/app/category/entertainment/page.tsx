import GridLayout from "@/components/GridLayout";
import GridLayout10 from "@/components/GridLayout10";
import GridLayout4 from "@/components/GridLayout4";
import GridLayout6 from "@/components/GridLayout6";
import GridLayout7 from "@/components/GridLayout7";
import React from "react";
import news from "../../../../public/main.json";
import GridLayout3 from "@/components/GridLayout3";
const Entertainment = () => {
  const entertainmentNews = news.filter(
    (content) => content.category === "entertainment"
  );
  return (
    <div>
      <GridLayout news={entertainmentNews.slice(0, 7)} />
      <GridLayout4 border news={entertainmentNews[7]} />
      <GridLayout6 border news={entertainmentNews.slice(7, 11)} />
      <GridLayout3 border news={entertainmentNews[11]} />
      <GridLayout10 news={entertainmentNews.slice(0, 4)} />
    </div>
  );
};

export default Entertainment;
