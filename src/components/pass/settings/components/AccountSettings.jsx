import * as React from "react";

export function AccountSettings() {
  const accountFields = [
    { label: "ID", value: "Broken alcoholics ID 750533" },
    { label: "Password", value: "Change Password" },
    { label: "E-Mail", value: "No email Change Email" },
    { label: "Phone", value: "number / 96750533 Change phone number" },
  ];

  return (
    <section
      className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full"
      role="region"
      aria-label="Account settings"
    >
      <div className="flex flex-col items-start max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1144px]">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full font-bold text-zinc-400 max-md:max-w-full">
            <h2 className="self-stretch my-auto text-2xl">Account settings</h2>
            <div className="self-stretch my-auto text-base text-right">
              last update June 1
            </div>
          </div>
          <div className="flex gap-10 items-start mt-10 w-full text-base leading-none max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
              <h3 className="font-bold text-zinc-400">My account</h3>
              <div className="flex flex-col mt-6 w-full min-h-[320px] text-sky-950 max-md:max-w-full">
                {accountFields.map((field, index) => (
                  <div
                    key={index}
                    className="flex flex-col mt-6 w-full max-md:max-w-full"
                  >
                    <div className="overflow-hidden gap-2.5 self-stretch px-3 w-full bg-white rounded-lg border-gray-300 border-solid border-[3px] min-h-[44px] max-md:max-w-full">
                      {field.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button className="flex overflow-hidden flex-col justify-center px-12 py-3 mt-10 w-32 max-w-full text-base font-bold leading-none text-center text-white whitespace-nowrap bg-indigo-900 rounded-lg border border-purple-50 border-solid max-md:px-5">
          Save
        </button>
      </div>
    </section>
  );
}
