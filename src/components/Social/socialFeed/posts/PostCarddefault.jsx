import { UserAvatar } from "./UserAvatar";
import { PostContent } from "./PostContent";
import { PostImage } from "./PostImage";
import { PostEngagement } from "./PostEngagement";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export function PostCarddefault() {
  fetch("https://dummyjson.com/posts/2")
    .then((res) => res.json())
    .then((data) => {
      // You can now use the 'data' object here
      console.log(data); // Log the data
      // Example: Accessing a specific property of the post
      const postTitle = data.title;
      console.log(`Post title: ${postTitle}`);
    });
  return (
    <article className="flex flex-col max-w-[733px]">
      <div className="z-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap gap-5 text-base text-black font-[250] max-md:mt-10">
              <UserAvatar />
              <PostContent />
            </div>
          </div>
          <PostImage />
        </div>
      </div>
      <PostEngagement />
    </article>
  );
}
