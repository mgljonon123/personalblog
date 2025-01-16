import * as React from "react";

export function SocialMetrics() {
  return (
    <div className="flex gap-5 justify-between mt-10 ml-20 max-w-full w-[391px] max-md:ml-2.5">
      <div className="flex gap-2.5 text-base text-black whitespace-nowrap font-[250]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44f6eaacd21aead822ba5c25c6543e9001da11858637001efb21caf1e063d69c?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          alt=""
          className="object-contain shrink-0 self-start aspect-[0.94] w-[17px]"
        />
        <div>1.5k</div>
      </div>
      <div className="flex gap-3 items-center self-start">
        <button aria-label="Share" className="focus:outline-none">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c23b2083216b0b79191d35bf464e667cd1df3f8e3cb467668595574519efe0b?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </button>
        <button aria-label="Save" className="focus:outline-none">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5723c662e872cf537972ff268eac583b6d762739609066a4b322b709f6adfb8?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </button>
        <button aria-label="More options" className="focus:outline-none">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8b3e471380a49e0bfbefd99e281024d4e4d7db4480e2a9d5fac1fe2aa3e3eb?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </button>
      </div>
    </div>
  );
}
