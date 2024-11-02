import Image from "next/image";
import React from "react";
import "../styles/gridLayout7.css";
import Link from "next/link";
const GridLayout7 = ({ news, border = false }) => {
  return (
    <>
      {border && (
        <div className="mb-5 lg:mx-auto max-w-[1280px] border-t-4 border-solid border-black dark:border-white">
          <Link href={`/category/${news.category}`}>
            <div className="topLeftTitle">
              <h2>{news[0].category.toUpperCase()} </h2>
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
      <div className="parentGrid7 lg:mx-auto max-w-[1280px] mb-5">
        {news.map((content, idx) => (
          <Link
            href={`/category/${content.category}/${content.article_id}`}
            key={idx}
            className="gridCol7"
          >
            <Image
              src={content.image_url}
              alt={content.title}
              width={500}
              height={300}
            />
            <div className="gridColContent7">
              <h2>{content.title}</h2>
              <p className="text-[#313942] dark:text-[#e3e3e3b8]">
                {content.description}
              </p>
              <p className="text-[#313942] dark:text-[#e3e3e3b8] ">
                {content.source_name} | {content.country}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default GridLayout7;
