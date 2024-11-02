"use client";
import SingleNewsFullPage from "@/components/SingleNewsFullPage";
import { useParams } from "next/navigation";
import React from "react";
import AllNews from "../../../../../public/main.json";
const SingleEntertainmentPage = () => {
  const { id } = useParams();
  const news = AllNews.filter((content) => content.article_id === id);
  return (
    <div>
      <SingleNewsFullPage news={news} />
    </div>
  );
};

export default SingleEntertainmentPage;
