import * as React from "react";

export function SuggestedUser({ name, description, icon }) {
  return (
    <div className="flex flex-wrap gap-6 items-start max-w-full w-[532px]">
      <div
        className="flex shrink-0 mt-1.5 rounded-full bg-zinc-800 h-[55px] w-[55px]"
        role="img"
        aria-label={`${name}'s profile picture`}
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="self-start text-base font-semibold">{name}</div>
        <div className="flex gap-5 justify-between items-start w-full max-md:max-w-full">
          <div className="flex gap-1 mt-3 text-sm font-[275]">
            <img
              loading="lazy"
              src={icon}
              className="object-contain shrink-0 self-start mt-1.5 w-6 aspect-square"
              alt=""
            />
            <div className="w-[317px]">{description}</div>
          </div>
          <button className="flex flex-col text-xs whitespace-nowrap">
            <div className="px-3.5 py-2 rounded-3xl border border-black border-solid bg-zinc-300">
              Follow
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
