import React, { useState, useEffect } from "react";
export function PostEngagement() {
  const [likes, setLikes] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/posts/2")
      .then((res) => res.json())
      .then((data) => {
        const likeCount = data.reactions.likes;
        setLikes(likeCount);
      });
  }, []);
  return (
    <div className="flex gap-10 items-start mt-8 ml-20 max-w-full w-[391px] max-md:ml-2.5">
      <div className="flex flex-1 gap-5 mt-1 text-base text-black whitespace-nowrap font-[250]">
        <button className="flex gap-2" aria-label="Like post">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12807615d42e209407a3d35ebeb0a0dee686da145f02ad46ee17893eda67dfdc?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-start aspect-[0.94] w-[17px]"
          />
          <h1>{likes !== null ? likes : "Loading..."}</h1>
        </button>
        <button aria-label="Share post">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6afb7df8ec5917fbd1f2588cf7fab7d5855b913de1889d04e26b32ffc705f3eb?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 aspect-[1.12] w-[27px]"
          />
        </button>
      </div>
      <div className="flex flex-1 gap-2.5 mt-[10px]">
        <div
          className="flex gap-3 items-center my-auto"
          role="group"
          aria-label="Post reactions"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a71054392f3cdd3ec3abe1ea28fa3aa2d252433f62d405f39956b473a33e2282?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt="Reaction 1"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bea2b3773d807bcb81ae2be7a5f40b2e0bd5aeb754e7e929b9ef4eabd94c1d7b?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt="Reaction 2"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/176a6c38d5892a20e5b5d10e12da68eff9c33c497e965132ed7a4055ef971723?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt="Reaction 3"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
