"use client";

import GridLayout from "@/components/GridLayout";
import GridLayout2 from "@/components/GridLayout2";
import GridLayout3 from "@/components/GridLayout3";
import GridLayout4 from "@/components/GridLayout4";
import GridLayout5 from "@/components/GridLayout5";
import GridLayout6 from "@/components/GridLayout6";
import news from "../../public/main.json";
export default function Home() {
  const gridLayout1News = news
    .filter((content) => content.category === "world")
    .slice(0, 7);
  const gridLayout2News = news
    .filter((content) => content.category === "business")
    .slice(8, 16);
  const gridLayout3_4News = news
    .filter((content) => content.category === "sports")
    .slice(0, 2);
  const gridLayout5News = news
    .filter((content) => content.category === "entertainment")
    .slice(0, 2);
  const gridLayout6News = news
    .filter((content) => content.category === "other")
    .slice(0, 4);
  return (
    <>
      <GridLayout news={gridLayout1News} />
      <GridLayout2 border topLeftTitle="More News" news={gridLayout2News} />
      <GridLayout3 news={gridLayout3_4News[0]} border />
      <GridLayout4 news={gridLayout3_4News[1]} />
      <GridLayout5 news={gridLayout5News} border />
      <GridLayout6 news={gridLayout6News} border />
    </>
  );
}
