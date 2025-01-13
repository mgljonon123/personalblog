import React from "react";

export function SelectedInterests({ selectedInterests }) {
  return (
    <div className="flex flex-wrap gap-3 self-stretch mt-8 w-full text-3xl max-md:max-w-full">
      <div className="grow">Selected:</div>
      <div className="flex flex-wrap flex-auto gap-4 items-center max-md:max-w-full">
        {selectedInterests.map((interest, index) => (
          <div key={index} className="gap-2.5 self-stretch my-auto">
            {interest.name}
          </div>
        ))}
      </div>
    </div>
  );
}
