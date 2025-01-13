import * as React from "react";
import { Header } from "./components/Header";
import { ProfileBanner } from "./components/ProfileBanner";
import { Sidebar } from "./components/Sidebar";
import { AccountSettings } from "./components/AccountSettings";

export default function SettingsPage() {
  return (
    <main className="flex justify-center items-start bg-white" role="main">
      <div className="flex flex-col bg-white w-[1903px] max-md:max-w-full">
        <Header />
        <ProfileBanner />
        <div className="flex z-10 flex-wrap gap-10 items-start px-16 mt-14 w-full min-h-[578px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <Sidebar />
          <AccountSettings />
        </div>
      </div>
    </main>
  );
}
