import * as React from "react";

export default function LanguageSelector() {
  return (
    <button
      className="flex gap-0.5 justify-center items-center self-center pl-2 mt-4"
      aria-label="Select language"
      tabIndex={0}
    >
      <span className="self-stretch my-auto">English (United States)</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e44be1df10a8aaba80655d708e4852960a0720463927276d7644a60d1b49a9e?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    </button>
  );
}
