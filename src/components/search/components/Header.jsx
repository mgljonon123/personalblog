import * as React from "react";

export function Header() {
  return (
    <header className="flex flex-col justify-center items-center px-16 py-1.5 w-full text-black bg-zinc-300 max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1711px] max-md:max-w-full">
        <div className="flex gap-9 items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
          <h1 className="self-stretch my-auto text-4xl font-bold">Home</h1>
          <div className="flex gap-3.5 items-center self-stretch my-auto text-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/325c3a32314c8211dd9be9cf27f37610975bb99a7c8c5e2ca1083f89711c3749?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Search icon"
            />
            <span className="self-stretch my-auto">Search</span>
          </div>
        </div>
        <div className="flex gap-10 justify-center items-center self-stretch my-auto text-xl min-w-[240px]">
          <button
            className="flex gap-4 justify-center items-center self-stretch my-auto"
            aria-label="Make Post"
          >
            <span className="self-stretch my-auto">Make Post</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb16614a54f3f6da7a87bd1f50edf9cd347ab94cda2c3a46b731e543263950d3?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt=""
            />
          </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea21896b8b0c5b20cf25442e6f1bbb91c52c15d85d36e534f1a2db8125786ec6?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt="Notification icon"
          />
          <div
            className="flex shrink-0 self-stretch my-auto bg-red-400 rounded-full h-[42px] w-[42px]"
            role="img"
            aria-label="User profile"
          />
        </div>
      </nav>
    </header>
  );
}
