import React from "react";

export default function PrivacyCard({ title, imageUrl }) {
  return (
    <div className="flex flex-col grow pb-7 w-full text-base font-bold leading-5 bg-emerald-50 rounded-xl text-zinc-400 max-md:mt-10">
      <div className="flex shrink-0 rounded-xl bg-zinc-300 h-[94px]">
        <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className="box-border object-cover overflow-hidden shrink-0 mt-5 w-full aspect-[1.42] min-h-[20px] min-w-[20px]"
        />
      </div>
      <div className="mt-3">{title}</div>
    </div>
  );
}
