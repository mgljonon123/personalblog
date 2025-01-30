// // import React from "react";

// // export function InterestTag({ name, selected }) {
// //   return (
// //     <div className="flex gap-2.5 justify-center items-center">
// //       <div className="self-stretch my-auto">{name}</div>
// //       {!selected && (
// //         <button
// //           onClick={() => {
// //             selected = true;
// //           }}
// //         >
// //           <img
// //             loading="lazy"
// //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/1948ce07743e5900b95703231c8df790d17158244c5c2e2072636c2d760bc956?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
// //             alt=""
// //             className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
// //           />
// //         </button>
// //       )}
// //     </div>
// //   );
// // }

// import React from "react";

// export function InterestTag({ name, selected, onClick }) {
//   return (
//     <div className="flex gap-2.5 justify-center items-center">
//       <div className="self-stretch my-auto">{name}</div>
//       {!selected ? (
//         <button
//           onClick={onClick} // Call the onClick handler here
//         >
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/1948ce07743e5900b95703231c8df790d17158244c5c2e2072636c2d760bc956?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
//             alt=""
//             className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//           />
//         </button>
//       ) : (
//         <span className="text-blue-500">Selected</span>
//       )}
//     </div>
//   );
// }

import React from "react";

export function InterestTag({ name, selected, onClick }) {
  return (
    <div className="flex gap-2.5 justify-center items-center">
      <div
        className={`self-stretch my-auto ${selected ? "text-green-500" : ""}`} // Apply green text if selected
      >
        {name}
      </div>
      <button onClick={onClick}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1948ce07743e5900b95703231c8df790d17158244c5c2e2072636c2d760bc956?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </button>
    </div>
  );
}
