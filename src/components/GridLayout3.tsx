import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../styles/gridLayout3.css";

const GridLayout3 = ({ news, border }: { border: boolean }) => {
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

      <div className="mainGrid  grid-cols-[2fr_1fr] max-w-[1280px] lg:mx-auto">
        <Image src={news.image_url} alt={news.title} width={500} height={250} />
        <div className="mainGridContent">
          <h2>{news.title}</h2>
          <p className="text-[#313942] dark:text-[#e3e3e3b8]">
            {news.description}
          </p>
          <Link
            href="#cta"
            className="font-bold w-fit bg-white dark:bg-black  border-black dark:border-white  border-solid border-2 text-black dark:text-white px-3 py-1 mt-2  hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300"
          >
            See More
          </Link>
        </div>
      </div>
    </>
  );
};

export default GridLayout3;
