"use client";
import SingleNewsFullPage from "@/components/SingleNewsFullPage";
import React from "react";

import AllNews from "../../../../../public/main.json";
import { useParams } from "next/navigation";
const SingleSportsPage = () => {
  const { id } = useParams();
  const news = AllNews.filter((content) => content.article_id === id);
  return (
    <>
      <SingleNewsFullPage news={news} />
    </>
  );
};

export default SingleSportsPage;
