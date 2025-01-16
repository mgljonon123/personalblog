import * as React from "react";

export function PostCard({ imageSrc }) {
  return (
    <article className="w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap gap-6 text-base text-black font-[250] max-md:mt-10">
            <div
              className="flex shrink-0 self-start rounded-full bg-stone-700 h-[55px] w-[60px]"
              role="img"
              aria-label="Author avatar"
            />
            <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit max-md:max-w-full">
              <div className="text-xs">Front end Dev</div>
              <div className="z-10 shrink-0 mt-2 w-px h-3.5 border border-solid border-black border-opacity-60" />
              <div className="text-black font-[800]">Suzulaab</div>
              <div className="shrink-0 mt-3.5 h-px border border-black border-solid w-[88px]" />
              <p className="self-stretch mt-3.5 max-md:max-w-full font-[400]">
                You need to figure it out yourself. It's a experience that will
                teach you more than 10 books. You will learn what endurance and
                fail means...
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt=""
            className="object-contain grow shrink-0 mt-3 max-w-full aspect-[1.63] w-[212px] max-md:mt-10"
          />
        </div>
      </div>
    </article>
  );
}
