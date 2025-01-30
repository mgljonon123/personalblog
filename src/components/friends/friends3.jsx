import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import Friends1 from "./friends1";
import Friends2 from "./friends2";
import Friends4 from "./friends4";
import SocialFeed from "../Social/socialFeed/SocialFeed";
import Post2 from "../post/post2";
import { WhoToFollow } from "./whoToFollow/WhoToFollow";
import SidebarNavigation from "../../SidebarNavigation";

const Friends3 = () => {
  // State for reading history
  const [history, setHistory] = useState([
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

  // Clear history function
  const clearHistory = () => {
    setHistory([]); // Clears the history
    alert("Your history has been cleared!");
  };

  return (
    <>
      <div className="w-[100%] h-[990px] relative bg-white overflow-hidden">
        <div className="w-[1903px] h-[65px] left-0 top-0 absolute">
          <div className="w-[1903px] h-[65px] left-0 top-0 absolute bg-[#d9d9d9]" />
          <div className="w-[1710.06px] left-[96.47px] top-[5px] absolute justify-between items-center inline-flex">
            <div className="justify-start items-center gap-9 flex">
              <Link to={"/SocialFeed"} element={<SocialFeed />}>
                <div className="text-black text-4xl font-bold font-['Poppins']">
                  Home
                </div>
              </Link>
              <div className="justify-start items-center gap-3.5 flex">
                <div className="w-8 h-9 relative overflow-hidden" />
                <div className="text-black text-xl font-normal font-['Poppins']">
                  Search
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-10 flex">
              <div className="justify-center items-center gap-[25px] flex">
                <Link to={"/Post2"} element={<Post2 />}>
                  <div className="text-black text-xl mr-[100px] font-normal font-['Poppins']">
                    Make Post
                  </div>
                </Link>
              </div>

              <div>
                <SidebarNavigation></SidebarNavigation>
              </div>
            </div>
          </div>
        </div>

        <Link to={"/Notification"} element={<Notification />}>
          <IoNotificationsOutline className="left-[1705px] top-[15px] absolute text-[27px]" />
        </Link>
        <LuFilePenLine className="left-[1645px] top-[15px] absolute text-[27px]" />
        <IoSearchOutline className="left-[230px] top-[15px] absolute text-3xl" />

        <div className="w-[682px] h-14 left-[223px] top-[119px] absolute text-black text-[32px] font-normal font-['Poppins']">
          Refine Recommendations
        </div>
        <div className="w-[744px] h-9 left-[225px] top-[203px] absolute justify-start items-center gap-[60px] inline-flex">
          <Link to={"/friends1"} element={<Friends1 />}>
            <div className="opacity-50 text-black text-[22px] font-normal font-['Poppins']">
              Followers
            </div>
          </Link>
          <Link to={"/friends2"} element={<Friends2 />}>
            <div className="opacity-50 text-black text-[22px] font-normal font-['Poppins']">
              Following
            </div>
          </Link>
          <div className="text-black text-[22px] font-normal font-['Poppins']">
            Reading History
          </div>
          <Link to={"/friends4"} element={<Friends4 />}>
            <div className="opacity-50 text-black text-[22px] font-normal font-['Poppins']">
              Blocked
            </div>
          </Link>
        </div>
        <div className="w-[688px] h-[0px] left-[225px] top-[249px] absolute opacity-50 border border-black"></div>
        <div className="w-[155px] h-[0px] left-[549px] top-[249px] absolute border border-black"></div>

        <div className="w-[823px] h-[530px] left-[222px] top-[398px] absolute flex-col gap-[35px]">
          {history.length > 0 ? (
            history.map((item) => (
              <div key={item.id} className="w-[797px] h-[209px] relative">
                <div className="w-[60.47px] h-[55.29px] left-0 top-[1.11px] absolute bg-[#513939] rounded-full" />
                <img
                  className="w-[211.65px] h-[129.38px] left-[585.35px] top-[12.16px] absolute"
                  src={item.image}
                  alt={item.title}
                />
                <div className="w-[474.09px] h-[209px] left-[83.45px] top-0 absolute">
                  <div className="text-black text-base font-['Poppins']">
                    {item.title}
                  </div>
                  <div className="text-black text-base font-['Poppins']">
                    {item.profession} - {item.author}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-black text-base font-['Poppins']">
              No history available.
            </div>
          )}
        </div>

        <div className="w-[793px] h-[65px] px-3.5 py-[13px] left-[225px] top-[282px] absolute bg-[#d9d9d9] flex items-center justify-between">
          <div className="text-black text-base font-['Poppins']">
            You can clear your history and start fresh and clean
          </div>
          <button
            onClick={clearHistory}
            className="w-[122px] h-7 bg-[#ff0606] text-white rounded-[10px] text-sm font-['Poppins']"
          >
            Clear History
          </button>
        </div>
      </div>
    </>
  );
};

export default Friends3;
