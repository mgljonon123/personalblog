import * as React from "react";

export default function Pagination() {
  return (
    <nav
      className="flex flex-wrap gap-10 justify-between items-center pt-5 mt-8 w-full text-sm font-medium leading-none text-black whitespace-nowrap border-t border-white border-opacity-30 min-h-[61px] max-md:max-w-full"
      aria-label="Pagination"
    >
      <button className="flex items-start self-stretch my-auto hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <div className="flex gap-2 justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64838a4819b1225364ff05aa0eb9de2cc4cf687219e47bd43b4306351923213a?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <span>Previous</span>
        </div>
      </button>

      <div className="flex gap-0.5 items-start self-stretch my-auto text-center min-w-[240px]">
        {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
          <button
            key={index}
            className={`flex overflow-hidden flex-col items-center w-10 h-10 rounded-lg ${
              page === 1 ? "bg-slate-400 text-neutral-900" : ""
            } hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            aria-current={page === 1 ? "page" : undefined}
          >
            <div className="self-stretch px-3 py-2.5 rounded-lg min-h-[40px]">
              {page}
            </div>
          </button>
        ))}
      </div>

      <button className="flex items-start self-stretch my-auto text-zinc-100 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <div className="flex gap-2 justify-center items-center">
          <span>Next</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f16bf4e98d19da0084739ad29f1dc4b15bdd9d75c47fd43b2118bd3f7d200185?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </button>
    </nav>
  );
}
