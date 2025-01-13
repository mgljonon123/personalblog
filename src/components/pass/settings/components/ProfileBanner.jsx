import * as React from "react";

export function ProfileBanner() {
  return (
    <section
      className="flex flex-col w-full max-md:max-w-full"
      role="region"
      aria-label="Profile banner"
    >
      <div className="flex flex-col w-full max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65c9cc695be0b087509e939829727182a720dc9f69677161ce208ad5631a1308?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          alt="Profile banner"
          className="object-contain w-full aspect-[10.2] max-md:max-w-full"
        />
        <div className="w-full border-2 border-solid border-gray-200 border-opacity-40 min-h-[2px] max-md:max-w-full" />
        <div className="w-full border-2 border-solid border-gray-200 border-opacity-40 min-h-[2px] max-md:max-w-full" />
      </div>
      <div className="flex flex-wrap gap-10 items-end px-20 w-full font-bold text-sky-950 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e17ffa039a2b108dc553333935764d2e653348db451a23cc1aede928f875e60?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          alt="Profile picture"
          className="object-contain shrink-0 aspect-square w-[180px]"
        />
        <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-end pb-10 basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] max-md:max-w-full">
            <h2 className="text-2xl">Your Name</h2>
            <p className="mt-2 text-xl leading-none max-md:max-w-full">
              Your account is ready, you can now apply for advice.
            </p>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94dd0a526a1fa0f2279590b6c911634354e9e3ff343b57e827b435d473d8c9bd?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 w-12 aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
