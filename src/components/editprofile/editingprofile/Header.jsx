import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SocialFeed from "../../Social/socialFeed/SocialFeed";
import Post2 from "../../post/post2";
import SidebarNavigation from "../../../SidebarNavigation";
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
            {" "}
            <h1 className="self-stretch my-auto text-4xl font-bold">Home</h1>
          </Link>
          <button
            className="flex gap-3.5 items-center self-stretch my-auto text-xl"
            aria-label="Search"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69705202b50ea7b122d7d0f2653637cba5930d5ac6a5b71ef97371cdd18344e4?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt=""
            />
            <span className="self-stretch my-auto">Search</span>
          </button>
        </div>
        <div className="flex gap-10 justify-center items-center self-stretch my-auto text-xl min-w-[240px]">
          <Link to={"/Post2"} element={<Post2></Post2>}>
            <button
              className="flex gap-4 justify-center items-center self-stretch my-auto"
              aria-label="Make Post"
            >
              <span className="self-stretch my-auto">Make Post</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7763724c4ab882c6a41ee15f4d9e7a5dcb74590beaefffceb2b324accce29a80?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt=""
              />
            </button>
          </Link>
          <Link to="/Notification" element={<Notification></Notification>}>
            {" "}
            <button aria-label="Notifications">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab20de14f8fbd7591fcbcf1cdebd67baf2af3b4ac45ea4b1e7e6ffc768c07d02?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt=""
              />
            </button>
          </Link>

          <div>
            <SidebarNavigation />
          </div>
        </div>
      </nav>
    </header>
  );
}
