import * as React from "react";
import { ArticleCard } from "./ArticleCard";
import { Header } from "./Header";
import { UserProfile } from "./UserProfile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Library } from "../../library2/Library";

const articles = [
  {
    id: 1,
    title: "Late night sunset in beach is very beautiful",
    category: "Beach photos",
    author: "Beach photos",
    readTime: "3 min read",
    date: "Jan 7, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/59793d35052b76ced6801760d028259bb7b818f04cdf2327894a8b8bb9c0c8af?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    authorImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/204930eeecbcc22a5c7282f5a74be248400a3945d11275919bc40bc18f12f962?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
  },
  {
    id: 2,
    title: "Summertime is very enjoyable. Stay healthy.",
    category: "Elisa Gabbert",
    author: "Elisa Gabbert",
    readTime: "3 min read",
    date: "Jan 7, 2022",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/59793d35052b76ced6801760d028259bb7b818f04cdf2327894a8b8bb9c0c8af?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    authorImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/204930eeecbcc22a5c7282f5a74be248400a3945d11275919bc40bc18f12f962?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
  },
  {
    id: 3,
    title: "Scientists proves that summer is the best season.",
    category: "Thought Thinkers",
    author: "Pierz Newton-John",
    readTime: "3 min read",
    date: "Dec 2, 2023",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/59793d35052b76ced6801760d028259bb7b818f04cdf2327894a8b8bb9c0c8af?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    authorImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/204930eeecbcc22a5c7282f5a74be248400a3945d11275919bc40bc18f12f962?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
  },
  {
    id: 4,
    title: "Orange sunsets are best for romantic dates.",
    category: "Beach photos",
    author: "Hanif Abdurraqib",
    readTime: "3 min read",
    date: "Jan 7, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/59793d35052b76ced6801760d028259bb7b818f04cdf2327894a8b8bb9c0c8af?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    authorImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/204930eeecbcc22a5c7282f5a74be248400a3945d11275919bc40bc18f12f962?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
  },
];

export default function LibraryLayout() {
  return (
    <div className="flex flex-col pb-5 bg-white">
      <Header />
      <main className="flex flex-col items-end self-center mt-9 w-full max-w-[1673px] max-md:max-w-full">
        <div className="self-start max-w-full w-[589px]">
          <div className="flex gap-5 max-md:flex-col">
            <UserProfile />
            <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
              <div className="flex self-stretch my-auto max-md:mt-10">
                <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                  <h1 className="text-7xl tracking-tighter text-center text-black ml-[50px] leading-[88px] max-md:text-4xl">
                    Library
                  </h1>
                  <nav className="flex gap-10 items-center self-stretch mt-3 text-2xl">
                    <button className="self-stretch my-auto ml-[50px] text-black">
                      Saved List
                    </button>
                    <Link to={"/library2"} element={<Library></Library>}>
                      <button className="self-stretch my-auto text-black text-opacity-50">
                        Reading History
                      </button>
                    </Link>
                  </nav>
                  <div className="shrink-0 mt-3.5 max-w-full h-0.5 border-2 border-black border-solid w-[110px] left-[50px] relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-7 w-full max-w-[1452px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>
        <section className="mt-8 w-full max-w-[1452px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {articles.slice(2).map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
