import * as React from "react";
import { useState } from "react";
import { Header } from "./components/Header";
import { UserProfile } from "./components/UserProfile";
import { PostCard } from "./components/PostCard";
import { SocialMetrics } from "./components/SocialMetrics";
import { FollowSuggestion } from "./components/FollowSuggestion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LibraryLayout from "../Library1/library/LibraryLayout";

const followSuggestions = [
  {
    name: "Jonon Tuguldur",
    description: " HI i am Jonon Tuguldur crafting code and stories ...",
  },
  {
    name: "Jonon Tuguldur",
    description: " HI i am Jonon Tuguldur crafting code and stories ...",
  },
  {
    name: "Jonon Tuguldur",
    description: " HI i am Jonon Tuguldur crafting code and stories ...",
  },
];

export function Library() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true); // Set the clicked state to true when the button is clicked
  };
  // State to keep track of reading history
  const [readingHistory, setReadingHistory] = useState([
    // Add initial reading history items here if needed
    {
      id: 1,
      title: "You need to figure it out yourself...",
      author: "Suzulaab",
      profession: "Front end Dev",
      image:
        "https://i.pinimg.com/236x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg",
    },
    {
      id: 2,
      title: "It's an experience that will teach you more...",
      author: "Suzulaab",
      profession: "Front end Dev",
      image:
        "https://i.pinimg.com/736x/50/b2/79/50b279805d5fe09a69a6e088df10cf2c.jpg",
    },
  ]);

  // Function to clear reading history
  const clearHistory = () => {
    setReadingHistory([]); // Clear the history by setting it to an empty array
  };

  return (
    <main
      className="overflow-hidden flex flex-col pb-40 bg-white max-md:pb-24"
      role="main"
    >
      <Header />
      <div className="self-center mt-5 ml-6 w-full max-w-[1748px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section
            className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full"
            aria-label="Main content"
          >
            <div className="flex flex-col w-full max-md:mt-[0px] max-md:max-w-full">
              <div className=" w-[636px] ml-[00px]">
                <div className="flex gap-[5px] max-md:flex-col mt-[15px] mr-[] ">
                  <UserProfile />
                  <div className="flex flex-col ml-5 w-[79%] absolute left-[300px]">
                    <div className="flex flex-col items-start w-full max-md:mt-10">
                      <h2 className="text-7xl tracking-tighter text-center text-black leading-[88px] max-md:text-4xl">
                        Library
                      </h2>
                      <div className="flex gap-10 items-center mt-1.5 text-2xl">
                        <Link to={"/Library"} element={<LibraryLayout />}>
                          <button className="self-stretch my-auto text-black text-opacity-50">
                            Saved List
                          </button>
                        </Link>

                        <button className="self-stretch my-auto text-black">
                          Reading History
                        </button>
                      </div>
                      <div className="flex gap-7 self-stretch mt-10 ">
                        <div className=" my-auto text-black w-[600px]">
                          You can clear your reading history{" "}
                        </div>
                        <button
                          onClick={clearHistory} // Handle click to clear history
                          className="px-3 py-2.5 text-white bg-red-600 rounded-xl absolute left-[480px] w-[300px]"
                        >
                          Clear History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-end mt-20 mr-[20px] max-w-full w-[797px] max-md:mt-10 relative left-[-20px]">
                <PostCard imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/feff76705644436e0ef2048aace844dd66943bbc8ae4059f04ebda8797bcaac3?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628" />
                <SocialMetrics />
                <PostCard imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/feff76705644436e0ef2048aace844dd66943bbc8ae4059f04ebda8797bcaac3?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628" />
                <SocialMetrics />
              </div>
            </div>
          </section>
          <aside
            className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full"
            role="complementary"
          >
            <div className="flex flex-col items-start px-px py-1 mt-20 w-full max-md:mt-10 max-md:max-w-full">
              <div className="py-px max-w-full w-[539px]">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[85%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col -mt-2 w-full text-black max-md:mt-10">
                      <h3 className="self-start text-2xl">Who to follow</h3>
                      {followSuggestions.map((suggestion, index) => (
                        <FollowSuggestion key={index} {...suggestion} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[15%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-16 text-xs text-black whitespace-nowrap max-md:mt-10">
                      {[1, 2, 3].map((index) => (
                        <button
                          key={index}
                          className="px-3.5 py-2 mt-14 first:mt-0 rounded-3xl border border-black border-solid bg-zinc-300"
                        >
                          Follow
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <section className="mt-24 max-w-full w-[563px] max-md:mt-10">
                <h3 className="self-start text-2xl text-black">
                  Recommended Topics
                </h3>
                <div className="flex gap-5 ">
                  <div className="">
                    <div className="flex gap-5 justify-between mt-10 text-black">
                      <div className="flex flex-col">
                        <button
                          onClick={handleClick}
                          className={`rounded-xl text-black bg-stone-500 py-1 px-3 ${
                            isClicked ? "text-white" : ""
                          }`}
                        >
                          Programmer
                        </button>
                        <button className="mt-10">Python</button>
                      </div>
                      <div className="flex flex-col">
                        <button className="rounded-xl bg-stone-500 max-md:px-5 py-1 px-3">
                          Technology
                        </button>
                        <button className="mt-10">Python</button>
                      </div>
                      <div className="flex flex-col">
                        <button className="px-6 py-1 rounded-xl bg-stone-500 max-md:px-5">
                          Gaming
                        </button>
                        <button className="mt-10">Programming</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-10 gap-[10px] flex justify-center">
                <h3 className="text-xl text-black">Reading List</h3>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5723c662e872cf537972ff268eac583b6d762739609066a4b322b709f6adfb8?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628" />
              </div>
              <p className="self-stretch mt-5 text-sm text-black max-md:max-w-full">
                Click the bookmark icon on any story to easily add it to your
                reading list or a custom list that you can share.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
