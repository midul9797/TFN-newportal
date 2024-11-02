import React from "react";
import "../styles/gridLayout9.css";
import Link from "next/link";
import { postTime } from "@/helpers/PostTime";
const GridLayout9 = ({ news }) => {
  return (
    <div className="mb-5 lg:mx-auto max-w-[1280px] border-t-4 border-solid border-black dark:border-white">
      <div className="topLeftTitle">
        <h2>Related </h2>
      </div>
      <div className="parentGrid9">
        {news.map((content, idx) => (
          <Link
            href={`/category/${content.category}/${content.article_id}`}
            className="gridColContent9"
            key={idx}
          >
            <h2>{content.title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {postTime(content?.pubDate)} |{" "}
              {content?.category[0].charAt(0).toUpperCase()}
              {content?.category[0].slice(1)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GridLayout9;
