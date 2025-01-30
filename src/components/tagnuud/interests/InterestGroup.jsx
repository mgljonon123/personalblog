// // import React from "react";
// // import { InterestTag } from "./InterestTag";

// // export function InterestGroup({ interests }) {
// //   return (
// //     <div className="flex flex-wrap gap-5 justify-between mt-7 max-w-full w-[520px]">
// //       {interests.map((interest, index) => (
// //         <InterestTag key={index} name={interest} selected={false} />
// //       ))}
// //     </div>
// //   );
// // }

// import React from "react";
// import { InterestTag } from "./InterestTag";

// export function InterestGroup({ interests, onClick }) {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 mt-4">
//       {interests.map((interest) => (
//         <InterestTag
//           key={interest}
//           name={interest}
//           selected={false} // Initially set as false for now
//           onClick={() => onClick(interest)} // Pass down the onClick handler
//         />
//       ))}
//     </div>
//   );
// }

import React from "react";
import { InterestTag } from "./InterestTag";

export function InterestGroup({ interests, onClick }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {interests.map((interest) => (
        <InterestTag
          key={interest}
          name={interest}
          selected={interests.some((i) => i.name === interest && i.selected)} // Check if the interest is selected
          onClick={() => onClick(interest)} // Call onClick when the tag is clicked
        />
      ))}
    </div>
  );
}
