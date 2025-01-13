import React from "react";
import NavigationBar from "./components/NavigationBar";
import PrivacyCard from "./components/PrivacyCard";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProfilePage from "../../../pages/ProfilePage";
import SettingsPage from "../../pass/settings/SettingsPage";

const privacyCards = [
  {
    title: "How can people find you on Facebook?",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
  },
  {
    title: "Who can see the things you've shared?",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
  },
  {
    title: "How to keep your account secure?",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
  },
  {
    title: "Your data settings on Facebook",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
  },
];

export default function PrivacySettings() {
  return (
    <main className="flex overflow-hidden flex-col pb-11 bg-white">
      <NavigationBar />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/65c9cc695be0b087509e939829727182a720dc9f69677161ce208ad5631a1308?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
        alt="Privacy banner"
        className="object-contain -mt-1.5 w-full aspect-[10.2] max-md:max-w-full"
      />
      <section className="flex z-10 flex-col items-start px-16 mt-0 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 self-stretch w-full font-bold text-sky-950 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e17ffa039a2b108dc553333935764d2e653348db451a23cc1aede928f875e60?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt="Profile"
            className="object-contain shrink-0 max-w-full aspect-square w-[188px]"
          />
          <div className="flex flex-wrap flex-auto gap-10 justify-between items-end self-end pb-10 mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col min-w-[240px] max-md:max-w-full">
              <h2 className="text-2xl">Your Name</h2>
              <p className="mt-2 text-xl leading-none max-md:max-w-full">
                Your account is ready, you can now apply for advice.
              </p>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/94dd0a526a1fa0f2279590b6c911634354e9e3ff343b57e827b435d473d8c9bd?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
              alt=""
              className="object-contain shrink-0 w-12 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-4 ml-3.5 max-w-full w-[1180px]">
          <nav
            className="flex flex-col my-auto text-base font-bold leading-none min-h-[267px] text-zinc-400"
            role="navigation"
            aria-label="Settings navigation"
          >
            <Link to={"/ProfilePage"} element={<ProfilePage></ProfilePage>}>
              {" "}
              <button className="overflow-hidden p-3 max-w-full rounded-lg w-[185px] max-md:pr-5">
                Edit Profile
              </button>
            </Link>

            <button className="overflow-hidden p-3 mt-6 max-w-full whitespace-nowrap bg-emerald-50 rounded-lg text-sky-950 w-[185px] max-md:pr-5">
              Privacy
            </button>
            <Link to={"/SettingsPage"} element={<SettingsPage></SettingsPage>}>
              {" "}
              <button className="overflow-hidden p-3 mt-6 max-w-full rounded-lg w-[185px]">
                Password & Security
              </button>
            </Link>
          </nav>
          <div
            className="shrink-0 self-start w-0.5 border-2 border-solid border-gray-200 border-opacity-40 h-[461px]"
            role="separator"
          />
          <div className="flex flex-col items-start max-md:max-w-full">
            <h3 className="text-2xl font-bold leading-none text-zinc-400">
              Privacy control
            </h3>
            <p className="self-stretch mt-7 text-xl font-bold leading-8 text-zinc-400 max-md:max-w-full">
              We will guide you through some settings, allowing you to make the
              right choices for your account. What topic would you like to start
              with?
            </p>
            <div className="mt-11 max-w-full w-[771px]">
              <div className="flex gap-5 flex-wrap">
                {privacyCards.map((card, index) => (
                  <div key={index} className="flex-1 min-w-[240px]">
                    <PrivacyCard title={card.title} imageUrl={card.imageUrl} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 ml-72 text-base font-bold leading-none text-zinc-400 max-md:max-w-full">
          You can <span className="text-sky-950">check other privacy</span>{" "}
          settings in Broken alcoholics Settings.
        </p>
      </section>
    </main>
  );
}
