import * as React from "react";

export function PostCard({ author, content, likes, image }) {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
        <article className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-3.5 items-start text-black">
            <div className="flex flex-col self-start text-2xl whitespace-nowrap">
              <h2>Posts</h2>
              <div
                className="flex shrink-0 mt-12 w-14 rounded-full bg-stone-700 h-[50px] max-md:mt-10"
                role="img"
                aria-label={`${author}'s avatar`}
              />
            </div>
            <div className="flex flex-col grow shrink-0 items-start self-end mt-20 text-base basis-0 font-[250] w-fit max-md:mt-10">
              <div className="text-xs">{author}</div>
              <div className="z-10 shrink-0 w-px h-3 border border-solid border-black border-opacity-60" />
              <p className="self-stretch mt-3">{content}</p>
            </div>
          </div>
          <div className="flex gap-5 justify-between self-end mt-11 mr-6 max-w-full w-[391px] max-md:mt-10 max-md:mr-2.5">
            <div className="flex gap-2 text-base text-black whitespace-nowrap font-[250]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/014032b2c868aad9f237b8b76bf271f63c5f6a522559fe32e48bcb4027d7a64e?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                className="object-contain shrink-0 self-start aspect-[0.94] w-[17px]"
                alt="Like icon"
              />
              <span>{likes}</span>
            </div>
            <div className="flex gap-3 items-center self-start">
              <button aria-label="Share">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/81b2e0f484008d79fbd5ef5899c8aa71e9e19527bafd4a5accebdb394a53a971?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt=""
                />
              </button>
              <button aria-label="Comment">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca6440840fc3991d4805eafae34a51464d4c866d04dca5e34c559e12260de677?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt=""
                />
              </button>
              <button aria-label="Save">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f42d4b7129362711f78e4013cf4995dcc76eb8fb0ff3db47fd04b9b273c782ba?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt=""
                />
              </button>
            </div>
          </div>
        </article>
      </div>
      {image && (
        <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[1.67] w-[195px] max-md:mt-10"
            alt="Post attachment"
          />
        </div>
      )}
    </div>
  );
}
