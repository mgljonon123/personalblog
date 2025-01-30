import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PrivacySettings from "../privacy/PrivacySettings";
import SettingsPage from "../../pass/settings/SettingsPage";
export function ProfileSidebar() {
  const menuItems = [
    { label: "Privacy", active: false },
    { label: "Password & Security", active: false },
  ];

  return (
    <aside
      className="flex flex-col self-start text-base font-bold leading-none"
      role="complementary"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e17ffa039a2b108dc553333935764d2e653348db451a23cc1aede928f875e60?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
        className="object-contain aspect-square w-[188px]"
        alt="Profile"
      />
      <button className="overflow-hidden p-3 mt-12 max-w-full bg-emerald-50 rounded-lg text-sky-950 w-[185px] max-md:pr-5 max-md:mt-10 max-md:mr-2">
        Edit Profile
      </button>
      <Link
        to={"/PrivacySettings"}
        element={<PrivacySettings></PrivacySettings>}
      >
        {" "}
        <button className="overflow-hidden p-3 mt-12 max-w-full  rounded-lg text-sky-950 w-[185px] max-md:pr-5 max-md:mt-10 max-md:mr-2">
          Privacy
        </button>
      </Link>
      <Link to={"/SettingsPage"} element={<SettingsPage></SettingsPage>}>
        <button className="overflow-hidden p-3 mt-12 max-w-full  rounded-lg text-sky-950 w-[185px] max-md:pr-5 max-md:mt-10 max-md:mr-2">
          Password Change
        </button>
      </Link>
      <nav
        className="flex flex-col pr-7 pl-3 mt-9 bg-black text-zinc-400 max-md:pr-5"
        role="navigation"
        aria-label="Profile menu"
      >
        {/* {menuItems.map((item, index) => (
          <Link
            to={"/PrivacySettings"}
            element={<PrivacySettings></PrivacySettings>}
          >
            <button
              key={index}
              className={`self-start ${index > 0 ? "mt-12 max-md:mt-10" : ""} ${
                item.active ? "text-sky-950" : ""
              }`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.label}
            </button>
          </Link>
        ))} */}
      </nav>
    </aside>
  );
}
