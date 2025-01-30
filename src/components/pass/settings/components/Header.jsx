import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SocialFeed from "../../../Social/socialFeed/SocialFeed";
import Post2 from "../../../post/post2";
import SidebarNavigation from "../../../../SidebarNavigation";
export function Header() {
  return (
    <header
      className="flex flex-col justify-center px-16 py-1.5 w-full text-black bg-zinc-300 max-md:px-5 max-md:max-w-full"
      role="banner"
    >
      <nav
        className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1711px] max-md:max-w-full"
        role="navigation"
      >
        <div className="flex gap-9 items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
          <Link to={"/SocialFeed"} element={<SocialFeed></SocialFeed>}>
            <h1 className="self-stretch my-auto text-4xl font-bold">Home</h1>
          </Link>
          <div className="flex gap-3.5 items-center self-stretch my-auto text-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6df129491d0807ef8c4959b6738a18a2394389b7fb1ba068e98f3346f296e3e5?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <button className="self-stretch my-auto">Search</button>
          </div>
        </div>
        <div className="flex gap-10 justify-center items-center self-stretch my-auto text-xl min-w-[240px]">
          <Link to={"/Post2"} element={<Post2></Post2>}>
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
          </Link>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d0d8252819ff136be5519b1d588d582e89a81b0f551ec4288c6f1243401e841?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square "
          />
          <div>
            <SidebarNavigation></SidebarNavigation>
          </div>
        </div>
      </nav>
    </header>
  );
}
