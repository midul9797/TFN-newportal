import GridLayout10 from "@/components/GridLayout10";
import GridLayout2 from "@/components/GridLayout2";
import GridLayout5 from "@/components/GridLayout5";
import GridLayout7 from "@/components/GridLayout7";
import React from "react";
import news from "../../../../public/main.json";
const Other = () => {
  const otherNews = news.filter((content) => content.category === "other");
  return (
    <div>
      <GridLayout2 border={false} news={otherNews.slice(0, 8)} />
      <GridLayout5 border news={otherNews.slice(7, 9)} />
      <GridLayout7 border news={otherNews.slice(9, 14)} />
      <GridLayout10 news={otherNews.slice(14, 16)} />
    </div>
  );
};

export default Other;
