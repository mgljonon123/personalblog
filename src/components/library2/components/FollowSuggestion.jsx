import * as React from "react";

export function FollowSuggestion({ name, description }) {
  return (
    <div className="flex gap-6 items-start mt-6 max-md:ml-2">
      <div
        className="flex shrink-0 mt-1.5 rounded-full bg-zinc-800 h-[55px] w-[55px]"
        role="img"
        aria-label={`${name}'s avatar`}
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <div className="self-start text-base font-semibold">{name}</div>
        <div className="flex gap-1 mt-3 text-sm font-[300]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5384bbbf43da809c2bce8d58d7d81994599cf75b040d0bf6c7a75426d8a5042?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-start  w-6 aspect-square"
          />
          <div className="w-[317px] mt-[6px]">{description}</div>
        </div>
      </div>
    </div>
  );
}
