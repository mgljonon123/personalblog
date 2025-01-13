import React from "react";
import { InterestTag } from "./InterestTag";

export function InterestGroup({ interests }) {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-7 max-w-full w-[520px]">
      {interests.map((interest, index) => (
        <InterestTag key={index} name={interest} selected={false} />
      ))}
    </div>
  );
}
