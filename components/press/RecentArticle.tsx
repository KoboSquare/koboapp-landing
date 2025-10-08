import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { urlFor } from "@/lib/sanity/image";
import { client } from "@/lib/sanity/client";
import { RECENT_ARTICLES_QUERY } from "@/lib/sanity/queries/articles";

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

interface RecentArticleConfig {
  title: string;
  subtitle: string;
  showSection: boolean;
  limit: number;
}

interface RecentArticleProps {
  pressPageData: any;
}

async function RecentArticle({ pressPageData }: RecentArticleProps) {
  // fetch articles from sanity
  const articles = await client.fetch(RECENT_ARTICLES_QUERY);

  // config for the section from sanity or render default fallback
  const config: RecentArticleConfig = pressPageData?.recentArticlesSection || {
    title: "Our recent articles",
    subtitle: "Stay informed with our latest insights",
    showSection: true,
    limit: 3,
  };

  // if the section is not shown or there are no articles, return null
  if (!config.showSection || !articles.length) {
    return null;
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='mb-4'>
        <h3 className='text-[#010101] text-2xl lg:text-3xl font-semibold'>
          {config.title}
        </h3>
        <p className='text-[#363E3F] text-lg'>{config.subtitle}</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {articles.slice(0, config.limit).map((article: Article) => (
          <RecentArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}

function RecentArticleCard({ article }: { article: Article }) {
  return (
    <div className='grid grid-rows-5 gap-4'>
      <div className='row-span-2 relative'>
        <Image
          src={urlFor(article.featuredImage.asset).url()}
          alt={article.featuredImage.alt}
          fill
          className='object-cover rounded-xl'
        />
      </div>

      <div className='row-span-3 space-y-2'>
        <div className='flex justify-between items-center'>
          <p className='font-medium text-[#009A74] text-base'>
            {article.author}
          </p>
          <p className='text-[#363E3F] text-base'>
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <h4 className='text-[#010101] text-xl lg:text-2xl font-semibold'>
          {article.title}
        </h4>
        <p className='text-[#363E3F] text-base'>{article.description}</p>
        <Button
          variant='subtle'
          style={{
            paddingLeft: "0px",
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

export default RecentArticle;
