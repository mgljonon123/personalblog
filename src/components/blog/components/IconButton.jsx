import * as React from "react";

export function IconButton({ src, alt, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain shrink-0 self-stretch my-auto w-6 aspect-square ${className}`}
    />
  );
}
