import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../styles/gridLayout3.css";
const GridLayout4 = ({ news, border = false }) => {
  return (
    <>
      {border && (
        <div className="mb-5 lg:mx-auto max-w-[1280px] border-t-4 border-solid border-black dark:border-white">
          <Link href={`/category/${news.category}`}>
            <div className="topLeftTitle">
              <h2>{news.category.toUpperCase()} </h2>
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
          </Link>
        </div>
      )}

      <div className="mainGrid  grid-cols-[1fr_2fr] lg:mx-auto max-w-[1280px] ">
        <div className="mainGridContent order-2 md:order-1 lg:order-1">
          <h2>{news.title}</h2>
          <p className="text-[#313942] dark:text-[#e3e3e3b8]">
            {news.description}
          </p>
          <Link
            href={`/category/${news.category}/${news.article_id}`}
            className="font-bold w-fit bg-white dark:bg-black  border-black dark:border-white  border-solid border-2 text-black dark:text-white px-3 py-1 mt-2  hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300"
          >
            See More
          </Link>
        </div>
        <Image
          src={news.image_url}
          alt={news.title}
          className="order-1 lg:order-2"
          width={500}
          height={300}
        />
      </div>
    </>
  );
};

export default GridLayout4;
