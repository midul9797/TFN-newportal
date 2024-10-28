"use client";

import GridLayout from "@/components/GridLayout";
import GridLayout3 from "@/components/GridLayout3";
import GridLayout4 from "@/components/GridLayout4";
import GridLayout5 from "@/components/GridLayout5";
import GridLayout6 from "@/components/GridLayout6";
import GridLayout7 from "@/components/GridLayout7";
import GridLayout8 from "@/components/GridLayout8";
import Navbar from "@/components/Navbar";
const news = {
  article_id: "7d8293a0b34cd8fb74ee34e72edba33a",
  title:
    "Donald Trump accusé d'avoir agressé sexuellement une mannequin rencontrée via Jeffrey Epstein",
  link: "https://news.knowledia.com/FR/fr/articles/donald-trump-accuse-d-avoir-agresse-sexuellement-une-mannequin-rencontree-429943f76a76647263085c5270e29d792a34972e?source=rss",
  keywords: null,
  creator: null,
  video_url: null,
  description:
    "Stacey Williams déclare que le candidat républicain lui avait touché, sans son consentement, les seins, les fesses et la taille, lors d'une rencontre en 1993. Donald Trump dément. - www.leparisien.fr",
  content: null,
  pubDate: "2024-10-26 02:12:35",
  pubDateTZ: "UTC",
  image_url:
    "https://leparisien.fr/resizer/i9qBeCdHFwgrS1aFJgl1pjX5y6E=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/QNCTRVCSFRBK3KSDHRVSSAN25I.jpg",
  source_id: "knowledia",
  source_priority: 167779,
  source_name: "Knowledia News",
  source_url: "http://news.knowledia.com",
  source_icon: "https://i.bytvi.com/domain_icons/knowledia.png",
  language: "french",
  country: ["france"],
  category: ["top"],
  ai_tag: ["awards and recognitions"],
  ai_region: [
    "republic,missouri,united states of america,north america",
    "republic,pennsylvania,united states of america,north america",
    "republic,washington,united states of america,north america",
  ],
  ai_org: null,
  sentiment: "neutral",
  sentiment_stats: {
    positive: 0.11,
    neutral: 99.77,
    negative: 0.13,
  },
  duplicate: false,
};
export default function Home() {
  return (
    <>
      <Navbar />
      <GridLayout />
      <GridLayout3 news={news} />
      <GridLayout4 news={news} />
      <GridLayout5 news={news} />
      <GridLayout6 news={news} />
      <GridLayout7 news={news} />
      <GridLayout8 news={news} />
    </>
  );
}
