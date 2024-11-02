import GridLayout10 from "@/components/GridLayout10";
import GridLayout2 from "@/components/GridLayout2";
import GridLayout3 from "@/components/GridLayout3";
import GridLayout4 from "@/components/GridLayout4";
import GridLayout5 from "@/components/GridLayout5";
import React from "react";
import news from "../../../../public/main.json";
const Business = () => {
  const businessNews = news.filter(
    (content) => content.category === "business"
  );
  const gridLayout2News = businessNews.slice(0, 8);
  const gridLayout5News = businessNews.slice(8, 10);
  const gridLayout10News = businessNews.slice(12, -1);
  return (
    <div>
      <GridLayout2 news={gridLayout2News} topLeftTitle="" border={false} />
      <GridLayout5 border news={gridLayout5News} />
      <GridLayout3 border news={businessNews[10]} />
      <GridLayout4 border news={businessNews[11]} />
      <GridLayout10 news={gridLayout10News} />
    </div>
  );
};

export default Business;
