import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signin1page from "../../../auth/signin1/signin1page";
export default function Header() {
  return (
    <header className="flex relative flex-wrap gap-5 justify-between self-stretch pr-14 w-full text-2xl font-semibold text-white bg-white max-md:pr-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e56832c213486bd75581957eca1a00b040d2cca88f684e05a2f9ccfcfcf4777?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
        alt="Blog logo"
        className="object-contain shrink-0 max-w-full aspect-[2.36] w-[264px]"
      />
      <nav className="flex flex-wrap gap-10 my-auto max-md:max-w-full">
        <div className="shrink-0 my-auto w-px border border-white border-solid h-[29px]" />
        <div className="flex gap-10">
          <button className="px-5 py-2.5 bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Log in
          </button>
          <Link to={"/signin1page"} element={<Signin1page></Signin1page>}>
            <button className="px-11 py-2.5 bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 max-md:px-5">
              Sign up
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
