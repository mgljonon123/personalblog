import * as React from "react";

export default function SocialButton({ icon, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex overflow-hidden flex-col justify-center px-12 py-4 mt-6 w-full bg-white border border-solid border-zinc-800 max-w-[354px] rounded-[40px] max-md:px-5"
      tabIndex={0}
      aria-label={text}
    >
      <div className="flex gap-4 justify-center items-center">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="self-stretch my-auto">{text}</span>
      </div>
    </button>
  );
}
