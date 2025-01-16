import React from "react";

export function InterestTag({ name, selected }) {
  return (
    <div className="flex gap-2.5 justify-center items-center">
      <div className="self-stretch my-auto">{name}</div>
      {!selected && (
        <button
          onClick={() => {
            selected = true;
          }}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1948ce07743e5900b95703231c8df790d17158244c5c2e2072636c2d760bc956?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      )}
    </div>
  );
}
