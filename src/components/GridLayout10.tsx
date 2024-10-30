import Image from "next/image";
import React from "react";
import "../styles/gridLayout10.css";
const GridLayout10 = ({ news }) => {
  return (
    <div className="mb-5 lg:mx-auto max-w-[1280px] border-t-4 border-solid border-black dark:border-white">
      <div className="topLeftTitle">
        <h2>More </h2>
      </div>
      <div className="parentGrid10">
        <div className="firstCol10">
          <p className="text-[#313942] dark:text-[#e3e3e3b8]">
            {news.source_name}
          </p>
        </div>
        <div className="secondCol10">
          <h2>{news.title}</h2>
          <p className="text-[#313942] dark:text-[#e3e3e3b8] ">
            {news.description}
          </p>
          <p className="text-[#313942] dark:text-[#e3e3e3b8] ">
            {news.country}
          </p>
        </div>
        <Image src={news.image_url} alt={news.title} width={500} height={300} />
      </div>
      <div className="parentGrid10">
        <div className="firstCol10">
          <p className="text-[#313942] dark:text-[#e3e3e3b8]">
            {news.source_name}
          </p>
        </div>
        <div className="secondCol10">
          <h2>{news.title}</h2>
          <p className="text-[#313942] dark:text-[#e3e3e3b8] ">
            {news.description}
          </p>
          <p className="text-[#313942] dark:text-[#e3e3e3b8] ">
            {news.country}
          </p>
        </div>
        <Image src={news.image_url} alt={news.title} width={500} height={300} />
      </div>
      <div className="parentGrid10">
        <div className="firstCol10">
          <p className="text-[#313942] dark:text-[#e3e3e3b8]">
            {news.source_name}
          </p>
        </div>
        <div className="secondCol10">
          <h2>{news.title}</h2>
          <p className="text-[#313942] dark:text-[#e3e3e3b8] ">
            {news.description}
          </p>
          <p className="text-[#313942] dark:text-[#e3e3e3b8] ">
            {news.country}
          </p>
        </div>
        <Image src={news.image_url} alt={news.title} width={500} height={300} />
      </div>
    </div>
  );
};

export default GridLayout10;
