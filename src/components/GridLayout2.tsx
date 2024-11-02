import Image from "next/image";
import "../styles/gridLayout2.css";
import Link from "next/link";
import { postTime } from "@/helpers/PostTime";
const GridLayout2 = ({ border, topLeftTitle = "", news }) => {
  return (
    <>
      {border && (
        <div className="mb-5 lg:mx-auto max-w-[1280px] border-t-4 border-solid border-black dark:border-white">
          <div className="topLeftTitle">
            <h2>{topLeftTitle}</h2>
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
        </div>
      )}
      <div className="parentGrid2 max-w-[1280px] mx-auto">
        <Link
          href={`/category/${news[0].category}/${news[0].article_id}`}
          className="firstGrid2"
        >
          <Image
            src={news[0].image_url || ""}
            width={500}
            height={250}
            alt={news[0].title}
          />
          <div className="firstGridContent2">
            <h2>{news[0].title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {news[0].description}
            </p>
            <p className="pb-4">
              {postTime(news[0]?.pubDate)} |{" "}
              {news[0]?.category[0].charAt(0).toUpperCase()}
              {news[0]?.category.slice(1)}
            </p>
          </div>
        </Link>
        <Link
          href={`/category/${news[1].category}/${news[1].article_id}`}
          className="secondGrid2"
        >
          <Image
            src={news[1].image_url || ""}
            width={500}
            height={250}
            alt={news[1].title}
          />
          <div className="secondGridContent2">
            <h2>{news[1].title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {news[1].description}
            </p>
            <p className="pb-4">
              {postTime(news[1]?.pubDate)} |{" "}
              {news[1]?.category[0].charAt(0).toUpperCase()}
              {news[1]?.category.slice(1)}
            </p>
          </div>
        </Link>
        <div className="thirdGrid2">
          <Link
            href={`/category/${news[5].category}/${news[5].article_id}`}
            className="thirdGridCol2"
          >
            <Image
              src={news[5].image_url || ""}
              width={500}
              height={250}
              alt={news[5].title}
            />
            <div className="thirdGridContent2">
              <h2>{news[5].title}</h2>
              <p className="text-[#313942] dark:text-[#e3e3e3b8]">
                {news[5].description}
              </p>
              <p className="pb-4">
                {postTime(news[5]?.pubDate)} |{" "}
                {news[5]?.category[0].charAt(0).toUpperCase()}
                {news[5]?.category.slice(1)}
              </p>
            </div>
          </Link>
          <Link
            href={`/category/${news[2].category}/${news[2].article_id}`}
            className="thirdGridCol2"
          >
            <Image
              src={news[2].image_url || ""}
              width={500}
              height={250}
              alt={news[2].title}
            />
            <div className="thirdGridContent2">
              <h2>{news[2].title}</h2>
              <p className="text-[#313942] dark:text-[#e3e3e3b8]">
                {news[2].description}
              </p>
              <p className="pb-4">
                {postTime(news[2]?.pubDate)} |{" "}
                {news[2]?.category[0].charAt(0).toUpperCase()}
                {news[2]?.category.slice(1)}
              </p>
            </div>
          </Link>
          <Link
            href={`/category/${news[3].category}/${news[3].article_id}`}
            className="thirdGridCol2"
          >
            <Image
              src={news[3].image_url || ""}
              width={500}
              height={250}
              alt={news[3].title}
            />
            <div className="thirdGridContent2">
              <h2>{news[3].title}</h2>
              <p className="text-[#313942] dark:text-[#e3e3e3b8]">
                {news[3].description}
              </p>
              <p className="pb-4">
                {postTime(news[3]?.pubDate)} |{" "}
                {news[3]?.category[0].charAt(0).toUpperCase()}
                {news[3]?.category.slice(1)}
              </p>
            </div>
          </Link>
          <Link
            href={`/category/${news[4].category}/${news[4].article_id}`}
            className="thirdGridCol2"
          >
            <Image
              src={news[4].image_url || ""}
              width={500}
              height={250}
              alt={news[4].title}
            />
            <div className="thirdGridContent2">
              <h2>{news[4].title}</h2>
              <p className="text-[#313942] dark:text-[#e3e3e3b8]">
                {news[4].description}
              </p>
              <p className="pb-4">
                {postTime(news[4]?.pubDate)} |{" "}
                {news[4]?.category[0].charAt(0).toUpperCase()}
                {news[4]?.category.slice(1)}
              </p>
            </div>
          </Link>
        </div>
        <div className="fourthGrid2">
          <Link
            href={`/category/${news[6].category}/${news[6].article_id}`}
            className="fourthGridContent2"
          >
            <h2>{news[6].title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {news[6].description}
            </p>
            <p className="pb-4">
              {postTime(news[6]?.pubDate)} |{" "}
              {news[6]?.category[0].charAt(0).toUpperCase()}
              {news[6]?.category.slice(1)}
            </p>
          </Link>
          <Link
            href={`/category/${news[7].category}/${news[7].article_id}`}
            className="fourthGridContent2"
          >
            <h2>{news[7].title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {news[7].description}
            </p>
            <p className="pb-4">
              {postTime(news[7]?.pubDate)} |{" "}
              {news[7]?.category.charAt(0).toUpperCase()}
              {news[7]?.category.slice(1)}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GridLayout2;
