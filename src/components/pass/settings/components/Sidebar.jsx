import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProfilePage from "../../../../pages/ProfilePage";
import PrivacySettings from "../../../editprofile/privacy/PrivacySettings";
export function Sidebar() {
  const menuItems = [
    { label: "Edit Profile", active: false },
    { label: "Privacy", active: false },
    { label: "Password & Security", active: true },
  ];

  return (
    <nav
      className="flex gap-8 text-base font-bold leading-none text-zinc-400 w-[217px]"
      role="navigation"
      aria-label="Settings navigation"
    >
      <div className="flex flex-col self-start mt-9 min-h-[251px]">
        {/* {menuItems.map((item, index) => (
          <button
            key={index}
            className={`overflow-hidden p-3 mt-6 max-w-full rounded-lg w-[185px] ${
              item.active ? "bg-emerald-50 text-sky-950" : ""
            }`}
            aria-current={item.active ? "page" : undefined}
          >
            {item.label}
          </button>
        ))} */}
        <Link to={"/ProfilePage"} element={<ProfilePage></ProfilePage>}>
          {" "}
          <button className="overflow-hidden p-3 mt-12 max-w-full  rounded-lg text-sky-950 w-[185px] max-md:pr-5 max-md:mt-10 max-md:mr-2">
            Edit Profile
          </button>
        </Link>
        <Link
          to={"/PrivacySettings"}
          element={<PrivacySettings></PrivacySettings>}
        >
          {" "}
          <button className="overflow-hidden p-3 mt-12 max-w-full  rounded-lg text-sky-950 w-[185px] max-md:pr-5 max-md:mt-10 max-md:mr-2">
            Privacy
          </button>
        </Link>{" "}
        <button className="overflow-hidden p-3 mt-12 max-w-full bg-emerald-50 rounded-lg text-sky-950 w-[185px] max-md:pr-5 max-md:mt-10 max-md:mr-2">
          Change Password
        </button>
        <div className="flex mt-6 max-w-full rounded-lg min-h-[44px] w-[185px]" />
      </div>
      <div className="shrink-0 w-0.5 border-2 border-solid border-gray-200 border-opacity-40 h-[461px]" />
    </nav>
  );
}
