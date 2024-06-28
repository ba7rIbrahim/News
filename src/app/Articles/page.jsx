"use client";
import News from "@/components/News";
import { useState } from "react";
export default function Articles() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const [news, setNews] = useState(
    {
      categories: "Apple News",
      api: `https://newsapi.org/v2/everything?q=apple&from=2024-06-20&to=2024-06-20&sortBy=popularity&apiKey=${apiKey}`,
    }
  );

  const [activeId, setActiveId] = useState(1);
  function newsCategories() {
    return <News newsInfo={news} />;
  }
  function changeStateNews(newsId, newsName, newsAPI) {
    setNews({...news, categories: newsName, api: newsAPI});
    setActiveId(newsId);
  }

  let newsFilter = [
    {
      id: 1,
      title: "Apple News",
      api: `https://newsapi.org/v2/everything?q=apple&from=2024-06-20&to=2024-06-20&sortBy=popularity&apiKey=${apiKey}`,
    },
    {
      id: 2,
      title: "Bitcoins News",
      api: `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`,
    },
    {
      id: 3,
      title: "Tech Crunch News",
      api: `https://newsapi.org/v2/everything?q=tesla&from=2024-05-28&sortBy=publishedAt&apiKey=37653128e3d0421e9c300ebe9b2ab1de`,
    },
    {
      id: 4,
      title: "Tesla News",
      api: `https://newsapi.org/v2/everything?q=tesla&from=2024-05-28&sortBy=publishedAt&apiKey=${apiKey}`,
    },
    {
      id: 5,
      title: "Wall Street Journal",
      api: `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`,
    },
    {
      id: 6,
      title: "Business In The US",
      api: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`,
    }

  ];

  return (
    <div className="container min-h-[calc(100vh-213px)] mt-[100px]">
      <div class="text-center mb-10 mt-10">
          <h1 class="capitalize text-main text-4xl font-semibold">
            Articles
          </h1>
          <p class="text-lg text-gray-700 mt-4 px-2">
            Here you will find a lot of different news
          </p>
        </div>
      <div className="flex justify-center items-center flex-wrap gap-2 mt-10 mb-10 lg:mt-24">
        {newsFilter.map((news) => {
          return (
            <button
              key={news.id}
              className={`${news.id === activeId ? 'bg-main' : 'bg-gray-200'}  font-medium text-sm  text-white text-center py-1 md:py-1 px-1 rounded cursor-pointer`}
              onClick={(e) => {
                changeStateNews(news.id, e.target.innerHTML, news.api);
                newsCategories();
              }}
            >
              {news.title}
            </button>
          );
        })}
      </div>
      {newsCategories()}
    </div>
  );
}
