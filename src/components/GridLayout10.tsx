import Image from "next/image";
import React from "react";
import "../styles/gridLayout10.css";
import Link from "next/link";
import { postTime } from "@/helpers/PostTime";
const GridLayout10 = ({ news }) => {
  return (
    <div className="mb-5 lg:mx-auto max-w-[1280px] border-t-4 border-solid border-black dark:border-white">
      <div className="topLeftTitle">
        <h2>More </h2>
      </div>
      {news.map((content, idx) => (
        <Link
          href={`/category/${content.category}/${content.article_id}`}
          key={idx}
          className="parentGrid10"
        >
          <div className="firstCol10">
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {postTime(content.pubDate)}
            </p>
          </div>
          <div className="secondCol10">
            <h2>{content.title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8] ">
              {content.description}
            </p>
            <p className="text-[#313942] dark:text-[#e3e3e3b8] ">
              {content.country}
            </p>
          </div>
          <Image
            src={content.image_url}
            alt={content.title}
            width={500}
            height={300}
          />
        </Link>
      ))}
    </div>
  );
};

export default GridLayout10;
