import Header from "@/components/shared/header";
import Image from "next/image";
import logo from "@/assets/Logo2.svg";
import { Divider } from "@mantine/core";
import RecentArticle from "@/components/press/RecentArticle";
import TrendingArticle from "@/components/press/TrendingArticle";
import InsiderTipAndTricks from "@/components/press/InsiderTipAndTricks";
import SubscribeArticleBanner from "@/components/press/SubscribeArticleBanner";
import { client } from "@/lib/sanity/client";
import { PRESS_PAGE_DATA_QUERY } from "@/lib/sanity/queries/press";
import Hero from "@/components/press/Hero";
import Featured from "@/components/press/Featured";

async function page() {
  // Fetch press page data from Sanity
  const pressPageData = await client.fetch(PRESS_PAGE_DATA_QUERY);

  return (
    <div>
      <Header
        textColor='black'
        backgroundColor='white'
        logo={<Image src={logo} alt='Logo' width={100} height={100} />}
      />

      <div className='mb-16 space-y-4 md:space-y-12 lg:space-y-24 px-4'>
        {/* Hero Section */}
        <Hero pressPageData={pressPageData} />

        {/* Featured Article Section */}
        <Featured pressPageData={pressPageData} />

        {/* Recent Articles Section */}
        <RecentArticle pressPageData={pressPageData} />

        <Divider className='max-w-6xl mx-auto' />

        {/* Trending Articles Section */}
        <TrendingArticle pressPageData={pressPageData} />

        {/* Insider Tips Section */}
        <InsiderTipAndTricks pressPageData={pressPageData} />

        {/* Subscribe Section */}
        <SubscribeArticleBanner pressPageData={pressPageData} />
      </div>
    </div>
  );
}

export default page;
