import * as React from "react";
import { UserProfile } from "./types";

interface ProfileCardProps {
  profile: UserProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="flex flex-col w-full min-h-[105px] ">
      <div className="flex flex-wrap gap-6 items-start w-full">
        <div
          className="flex shrink-0 mt-1.5 rounded-full bg-zinc-800 h-[55px] w-[55px]"
          role="img"
          aria-label={`${profile.name}'s avatar`}
        />
        <div className="flex flex-col grow shrink-0 basis-0  ">
          <div className="self-start text-base font-semibold">
            {profile.name}
          </div>
          <div className="flex gap-5 justify-between items-start ">
            <div className="flex gap-1 mt-3 text-sm font-[275]">
              <img
                loading="lazy"
                src={profile.avatarUrl}
                className="object-contain shrink-0 self-start mt-1.5 w-6 aspect-square"
                alt=""
              />
              <div className="w-[317px]">{profile.bio}</div>
            </div>
            <div className="flex flex-col text-xs whitespace-nowrap">
              <button
                className="px-3.5 py-2 rounded-3xl border border-black border-solid bg-zinc-300"
                aria-label={`Follow ${profile.name}`}
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
