import GridLayout10 from "@/components/GridLayout10";
import React from "react";
import news from "../../../../public/main.json";
const SearchPage = async ({
  params,
}: {
  params: Promise<{ text: string }>;
}) => {
  const text = (await params).text;
  const searchedNews = news.filter(
    (content) =>
      content.content.toLowerCase().indexOf(text) >= 0 ||
      content.title.toLowerCase().indexOf(text) >= 0
  );
  return (
    <>
      <GridLayout10 news={searchedNews}></GridLayout10>
    </>
  );
};

export default SearchPage;
