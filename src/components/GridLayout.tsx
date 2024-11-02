import Image from "next/image";
import React from "react";
import "../styles/gridLayout.css";
import Link from "next/link";
import { postTime } from "@/helpers/PostTime";
const GridLayout = ({ news }) => {
  console.log(postTime(news[0].pubDate));
  // const [news, setNews] = useState();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const getNews = async () => {
  //     const res = await fetch(
  //       "https://newsdata.io/api/1/latest?apikey=pub_57418e66c1b1fe4264ed1b056fcb08161669b&category=sports"
  //     );
  //     const data = await res.json();
  //     console.log(data?.results);
  //     // setNews(data?.results);
  //     setLoading(false);
  //   };
  //   getNews();
  // }, []);
  // if (loading) return <p>Loading...</p>;
  return (
    <div className="parentGrid1 lg:mx-auto max-w-[1280px] mb-5">
      <div className="firstTwoCol">
        {/* Conditional row span for image height */}
        <div className="firstCol">
          <Link
            href={`/category/${news[0].category}/${news[0].article_id}`}
            className="link"
          >
            <div className={`firstColBox`}>
              <Image
                src={news[0]?.image_url || ""}
                width={500}
                height={250}
                alt={news[0]?.title}
              />
              <div className="firstColBoxContent ">
                <h2 className="">{news[0]?.title}</h2>
                <p className="text-[#313942] dark:text-[#e3e3e3b8]">
                  {news[0]?.description}
                </p>
              </div>
            </div>
          </Link>
          <Link
            href={`/category/${news[1].category}/${news[1].article_id}`}
            className="link"
          >
            <div className={`firstColBox`}>
              <Image
                src={news[1]?.image_url || ""}
                width={500}
                height={250}
                alt={news[1]?.title}
              />
              <div className="firstColBoxContent ">
                <h2 className="">{news[1]?.title}</h2>
                <p className="text-[#313942] dark:text-[#e3e3e3b8]">
                  {news[1]?.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <Link
          href={`/category/${news[2].category}/${news[2].article_id}`}
          className="link"
        >
          <div className="secondColBox">
            <Image
              src={news[2]?.image_url || ""}
              width={500}
              height={250}
              alt={news[2]?.title}
            />

            <h2 className="">{news[2]?.title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {news[2]?.description}
            </p>
          </div>
        </Link>
      </div>
      <div className="thirdCol">
        <Link
          href={`/category/${news[3].category}/${news[3].article_id}`}
          className="link"
        >
          <div className="thirdColBox">
            <h2 className="">{news[3]?.title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {news[3]?.description}
            </p>
            <p className="text-[#313942] dark:text-[#e3e3e3b8] py-3 ">
              {postTime(news[3]?.pubDate)} |{" "}
              {news[3]?.category[0].charAt(0).toUpperCase()}
              {news[3]?.category[0].slice(1)}
            </p>
          </div>
        </Link>
        <Link
          href={`/category/${news[4].category}/${news[4].article_id}`}
          className="link"
        >
          <div className="thirdColBox">
            <h2 className="">{news[4]?.title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {news[4]?.description}
            </p>
            <p className="text-[#313942] dark:text-[#e3e3e3b8] py-3 ">
              {postTime(news[4]?.pubDate)} |{" "}
              {news[4]?.category[0].charAt(0).toUpperCase()}
              {news[4]?.category[0].slice(1)}
            </p>
          </div>
        </Link>
        <Link
          href={`/category/${news[5].category}/${news[5].article_id}`}
          className="link"
        >
          <div className="thirdColBox">
            <h2 className="">{news[5]?.title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {news[5]?.description}
            </p>
            <p className="text-[#313942] dark:text-[#e3e3e3b8] py-3 ">
              {postTime(news[5]?.pubDate)} |{" "}
              {news[5]?.category[0].charAt(0).toUpperCase()}
              {news[5]?.category[0].slice(1)}
            </p>
          </div>
        </Link>
        <Link
          className="link"
          href={`/category/${news[6].category}/${news[6].article_id}`}
        >
          <div className="thirdColBox">
            <h2 className="">{news[6]?.title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {news[6]?.description}
            </p>
            <p className="text-[#313942] dark:text-[#e3e3e3b8] py-3 ">
              {postTime(news[6]?.pubDate)} |{" "}
              {news[6]?.category.charAt(0).toUpperCase()}
              {news[6]?.category.slice(1)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GridLayout;
