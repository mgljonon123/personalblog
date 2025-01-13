import * as React from "react";

export function SuggestedUser() {
  return (
    <div className="flex flex-wrap gap-6 items-start max-w-full w-[532px]">
      <div
        className="flex shrink-0 mt-1.5 rounded-full bg-zinc-800 h-[55px] w-[55px]"
        role="img"
        aria-label="Profile picture"
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="self-start text-base font-semibold">Jonon Tuguldur</div>
        <div className="flex gap-5 justify-between items-start w-full max-md:max-w-full">
          <div className="flex gap-1 mt-3 text-sm font-[275]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc81901f5f3488348e70c30e67e4e4de75f7f0d70e086194f87545153bff1cf3?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt=""
              className="object-contain shrink-0 self-start mt-1.5 w-6 aspect-square"
            />
            <p className="w-[317px]">
              HI i am Jonon Tuguldur crafting code <br /> and stories ...
            </p>
          </div>
          <button className="px-3.5 py-2 text-xs rounded-3xl border border-black border-solid bg-zinc-300">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
