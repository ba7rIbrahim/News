"use client";
import Loading from "@/app/Articles/loading";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";

export default function News({ newsInfo }) {
  let [articleResult, setArticleResult] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${newsInfo.api}`);
        const result = await response.json();
        setArticleResult(result);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    }
    fetchData();
  }, [newsInfo.categories, newsInfo.api]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4 mb-16">
        {articleResult && articleResult.articles ? (
          articleResult.articles.map((article) => {
            return (
              <Link
                key={uuid()}
                href={article.url}
                target="_blank"
                className="bg-black rounded-md p-3 min-w-[250px] shadow-2xl hover:-translate-y-1 duration-500"
              >
                <Tooltip
                  placement="top"
                  title="Click To Read"
                  className="flex flex-col h-full"
                >
                  <Image
                    className="w-full h-[150px] rounded-[20px] mb-4"
                    src={
                      article.urlToImage !== null
                        ? article.urlToImage
                        : "https://techcrunch.com/wp-content/uploads/2024/01/Google-Lens-GettyImages-1258923414.jpeg?resize=1200,790"
                    }
                    alt=""
                    width={250}
                    height={250}
                  />
                  <div>
                    <h2 className="text-main mb-2 font-bold">
                      {article.title}
                    </h2>
                    <p className=" font-light mb-7 text-sm text-gray-500">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <p className="text-main">
                      <span className="text-white">by:</span> {article.author}
                    </p>
                    <p className="text-sm font-light text-gray-300">
                      {article.publishedAt}
                    </p>
                  </div>
                <button className="bg-main text-white w-full rounded mt-8">Read This Article</button>
                </Tooltip>
              </Link>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
