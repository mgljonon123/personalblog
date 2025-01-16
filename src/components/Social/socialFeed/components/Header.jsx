import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SidebarNavigation from "../../../../SidebarNavigation";
import Post2 from "../../../post/post2";

export function Header() {
  return (
    <header
      className="flex flex-col justify-center items-center px-16 py-2 w-full text-black bg-zinc-300 max-md:px-5 max-md:max-w-full"
      role="banner"
    >
      <nav
        className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1780px] max-md:max-w-full"
        role="navigation"
      >
        <div className="flex gap-9 items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
          <h1 className="self-stretch my-auto text-4xl font-bold">Home</h1>
          <div className="flex gap-3.5 items-center self-stretch my-auto text-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4535910d6d22857438a99ff176426647fc880ba54be5653465e86ecaa4360b1?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt="Search icon"
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
              aria-label="Create new post"
            >
              <span>Make Post</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ada30ca7f8b2fd76afabdb9342d9f5e3bfcd25a6b5edd24b300471ffd2e30709?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </button>
          </Link>

          <Link to={"/Notification"} element={<Notification></Notification>}>
            <button aria-label="Notifications">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5968bc95d0aa547f6ed0d56c9d1bd9a35a0bf00ad8924d2f598c3880873ff607?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                alt="Notifications icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
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
