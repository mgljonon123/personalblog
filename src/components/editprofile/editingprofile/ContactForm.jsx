import * as React from "react";
import { useState } from "react";

export function ContactForm() {
  const [user, setUser] = useState({
    location: "Mongolia",
    address: "Mongolia, Ulaanbaatar",
    email: "jonton@gmail.com",
    dob: "05.13.2006",
    gender: "Male",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  return (
    <form className="flex flex-col mt-1.5 text-base max-md:mt-10 max-md:max-w-full">
      <div className="self-end font-bold text-right text-zinc-400">
        last update June 1
      </div>
      <h2 className="self-start mt-11 font-bold leading-none text-zinc-400 max-md:mt-10">
        Contact
      </h2>

      <div className="flex flex-col mt-6 w-full leading-none max-md:max-w-full">
        <label
          htmlFor="email"
          className="w-full font-bold whitespace-nowrap text-sky-950"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Value"
          className="overflow-hidden px-3 mt-1 w-full bg-white rounded-lg border-gray-300 border-solid border-[3px] min-h-[44px] text-zinc-400"
        />
      </div>

      <div className="flex flex-col mt-6 w-full leading-none max-md:max-w-full">
        <label htmlFor="phone" className="w-full font-bold text-sky-950">
          Phone Number
        </label>
        <div className="flex flex-wrap gap-2 items-start mt-1 w-full whitespace-nowrap">
          <input
            type="text"
            value="+976"
            readOnly
            className="overflow-hidden px-3 bg-white rounded-lg border-gray-300 border-solid border-[3px] min-h-[44px] text-sky-950 w-[76px]"
          />
          <input
            type="Number"
            id="phone"
            value={user.phone}
            className=" flex-1 px-3 bg-white rounded-lg border-gray-300 border-solid border-[3px] min-h-[44px] min-w-[240px] text-zinc-400"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col mt-6 w-full leading-none whitespace-nowrap max-md:max-w-full">
        <label htmlFor="country" className="w-full font-bold text-sky-950">
          Country
        </label>
        <select
          id="country"
          className="flex overflow-hidden px-3 mt-1 w-full bg-white rounded-lg border-gray-300 border-solid border-[3px] min-h-[44px] text-zinc-400"
        >
          <option value="">Select</option>
          <option>mongolia pizda mn</option>
        </select>
      </div>

      <div className="flex flex-col mt-6 w-full leading-none whitespace-nowrap max-md:max-w-full">
        <label htmlFor="city" className="w-full font-bold text-sky-950">
          City
        </label>
        <select
          id="city"
          className="flex overflow-hidden px-3 mt-1 w-full bg-white rounded-lg border-gray-300 border-solid border-[3px] min-h-[44px] text-zinc-400"
          defaultValue="software"
        >
          <option value="software">software</option>
        </select>
      </div>
    </form>
  );
}
