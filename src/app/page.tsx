"use client";

import GridLayout from "@/components/GridLayout";
import GridLayout10 from "@/components/GridLayout10";
import GridLayout2 from "@/components/GridLayout2";
import GridLayout3 from "@/components/GridLayout3";
import GridLayout4 from "@/components/GridLayout4";
import GridLayout5 from "@/components/GridLayout5";
import GridLayout6 from "@/components/GridLayout6";
import GridLayout7 from "@/components/GridLayout7";
import GridLayout8 from "@/components/GridLayout8";
import GridLayout9 from "@/components/GridLayout9";
import Navbar from "@/components/Navbar";
import SingleNews from "@/components/SingleNews";
const news = {
  article_id: "ec66d28635c198020ecdf56f9c0fc378",
  title:
    "Chinese hackers targeted phones affiliated with Harris campaign, source says",
  link: "https://www.rappler.com/world/us-canada/chinese-hackers-target-phones-kamala-harris-campaign/",
  keywords: [
    "cyberattacks",
    "us elections",
    "us & canada",
    "kamala harris",
    "cybersecurity",
    "china",
    "world",
    "technology",
  ],
  creator: ["Reuters"],
  video_url: null,
  description:
    "While noting that it is not aware of the specific situation, the Chinese embassy in Washington says China opposes and combats cyber attacks and cyber thefts in all forms",
  content:
    "WASHINGTON, USA – Chinese hackers who tapped into Verizon’s system targeted phones used by people affiliated with the campaign of Democratic presidential candidate Kamala Harris , a person familiar with the situation said on Friday, October 25. Republican presidential candidate Donald Trump and his running mate, JD Vance, were also targeted, according to media reports. Reuters could not confirm those reports. The New York Times reported investigators were working to determine what communications, if any, were taken from Trump and Vance. The Trump campaign was made aware this week that Trump and Vance were among a number of people inside and outside of government whose phone numbers were targeted through the infiltration of Verizon phone systems, the Times report added. The Trump campaign did not confirm that Trump’s and Vance’s phones were targeted. Steven Cheung, the campaign’s communications director, said Vice President Harris has emboldened China and Iran to attack US infrastructure to prevent Trump from returning to office. While noting that it was not aware of the specific situation, the Chinese embassy in Washington said China opposes and combats cyber attacks and cyber thefts in all forms. “The presidential elections are the United States’ domestic affairs. China has no intention and will not interfere in the US election,” an embassy spokesperson said when reached for comment. The Harris campaign did not immediately respond to requests for comment. The Trump campaign was hacked earlier this year. The US Justice Department charged three members of Iran’s Revolutionary Guard Corps with the hack, accusing them of trying to disrupt the Nov. 5 election. The FBI and the US Cybersecurity and Infrastructure Security Agency said on Friday they were investigating unauthorized access to commercial telecommunications infrastructure by people associated with China. The joint statement by the agencies did not name the targets of the incident. Verizon said it was aware of a sophisticated attempt to reportedly target US telecoms and gather intelligence. The largest U.S. telecom company added it was working with law enforcement. – Rappler.com",
  pubDate: "2024-10-26 01:39:28",
  pubDateTZ: "UTC",
  image_url:
    "https://www.rappler.com/tachyon/2024/10/2024-10-26T002952Z_1910493116_RC2ZRAA1YSXG_RTRMADP_3_USA-ELECTION-TRUMP-CHINA.jpg",
  source_id: "rappler",
  source_priority: 14296,
  source_name: "Rappler",
  source_url: "https://www.rappler.com",
  source_icon: "https://i.bytvi.com/domain_icons/rappler.png",
  language: "english",
  country: ["philippines"],
  category: ["top"],
  ai_tag: ["cybercrime and cybersecurity", "national security"],
  ai_region: [
    "china,asia",
    "washington,united states of america,north america",
  ],
  ai_org: null,
  sentiment: "negative",
  sentiment_stats: {
    positive: 0.09,
    neutral: 0.09,
    negative: 99.82,
  },
  duplicate: false,
};
export default function Home() {
  return (
    <>
      <Navbar />

      <GridLayout />
      <GridLayout2 />
      <GridLayout3 news={news} />
      <GridLayout4 news={news} />
      <GridLayout5 news={news} />
      <GridLayout6 news={news} />
      <GridLayout7 news={news} />
      <GridLayout8 news={news} />
      {/* <SingleNews news={news} />
      <GridLayout9 news={news} />
      <GridLayout10 news={news} /> */}
    </>
  );
}
