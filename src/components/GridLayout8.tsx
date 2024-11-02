import React from "react";
import "../styles/gridLayout8.css";
import Link from "next/link";
const GridLayout8 = ({ news }) => {
  return (
    <div className="mb-5 lg:mx-auto max-w-[1280px] border-t-4 border-solid border-black dark:border-white">
      <div className="topLeftTitle">
        <h2>Most Reads </h2>
      </div>
      <div className="parentGrid8">
        {news.map((content, idx) => (
          <Link
            href={`/category/${content.category}/${content.article_id}`}
            key={idx}
            className="gridContent "
          >
            <span>{idx + 1}</span>
            <h2>{content.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GridLayout8;
