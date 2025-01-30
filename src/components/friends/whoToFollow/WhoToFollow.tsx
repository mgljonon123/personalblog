import * as React from "react";
import { ProfileCard } from "./ProfileCard";
import { userProfiles } from "./data";

export function WhoToFollow() {
  return (
    <section
      className="flex flex-col text-black w-[400px]"
      aria-labelledby="who-to-follow-heading"
    >
      <h2 id="who-to-follow-heading" className="z-10 -mt-2 text-2xl">
        Who to follow
      </h2>
      <div className="flex flex-col pl-2 mt-6 w-full ">
        {userProfiles.map((profile, index) => (
          <div
            key={index}
            className={`flex z-10 flex-col ${index > 0 ? "mt-0" : ""}`}
          >
            <ProfileCard profile={profile} />
          </div>
        ))}
      </div>
    </section>
  );
}
