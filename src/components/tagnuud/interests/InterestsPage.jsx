import React from "react";
import { InterestTag } from "./InterestTag";
import { SelectedInterests } from "./SelectedInterests";
import { InterestGroup } from "./InterestGroup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SocialFeed from "../../Social/socialFeed/SocialFeed";
import img1 from "./img1.png";

const interests = [
  { name: "Javascript", selected: false },
  { name: "UX", selected: false },
  { name: "Social Media", selected: true },
  { name: "Self improvement", selected: false },
  { name: "Programming", selected: false },
  { name: "Writing", selected: true },
  { name: "Computer Science", selected: false },
  { name: "Python", selected: false },
  { name: "Technology", selected: true },
  { name: "Machine learning", selected: false },
  { name: "Coding", selected: false },
  { name: "Relationships", selected: false },
  { name: "Leadership", selected: false },
  { name: "Health", selected: false },
  { name: "History", selected: false },
  { name: "React", selected: false },
  { name: "Productivity", selected: false },
  { name: "Deep learning", selected: false },
  { name: "Design", selected: false },
];

const interestGroups = [
  ["Javascript", "UX", "Social Media"],
  ["Self improvement", "Programming", "Writing"],
  ["Computer Science", "Python", "Technology"],
  ["Machine learning", "Self Improvement", "Coding"],
  ["Relationships", "Leadership", "Health"],
  ["History", "React", "Productivity"],
  ["Deep learning", "Design", "Machine learning"],
];

export default function InterestsPage() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-16 pb-80 text-xl text-black bg-white max-md:px-5 max-md:pb-24">
      <div className="flex flex-col items-center max-w-full w-[693px]">
        <img
          loading="lazy"
          src={img1}
          alt="Interests selection header illustration"
          className="object-contain max-w-full aspect-[3.25] w-[396px]"
        />
        <h1 className="mt-3.5 text-2xl">What are you interested in?</h1>

        <SelectedInterests
          selectedInterests={interests.filter((i) => i.selected)}
        />

        {interestGroups.map((group, index) => (
          <InterestGroup key={index} interests={group} />
        ))}

        <button
          className="mt-6 text-green-500"
          onClick={() => {}}
          aria-label="Show more interests"
        >
          Show More
        </button>

        {/* OK Button */}
        <Link to={"/SocialFeed"} element={<SocialFeed />}>
          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
            aria-label="Confirm interests selection"
          >
            OK
          </button>
        </Link>
      </div>
    </main>
  );
}
