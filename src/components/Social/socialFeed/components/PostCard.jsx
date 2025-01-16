import * as React from "react";

export function PostCard({ avatarColor, imageUrl, interactions }) {
  // Retrieve data from localStorage
  const story = localStorage.getItem("story") || "Default story text.";
  const title = localStorage.getItem("title") || "Default title";
  const image = localStorage.getItem("image") || imageUrl;
  const tags = localStorage.getItem("tags")
    ? localStorage.getItem("tags").split(",")
    : [];

  return (
    <article className="flex flex-col px-7 w-full max-md:px-5 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap gap-5 text-base text-black max-md:mt-10">
              <div
                className={`flex shrink-0 self-start w-14 rounded-full ${avatarColor} h-[50px]`}
                role="img"
                aria-label="User avatar"
              />
              <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                <div className="flex z-10 gap-4 text-xs">
                  <div className="font-[250]">Front end Dev</div>
                  <time dateTime="2024-02-14">10 Days ago</time>
                </div>
                <div className="z-10 shrink-0 w-px h-3 border border-solid border-black border-opacity-60" />
                <div className="flex whitespace-nowrap">
                  <div className="grow">Suzulaab</div>
                  <div className="shrink-0 self-start mt-6 w-full h-px border border-black border-solid" />
                </div>
                <h2 className="self-stretch mt-3 font-bold text-lg">{title}</h2>
                <p className="self-stretch mt-3 font-[250]">{story}</p>
                {tags.length > 0 && (
                  <div className="mt-2 flex gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <img
              src={image}
              alt="Post content"
              className="object-contain grow shrink-0 mt-3 max-w-full aspect-[1.67] w-[195px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-8 ml-20 max-w-full w-[411px] max-md:ml-2.5">
        {interactions}
      </div>
      <div className="shrink-0 mt-3 h-px border border-black border-solid max-md:max-w-full" />
    </article>
  );
}
