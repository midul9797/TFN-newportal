import Image from "next/image";
import React, { useEffect, useState } from "react";
import "../styles/gridLayout.css";
import * as news from "../../public/data.json";
import Link from "next/link";
const GridLayout = () => {
  //   const [news, setNews] = useState();
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     const getNews = async () => {
  //       const res = await fetch(
  //         "https://newsdata.io/api/1/latest?apikey=pub_57418e66c1b1fe4264ed1b056fcb08161669b&category=sports"
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //       setNews(data?.results);
  //       setLoading(false);
  //     };
  //     getNews();
  //   }, []);
  //   if (loading) return <p>Loading...</p>;
  return (
    <div className="parentGrid1 lg:mx-auto max-w-[1280px] mb-5">
      <div className="firstTwoCol">
        {/* Conditional row span for image height */}
        <div className="grid gap-4">
          <Link href="" className="link">
            <div className={`firstColBox`}>
              <Image
                src={news[0]?.image_url || ""}
                width={500}
                height={250}
                alt={news[0]?.title}
              />
              <div className="firstColBoxContent ">
                <h2 className="">{news[0]?.title}</h2>
                <p className="text-[#313942] dark:text-[#E3E3E3]">
                  {news[0]?.description}
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/"} className="link">
            <div className={`firstColBox`}>
              <Image
                src={news[1]?.image_url || ""}
                width={500}
                height={250}
                alt={news[1]?.title}
              />
              <div className="firstColBoxContent ">
                <h2 className="">{news[1]?.title}</h2>
                <p className="text-[#313942] dark:text-[#E3E3E3]">
                  {news[1]?.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <Link href={""} className="link">
          <div className="secondColBox">
            <Image
              src={news[2]?.image_url || ""}
              width={500}
              height={250}
              alt={news[2]?.title}
            />

            <h2 className="">{news[2]?.title}</h2>
            <p className="text-[#313942] dark:text-[#E3E3E3]">
              {news[2]?.description}
            </p>
          </div>
        </Link>
      </div>
      <div className="thirdCol">
        <Link href={""} className="link">
          <div className="thirdColBox">
            <h2 className="">{news[3]?.title}</h2>
            <p className="text-[#313942] dark:text-[#E3E3E3]">
              {news[3]?.description}
            </p>
            <p className="text-[#313942] dark:text-[#E3E3E3] py-3 ">
              {news[3]?.source_name} |{" "}
              {news[3]?.category[0].charAt(0).toUpperCase()}
              {news[3]?.category[0].slice(1)}
            </p>
          </div>
        </Link>
        <Link href="" className="link">
          <div className="thirdColBox">
            <h2 className="">{news[3]?.title}</h2>
            <p className="text-[#313942] dark:text-[#E3E3E3]">
              {news[3]?.description}
            </p>
            <p className="text-[#313942] dark:text-[#E3E3E3] py-3 ">
              {news[3]?.source_name} |{" "}
              {news[3]?.category[0].charAt(0).toUpperCase()}
              {news[3]?.category[0].slice(1)}
            </p>
          </div>
        </Link>
        <Link href="" className="link">
          <div className="thirdColBox">
            <h2 className="">{news[3]?.title}</h2>
            <p className="text-[#313942] dark:text-[#E3E3E3]">
              {news[3]?.description}
            </p>
            <p className="text-[#313942] dark:text-[#E3E3E3] py-3 ">
              {news[3]?.source_name} |{" "}
              {news[3]?.category[0].charAt(0).toUpperCase()}
              {news[3]?.category[0].slice(1)}
            </p>
          </div>
        </Link>
        <Link className="link" href={""}>
          <div className="thirdColBox">
            <h2 className="">{news[3]?.title}</h2>
            <p className="text-[#313942] dark:text-[#E3E3E3]">
              {news[3]?.description}
            </p>
            <p className="text-[#313942] dark:text-[#E3E3E3] py-3 ">
              {news[3]?.source_name} |{" "}
              {news[3]?.category[0].charAt(0).toUpperCase()}
              {news[3]?.category[0].slice(1)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GridLayout;
