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
          className="flex flex-col whitespace-nowrap rounded-none "
          aria-current="page"
        >
          <span>Daily</span>
        </button>
        <button className="whitespace-nowrap rounded-none w-[75px]">
          My posts
        </button>
      </div>
      <button aria-label="Filter options"></button>
    </nav>
  );
}
