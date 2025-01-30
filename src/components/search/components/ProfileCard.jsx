import * as React from "react";

export function ProfileCard({
  name,
  description,
  followers,
  showFollowButton = true,
}) {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
        <div className="grow max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl text-black whitespace-nowrap max-md:mt-9">
                <div>People</div>
                <div
                  className="flex shrink-0 mt-12 bg-black rounded-full h-[72px] w-[72px] max-md:mt-10 max-md:mr-1.5"
                  role="img"
                  aria-label={`${name}'s profile picture`}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-16 w-full text-black max-md:mt-10">
                <div className="flex gap-10 max-w-full w-[276px]">
                  <div className="text-sm">{name}</div>
                  <div className="flex flex-1 gap-5 self-start text-xs whitespace-nowrap">
                    <div>{followers}</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9c2a58847d5c9297b6aeba56b0b6af8b7b9ed4604232cd9d3619f921d8a8d32?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                      className="object-contain shrink-0 aspect-[1.06] w-[19px]"
                      alt="Followers icon"
                    />
                  </div>
                </div>
                <div className="mt-5 text-xs font-light">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFollowButton && (
        <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
          <button className="flex flex-col mt-20 text-xs text-black whitespace-nowrap max-md:mt-10">
            <div className="px-5 pt-1.5 pb-3 rounded-3xl border border-black border-solid bg-zinc-300 max-md:pr-5">
              Follow
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
