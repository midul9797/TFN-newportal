import Image from "next/image";
import React from "react";
import "../styles/gridLayout6.css";
const GridLayout6 = ({ news }) => {
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
      <div className="parentGrid6 ">
        <div className="gridCol6">
          <Image
            src={news.image_url}
            alt={news.title}
            width={500}
            height={300}
          />
          <div className="gridColContent6">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
        <div className="gridCol6">
          <Image
            src={news.image_url}
            alt={news.title}
            width={500}
            height={300}
          />
          <div className="gridColContent6">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
        <div className="gridCol6">
          <Image
            src={news.image_url}
            alt={news.title}
            width={500}
            height={300}
          />
          <div className="gridColContent6">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
        <div className="gridCol6">
          <Image
            src={news.image_url}
            alt={news.title}
            width={500}
            height={300}
          />
          <div className="gridColContent6">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout6;
