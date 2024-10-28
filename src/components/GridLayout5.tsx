import Image from "next/image";
import React from "react";
import "../styles/gridLayout5.css";
const GridLayout5 = ({ news }) => {
  return (
    <div className="mb-5 lg:mx-auto max-w-[1280px] border-t-4 border-solid border-black dark:border-white">
      <div className="topLeftTitle">
        <h2>More </h2>
        <svg
          viewBox="0 0 32 32"
          width="1em"
          height="1em"
          data-testid="section-title-chevron"
          className="sc-1097f7fe-0 jmthjj"
        >
          <path d="M21.6 14.3 5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z"></path>
        </svg>
      </div>
      <div className="parentGrid5  ">
        <div className="gridCol">
          <Image
            src={news.image_url}
            alt={news.title}
            width={500}
            height={300}
          />
          <div className="gridColContent">
            <h2>{news.title}</h2>
            <p className="text-[#313942] dark:text-[#E3E3E3]">
              {news.description}
            </p>
            <p>
              {news.source_name} | {news.country}
            </p>
          </div>
        </div>
        <div className="gridCol">
          <Image
            src={news.image_url}
            alt={news.title}
            width={500}
            height={300}
          />
          <div className="gridColContent">
            <h2>{news.title}</h2>
            <p className="text-[#313942] dark:text-[#E3E3E3]">
              {news.description}
            </p>
            <p className="text-[#313942] dark:text-[#E3E3E3] font-bold">
              {news.source_name} | {news.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout5;