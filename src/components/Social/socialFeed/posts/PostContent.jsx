import React, { useState, useEffect } from "react";

export function PostContent() {
  const [title, setTitle] = useState(""); // State to store the post title
  const [tags, setTags] = useState([]); // State to store the post tags as an array

  useEffect(() => {
    fetch("https://dummyjson.com/posts/2")
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.body); // Set the body content as the title
        setTags(data.tags); // Set the tags array to the state
      });
  }, []); // Empty dependency array to run only once, on component mount

  return (
    <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
      <div className="text-xs">Front end Dev</div>
      <div className="z-10 shrink-0 w-px h-3 border border-solid border-black border-opacity-60" />
      <div className="flex whitespace-nowrap">
        <div className="grow">Suzulaab</div>
        <div className="shrink-0 self-start mt-6 w-full h-px border border-black border-solid" />
      </div>
      {/* Render the title dynamically */}
      <p className="self-stretch mt-3">{title}</p>

      {/* Dynamically render the tags */}
      <div className="flex gap-[20px] mt-2">
        {tags.map((tag, index) => (
          <div key={index} className="mt-[10px]">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
