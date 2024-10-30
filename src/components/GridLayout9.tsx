import React from "react";
import "../styles/gridLayout9.css";
const GridLayout9 = ({ news }) => {
  return (
    <div className="mb-5 lg:mx-auto max-w-[1280px] border-t-4 border-solid border-black dark:border-white">
      <div className="topLeftTitle">
        <h2>Related </h2>
      </div>
      <div className="parentGrid9">
        {[...Array(3).fill(news)].map((x, idx) => (
          <div className="gridColContent9" key={idx}>
            <h2>{x.title}</h2>
            <p className="text-[#313942] dark:text-[#e3e3e3b8]">
              {x.source_name} | {x.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout9;
