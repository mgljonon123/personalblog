import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SocialFeed from "../../Social/socialFeed/SocialFeed";
import Post2 from "../../post/post2";
export function Header() {
  return (
    <header className="flex flex-col justify-center items-center px-16 py-1.5 w-full text-black bg-zinc-300 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1711px] max-md:max-w-full">
        <div className="flex gap-9 items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
          <Link to={"/SocialFeed"} element={<SocialFeed></SocialFeed>}>
            <h1 className="self-stretch my-auto text-4xl font-bold">Home</h1>
          </Link>
          <div className="flex gap-3.5 items-center self-stretch my-auto text-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/325c3a32314c8211dd9be9cf27f37610975bb99a7c8c5e2ca1083f89711c3749?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt="Search icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="self-stretch my-auto">Search</span>
          </div>
        </div>
        <nav className="flex gap-10 justify-center items-center self-stretch my-auto text-xl min-w-[240px]">
          <Link to={"/Post2"} element={<Post2></Post2>}>
            <button className="flex gap-4 justify-center items-center self-stretch my-auto">
              <span className="self-stretch my-auto">Make Post</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c84b5a4f9878d7a86a02b247dbf23b7b2915f7971453b8a673ffe1c8a6ce9c?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                alt="Make post icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </button>
          </Link>
          <Link to={"/Notification"} element={<Notification></Notification>}>
            {" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6c30262e7c71c00bb06acdf12f0cc5efa6d67c5e1803e15e803be6760d9292?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt="Notification icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </Link>
          <div
            className="flex shrink-0 self-stretch my-auto bg-red-400 rounded-full h-[42px] w-[42px]"
            role="img"
            aria-label="User profile picture"
          />
        </nav>
      </div>
    </header>
  );
}
