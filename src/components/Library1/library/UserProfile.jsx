import * as React from "react";

export function UserProfile() {
  return (
    <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-base font-medium leading-5 text-neutral-800 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b407e4153f0fbde38c73a7e1a1f38ebb3acd460376b097dd57fa3371579137ea?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          alt="Liam Ford profile picture"
          className="object-contain shadow-sm aspect-[1.07] w-[111px]"
        />
        <div className="self-center mt-5">Liam Ford</div>
      </div>
    </div>
  );
}
