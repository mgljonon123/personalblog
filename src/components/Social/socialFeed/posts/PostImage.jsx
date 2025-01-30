import * as React from "react";

export function PostImage() {
  return (
    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6591b14302401356c3050ecf6f724d0e85eca02fe9b0b0f4eba402a7f4c17916?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
        alt="Post related image"
        className="object-contain grow shrink-0 mt-3 max-w-full aspect-[1.67] w-[195px] max-md:mt-10"
      />
    </div>
  );
}
