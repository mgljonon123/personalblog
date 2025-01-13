import * as React from "react";

export function ProfileForm() {
  return (
    <form className="flex flex-col w-full text-base max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-2xl font-bold text-zinc-400">
        Edit Profile
      </h2>
      <div className="self-start mt-10 font-bold leading-none text-zinc-400">
        Personal
      </div>

      <div className="flex flex-wrap gap-3 mt-6 leading-none text-sky-950">
        <div className="flex flex-col flex-1 grow shrink-0 basis-0 min-h-[68px] w-fit">
          <label htmlFor="firstName" className="w-full font-bold">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value="Tuguldur"
            className="overflow-hidden px-3 mt-1 w-full whitespace-nowrap bg-white rounded-lg border-gray-300 border-solid border-[3px] min-h-[44px]"
          />
        </div>
        <div className="flex flex-col flex-1 grow shrink-0 whitespace-nowrap basis-0 min-h-[68px] w-fit">
          <label htmlFor="surname" className="w-full font-bold">
            Surname
          </label>
          <input
            type="text"
            id="surname"
            value="Batkhuyag"
            className="flex overflow-hidden px-3 mt-1 w-full bg-white rounded-lg border border-black border-solid shadow min-h-[44px]"
          />
        </div>
      </div>

      <div className="flex flex-col mt-6 w-full leading-none min-h-[150px] max-md:max-w-full">
        <label htmlFor="aboutMe" className="w-full font-bold text-sky-950">
          About me
        </label>
        <textarea
          id="aboutMe"
          placeholder="Enter About Yourself"
          className="overflow-hidden flex-1 px-3 mt-1 bg-white rounded-lg border-gray-300 border-solid border-[3px] size-full text-zinc-400"
        />
      </div>

      <div className="flex flex-col mt-9 w-full leading-none max-md:max-w-full">
        <label htmlFor="dob" className="w-full font-bold text-sky-950">
          Date of birth
        </label>
        <input
          type="date"
          id="dob"
          className="flex overflow-hidden px-3 mt-1 w-full bg-white rounded-lg border-gray-300 border-solid border-[3px] min-h-[44px] text-zinc-400"
        />
      </div>

      <div className="flex flex-col mt-6 w-full leading-none max-md:max-w-full">
        <label htmlFor="education" className="w-full font-bold text-sky-950">
          Education level
        </label>
        <select
          id="education"
          className="flex overflow-hidden px-3 mt-1 w-full bg-white rounded-lg border-gray-300 border-solid border-[3px] min-h-[44px] text-zinc-400"
          defaultValue="software"
        >
          <option value="software">software</option>
        </select>
      </div>

      <button
        type="submit"
        className="overflow-hidden px-12 py-3 mt-10 w-32 max-w-full font-bold leading-none text-center text-white whitespace-nowrap bg-indigo-900 rounded-lg border border-purple-50 border-solid"
      >
        Save
      </button>
    </form>
  );
}
