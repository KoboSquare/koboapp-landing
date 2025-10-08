import React from "react";
import Image from "next/image";
import { Badge, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { urlFor } from "@/lib/sanity/image";
import { client } from "@/lib/sanity/client";
import { TRENDING_ARTICLES_QUERY } from "@/lib/sanity/queries/articles";

interface Article {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  featuredImage: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    alt: string;
  };
  category: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    color: string;
    backgroundColor: string;
  };
  author: string;
  publishedAt: string;
  readTime: number;
  tags?: string[];
}

interface TrendingArticleConfig {
  title: string;
  subtitle: string;
  badgeText: string;
  showSection: boolean;
  limit: number;
}

interface TrendingArticleProps {
  pressPageData: any;
}

async function TrendingArticle({ pressPageData }: TrendingArticleProps) {
  // fetch articles from sanity
  const articles = await client.fetch(TRENDING_ARTICLES_QUERY);

  // config for the section from sanity or render default fallback
  const config: TrendingArticleConfig =
    pressPageData?.trendingArticlesSection || {
      title: "Trending articles you need to check out",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros.",
      badgeText: "Trending",
      showSection: true,
      limit: 3,
    };

  // if the section is not shown or there are no articles, return null
  if (!config.showSection || !articles.length) {
    return null;
  }

  return (
    <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-8'>
      <div className='mb-4 col-span-1 lg:col-span-2 space-y-2'>
        <h6 className='text-[#009A74] text-lg font-medium'>
          {config.badgeText}
        </h6>
        <h3 className='text-[#010101] text-2xl lg:text-4xl font-semibold'>
          {config.title}
        </h3>
        <p className='text-[#363E3F] text-lg'>{config.subtitle}</p>
      </div>

      <div className='grid grid-cols-1 gap-4 md:gap-8 lg:col-span-4'>
        {articles.slice(0, config.limit).map((article: Article) => (
          <TrendingArticleCard
            key={article._id}
            article={article}
            badgeText={config.badgeText}
          />
        ))}
      </div>
    </div>
  );
}

function TrendingArticleCard({
  article,
  badgeText,
}: {
  article: Article;
  badgeText: string;
}) {
  return (
    <div className='grid grid-cols-5 gap-4 md:gap-6'>
      <div className=' relative col-span-2'>
        <Image
          src={urlFor(article.featuredImage.asset).width(300).height(200).url()}
          alt={article.featuredImage.alt}
          fill
          className='object-cover rounded-xl'
        />
      </div>

      <div className='space-y-3 col-span-3'>
        <div className='flex justify-between items-center'>
          <Badge
            style={{
              color: article.category.color,
              backgroundColor: article.category.backgroundColor,
            }}>
            {article.category.title}
          </Badge>
          <p className='text-[#363E3F] text-base'>
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <h4 className='text-[#010101] text-xl lg:text-2xl font-semibold'>
          {article.title}
        </h4>
        <p className='text-[#363E3F] text-base'>
          {article.description.slice(0, 100) + "..."}
        </p>
        <Button
          variant='subtle'
          style={{
            paddingLeft: "5px",
          }}
          color='#007F5E'
          rightSection={<IconArrowRight />}
          component='a'
          href={`/press/${article.slug.current}`}>
          Read More
        </Button>
      </div>
    </div>
  );
}

export default TrendingArticle;
