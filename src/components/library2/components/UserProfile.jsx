import * as React from "react";

export function UserProfile() {
  return (
    <section className="flex flex-col mt-2 relative left-[20px] text-base font-medium leading-5 text-neutral-800 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/692648eae15b3f135837b764771f18cf2d40630907d9e97afffde8204eec2d7e?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
        alt="Liam Ford profile"
        className="object-contain shadow-sm aspect-square w-[110px]"
      />
      <div className="self-center mt-3">Liam Ford</div>
    </section>
  );
}
