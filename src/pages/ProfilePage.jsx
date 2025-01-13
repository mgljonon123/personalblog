import * as React from "react";

import { Header } from "../components/editprofile/editingprofile/Header";
import { ProfileSidebar } from "../components/editprofile/editingprofile/ProfileSidebar";
import { ProfileForm } from "../components/editprofile/editingprofile/ProfileForm";
import { ContactForm } from "../components/editprofile/editingprofile/ContactForm";

export default function ProfilePage() {
  const skills = [
    { label: "Programmer", width: "100px" },
    { label: "Phsycologist", width: "100px" },
    { label: "Polymath", width: "82px" },
  ];

  return (
    <main className="flex flex-col pb-64 bg-white max-md:pb-24" role="main">
      <div className="flex flex-col w-full bg-white max-md:max-w-full">
        <Header />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/05bf9b773053daa36867059da75cb7b30f8be7d1a887d9bfc37f958da46c42a7?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          className="object-contain w-full aspect-[9.9] max-md:max-w-full"
          alt="Profile banner"
        />

        <div className="flex z-10 flex-wrap gap-6 items-start self-center -mt-14 w-full max-w-[1767px] max-md:max-w-full">
          <ProfileSidebar />

          <div className="flex flex-wrap flex-auto gap-3 self-end mt-20 max-md:mt-10">
            <div className="shrink-0 my-auto w-0.5 border-2 border-solid border-gray-200 border-opacity-40 h-[461px]" />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between font-bold text-sky-950 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <h2 className="self-start text-2xl">Your Name</h2>
                  <p className="mt-2 text-xl leading-none max-md:max-w-full">
                    Your account is ready, you can now apply for advice.
                  </p>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/94dd0a526a1fa0f2279590b6c911634354e9e3ff343b57e827b435d473d8c9bd?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                  className="object-contain shrink-0 self-start mt-3.5 w-12 aspect-square"
                  alt=""
                />
              </div>

              <div className="self-center mt-14 w-full max-w-[1430px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <ProfileForm />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-11 ml-80 max-w-full text-sm tracking-tight leading-loose text-white whitespace-nowrap w-[357px] max-md:mt-10 max-md:ml-2.5">
        <div className="flex flex-auto gap-3 items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col self-stretch my-auto rounded-[109px]"
              style={{ width: skill.width }}
            >
              <div className="px-2.5 py-1.5 bg-black border-neutral-600 rounded-[109px]">
                {skill.label}
              </div>
            </div>
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6122354930e78d3eed51217e1f81bb50b41a241c8d8a788780ba15a7ca51ee2a?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          className="object-contain shrink-0 self-start w-8 aspect-[0.97]"
          alt=""
        />
      </div>
    </main>
  );
}
