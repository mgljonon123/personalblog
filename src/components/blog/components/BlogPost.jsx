import * as React from "react";
import { useState, useEffect } from "react";
import { IconButton } from "./IconButton";
import { Avatar } from "./Avatar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SocialFeed from "../../Social/socialFeed/SocialFeed";

export function BlogPost() {
  const [post, setPost] = useState(null); // State to hold the post data
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d00f74e14ed5085dd5819deb5f5cd9592417f74c86b55887fa821fe117565c8c?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
      alt: "Share on social media",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/865b0808e740fdd2af050b54fb26b668aca8b3b5f147cdc211264790d0be3850?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
      alt: "Save to bookmarks",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/de009a373e11840ebd1ef85519ea398dce6bc1f6337e946a27fb71ab34bb0b7b?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
      alt: "More options",
    },
  ];

  // Fetch post data when the component mounts
  useEffect(() => {
    fetch("https://dummyjson.com/posts/2")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        console.log(data); // Set post data in state
      });
  }, []); // Empty dependency array to run only once

  if (!post) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
    <main className="flex overflow-hidden flex-col items-center pb-52 bg-white max-md:pb-24">
      <nav
        className="flex flex-col justify-center items-center self-stretch px-16 py-2 w-full text-black bg-zinc-300 max-md:px-5 max-md:max-w-full"
        role="navigation"
      >
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1780px] max-md:max-w-full">
          <div className="flex gap-9 items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
            <Link to="/SocialFeed" element={<SocialFeed></SocialFeed>}>
              {" "}
              <h1 className="self-stretch my-auto text-4xl font-bold">Home</h1>
            </Link>
            <div className="flex gap-3.5 items-center self-stretch my-auto text-xl">
              <IconButton
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4535910d6d22857438a99ff176426647fc880ba54be5653465e86ecaa4360b1?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                alt="Search"
              />
              <span>Search</span>
            </div>
          </div>
          <div className="flex gap-10 justify-center items-center self-stretch my-auto text-xl min-w-[240px]">
            <button
              className="flex gap-4 justify-center items-center self-stretch my-auto"
              aria-label="Create new post"
            >
              <span>Make Post</span>
              <IconButton
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ada30ca7f8b2fd76afabdb9342d9f5e3bfcd25a6b5edd24b300471ffd2e30709?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                alt=""
              />
            </button>
            <IconButton
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5968bc95d0aa547f6ed0d56c9d1bd9a35a0bf00ad8924d2f598c3880873ff607?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt="Notifications"
            />
            <Avatar className="bg-red-400 h-[42px] w-[42px]" />
          </div>
        </div>
      </nav>

      <article className="flex flex-col">
        <img
          src={post.imageUrl} // Dynamically set the image source from the fetched data
          className="flex shrink-0 mt-9 max-w-full bg-zinc-300 h-[342px] w-[606px] items-center"
          role="img"
          aria-label="Blog post featured image"
        />
        <h2 className="mt-9 text-4xl text-black">{post.title}</h2>{" "}
        {/* Dynamically set the title */}
        <div className="flex gap-5 justify-between mt-9 max-w-full w-[218px]">
          <Avatar className="bg-stone-700 h-[55px] w-[55px]" />
          <div className="flex flex-col items-start self-start">
            <span className="text-xs text-black font-[250]">Front end Dev</span>
            <div className="z-10 shrink-0 w-px h-3 border border-solid border-black border-opacity-60" />
            <div className="flex gap-3 self-stretch text-base whitespace-nowrap">
              <div className="flex text-black">
                <span className="grow">Suzulaab</span>
                <div className="shrink-0 self-start mt-6 h-px border border-black border-solid w-[81px]" />
              </div>
              <button
                className="text-green-500 font-[250]"
                aria-label="Follow user"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
        <time className="mt-5 text-sm font-light text-black">{post.date}</time>{" "}
        {/* Dynamically set the date */}
        <p className="mt-3.5 text-xl text-black font-[250] w-[400px]">
          {post.body} {/* Dynamically set the body/content */}
        </p>
        <div className="flex flex-wrap gap-5 justify-between mt-7 max-w-full w-[589px]">
          <div className="flex gap-2 text-base text-black whitespace-nowrap font-[250]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3d20a73ee6a9b76ba523f4c82cf9985d61951bc7be741e1c36578171e41e116?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt="Likes"
              className="object-contain shrink-0 self-start aspect-[0.94] w-[17px]"
            />
            <span>{post.reactions.likes}</span> {/* Dynamically set likes */}
          </div>
          <div className="flex gap-3 items-center my-auto">
            {socialIcons.map((icon, index) => (
              <IconButton key={index} src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
