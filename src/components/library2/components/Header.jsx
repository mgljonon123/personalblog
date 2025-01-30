import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SocialFeed from "../../Social/socialFeed/SocialFeed";
import Post2 from "../../post/post2";
import SidebarNavigation from "../../../SidebarNavigation";
export function Header() {
  return (
    <header
      className="flex flex-col justify-center items-center px-16 py-1.5 w-full text-black bg-zinc-300 max-md:px-5 max-md:max-w-full"
      role="banner"
    >
      <nav
        className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1711px] max-md:max-w-full"
        role="navigation"
      >
        <div className="flex gap-9 items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
          <Link to={"/Socialfeed"} element={<SocialFeed></SocialFeed>}>
            <h1 className="self-stretch my-auto text-4xl font-bold">Home</h1>
          </Link>

          <div className="flex gap-3.5 items-center self-stretch my-auto text-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ee4d46d40137a09c8a9fac8413bf18ff7b134bad01af9b947d284835f8c899e?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <button className="self-stretch my-auto" aria-label="Search">
              Search
            </button>
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc8230c78549fa74cad91a7890df74bdfca53509d42897220958fbc4a35a6f1f?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </button>
          </Link>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab20de14f8fbd7591fcbcf1cdebd67baf2af3b4ac45ea4b1e7e6ffc768c07d02?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div>
            <SidebarNavigation></SidebarNavigation>
          </div>
        </div>
      </nav>
    </header>
  );
}
