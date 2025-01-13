import React from "react";

export default function NavigationBar() {
  return (
    <nav
      className="flex z-10 flex-col justify-center items-center px-16 py-1.5 w-full text-black bg-zinc-300 max-md:px-5 max-md:max-w-full"
      role="navigation"
    >
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1711px] max-md:max-w-full">
        <div className="flex gap-9 items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
          <h1 className="self-stretch my-auto text-4xl font-bold">Home</h1>
          <div className="flex gap-3.5 items-center self-stretch my-auto text-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69705202b50ea7b122d7d0f2653637cba5930d5ac6a5b71ef97371cdd18344e4?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <button className="self-stretch my-auto" aria-label="Search">
              Search
            </button>
          </div>
        </div>
        <div className="flex gap-10 justify-center items-center self-stretch my-auto text-xl min-w-[240px]">
          <button
            className="flex gap-4 justify-center items-center self-stretch my-auto"
            aria-label="Make Post"
          >
            <span>Make Post</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7763724c4ab882c6a41ee15f4d9e7a5dcb74590beaefffceb2b324accce29a80?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d0d8252819ff136be5519b1d588d582e89a81b0f551ec4288c6f1243401e841?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div
            className="flex shrink-0 self-stretch my-auto bg-red-400 rounded-full h-[42px] w-[42px]"
            role="img"
            aria-label="User profile"
          />
        </div>
      </div>
    </nav>
  );
}
