import React from "react";

// export function NavigationTabs({ activeFilter, onFilterChange }) {
//   return (
//     <nav
//       className="flex gap-5 items-start ml-6 max-w-full text-base text-black w-[331px] max-md:ml-2.5"
//       role="navigation"
//       aria-label="Content filters"
//     >
//       <div className="flex flex-auto gap-5 items-start">
//         <button
//           className={`flex flex-col whitespace-nowrap w-[113px] ${
//             activeFilter === "Daily" ? "border-b border-black" : ""
//           }`}
//           onClick={() => onFilterChange("Daily")}
//         >
//           <span>Daily</span>
//         </button>
//         <button
//           className={`flex flex-col whitespace-nowrap w-[75px] ${
//             activeFilter === "My posts" ? "border-b border-black" : ""
//           }`}
//           onClick={() => onFilterChange("My posts")}
//         >
//           My posts
//         </button>
//       </div>
//     </nav>
//   );
// }

export function NavigationTabs() {
  return (
    <nav
      className="flex gap-5 items-start ml-6 max-w-full text-base text-black w-[331px] max-md:ml-2.5"
      role="navigation"
      aria-label="Content filters"
    >
      <div className="flex flex-auto gap-5 items-start">
        <button
          className="flex flex-col whitespace-nowrap rounded-none w-[113px]"
          aria-current="page"
        >
          <span>Daily</span>
          <div className="shrink-0 mt-1.5 h-px border border-black border-solid" />
        </button>
        <button className="whitespace-nowrap rounded-none w-[75px]">
          My posts
        </button>
      </div>
      <button aria-label="Filter options">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/700c31c079beb320d49a2c4e0ad3c908cf0d2270a2b236f8199f61224e398863?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </button>
    </nav>
  );
}
