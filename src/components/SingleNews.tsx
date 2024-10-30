import Image from "next/image";
import React from "react";
import "../styles/singleNews.css";
import Link from "next/link";
const SingleNews = ({ news }) => {
  return (
    <div className="newsContainer">
      <h2 className="newsTitle">{news.title}</h2>
      <div className="subDetails">
        <p>{news.pubDate}</p>
        <div className="saveShare">
          <a href="#">
            <div className="save">
              Save{" "}
              <span>
                <svg
                  className="fill-black dark:fill-white"
                  viewBox="0 0 32 32"
                  width="1em"
                  height="1em"
                  aria-hidden="true"
                >
                  <path d="M29.6 13.4H18.7v-11h-5.4v11H2.4v5.3h10.9v11h5.4v-11h10.9v-5.3z"></path>
                </svg>
              </span>
            </div>
          </a>
          <a href="#">
            <div className="share">
              Share{" "}
              <span>
                <svg
                  className="fill-black dark:fill-white"
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.51768 8.96851C8.95518 8.96851 8.44393 9.19851 8.07227 9.57018L4.19727 7.36685C4.24893 7.18768 4.2856 7.00185 4.2856 6.80685C4.2856 6.61102 4.24977 6.42518 4.19893 6.2456L8.06143 4.04935C8.43393 4.42602 8.94977 4.66102 9.51768 4.66102C10.661 4.66102 11.5852 3.73643 11.5852 2.60893C11.5852 1.46518 10.661 0.541016 9.51768 0.541016C8.38977 0.541016 7.4656 1.46518 7.4656 2.60893C7.4656 2.78727 7.49602 2.95768 7.53935 3.12352L3.70727 5.37643C3.33143 4.98477 2.80477 4.73935 2.2181 4.73935C1.09018 4.73935 0.166016 5.6631 0.166016 6.80685C0.166016 7.93476 1.09018 8.85851 2.2181 8.85851C2.8006 8.85851 3.32435 8.61726 3.69977 8.23268L7.54602 10.4943C7.49893 10.6681 7.4656 10.8473 7.4656 11.036C7.4656 12.1639 8.38977 13.0881 9.51768 13.0881C10.661 13.0881 11.5852 12.1639 11.5852 11.036C11.5852 9.89268 10.661 8.96851 9.51768 8.96851"
                  ></path>
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
      <Image src={news.image_url} alt={news.title} width={500} height={300} />
      <p>
        {news.content.split("").map((char: string, idx: number) =>
          char === "." ? (
            <span key={char + idx}>
              {char}
              <br />
              <br />
            </span>
          ) : (
            char
          )
        )}
      </p>
    </div>
  );
};

export default SingleNews;
