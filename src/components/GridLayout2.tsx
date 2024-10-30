import Image from "next/image";
import "../styles/gridLayout2.css";
import news from "../../public/data.json";
const GridLayout2 = () => {
  return (
    <div className="parentGrid2">
      <div className="firstGrid2">
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
            {news[0].source_name} | {news[0].creator}
          </p>
        </div>
      </div>
      <div className="secondGrid2">
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
            {news[1].source_name} | {news[1].creator}
          </p>
        </div>
      </div>
      <div className="thirdGrid2">
        <div className="thirdGridCol2">
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
              {news[5].source_name} | {news[5].creator}
            </p>
          </div>
        </div>
        <div className="thirdGridCol2">
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
              {news[2].source_name} | {news[2].creator}
            </p>
          </div>
        </div>
        <div className="thirdGridCol2">
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
              {news[3].source_name} | {news[3].creator}
            </p>
          </div>
        </div>
        <div className="thirdGridCol2">
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
              {news[4].source_name} | {news[4].creator}
            </p>
          </div>
        </div>
      </div>
      <div className="fourthGrid2">
        <div className="fourthGridContent2">
          <h2>{news[6].title}</h2>
          <p className="text-[#313942] dark:text-[#e3e3e3b8]">
            {news[6].description}
          </p>
          <p className="pb-4">
            {news[6].source_name} | {news[6].creator}
          </p>
        </div>
        <div className="fourthGridContent2">
          <h2>{news[7].title}</h2>
          <p className="text-[#313942] dark:text-[#e3e3e3b8]">
            {news[7].description}
          </p>
          <p className="pb-4">
            {news[7].source_name} | {news[7].creator}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridLayout2;
