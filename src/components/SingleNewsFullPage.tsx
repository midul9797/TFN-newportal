import React from "react";
import SingleNews from "./SingleNews";
import GridLayout9 from "./GridLayout9";
import GridLayout10 from "./GridLayout10";
import AllNews from "../../public/main.json";
const SingleNewsFullPage = ({ news }) => {
  const gridLayoutNews = AllNews.filter(
    (content) =>
      content.category === news[0].category &&
      content.article_id !== news[0].article_id
  );
  return (
    <>
      <SingleNews news={news} />
      <GridLayout9 news={gridLayoutNews.slice(0, 3)} />
      <GridLayout10 news={gridLayoutNews.slice(3, 7)} />
    </>
  );
};

export default SingleNewsFullPage;
