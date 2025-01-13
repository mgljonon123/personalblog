import * as React from "react";

export function ArticleCard({
  title,
  category,
  author,
  readTime,
  date,
  image,
  authorImage,
}) {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="">
        <div className="flex flex-col items-center self-stretch max-md:max-w-full">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="object-contain self-stretch w-full aspect-[2.87] max-md:max-w-full"
          />
          <h2 className="overflow-hidden mt-4 max-w-full text-xl font-medium leading-6 text-neutral-800 w-[401px]">
            {title}
          </h2>
          <div className="mt-5 text-sm leading-5 text-neutral-500">·</div>
        </div>
        <div className="mt-5 ml-20 text-sm leading-5 text-neutral-800 ">
          {category}
        </div>
        <div className="flex flex-row -mt-2 ml-4 max-w-full w-[261px] ">
          <div className="flex flex-col items-start">
            <img
              loading="lazy"
              src={authorImage}
              alt={`${author}'s profile picture`}
              className="object-contain w-10 rounded-3xl "
            />
          </div>
          <div className="ml-[70px] mt-[20px] text-sm  text-neutral-500">
            {readTime}
          </div>
          <div className="ml-[10px] mt-[20px] text-sm text-neutral-500">
            {date}
          </div>
        </div>
      </div>
    </article>
  );
}
