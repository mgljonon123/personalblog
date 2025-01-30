import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";
import Friends1 from "./friends1";
import Friends2 from "./friends2";
import Friends3 from "./friends4";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SocialFeed from "../Social/socialFeed/SocialFeed";
import Post2 from "../post/post2";
const Friends4 = () => {
  return (
    <>
      <div className="w-[100%] h-[990px] relative bg-white  overflow-hidden">
        <div className="w-[1903px] h-[65px] left-0 top-0 absolute">
          <div className="w-[1903px] h-[65px] left-0 top-0 absolute bg-[#d9d9d9]" />
          <div className="w-[1710.06px] left-[96.47px] top-[5px] absolute justify-between items-center inline-flex">
            <div className="justify-start items-center gap-9 flex">
              <Link to={"/SocialFeed"} element={<SocialFeed></SocialFeed>}>
                <div className="text-black text-4xl font-bold font-['Poppins']">
                  Home
                </div>
              </Link>
              <div className="justify-start items-center gap-3.5 flex">
                <div className="w-8 h-9 relative  overflow-hidden" />
                <div className="text-black text-xl font-normal font-['Poppins']">
                  Search
                </div>
              </div>
            </div>

            <div className="justify-center items-center gap-10 flex">
              <div className="justify-center items-center gap-[25px] flex">
                <Link to={"/Post2"} element={<Post2></Post2>}>
                  <div className=" text-black text-xl font-normal font-['Poppins']">
                    Make Post
                  </div>
                </Link>
                <div className="w-6 h-12 relative  overflow-hidden" />
              </div>
              <div className="w-6 h-6 relative  overflow-hidden" />
              <div className="w-[42px] h-[42px] bg-[#ca7272] rounded-full" />
            </div>
          </div>
        </div>

        <Link to={"/Notification"} element={<Notification></Notification>}>
          <IoNotificationsOutline className="left-[1705px] top-[15px] absolute text-[27px] text-" />
        </Link>
        <LuFilePenLine className="left-[1645px] top-[15px] absolute text-[27px] text-" />
        <IoSearchOutline className="left-[230px] top-[15px] absolute text-3xl text-" />

        <div className="w-[600px] h-[0px] left-[223px] top-[249px] absolute opacity-50 border border-black"></div>
        <div className="w-[90px] h-[0px] left-[780px] top-[249px] absolute border border-black"></div>
        <div className="w-[802px] h-[455px] left-[220px] top-[305px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="self-stretch h-[126px] relative">
            <div className="w-[80px] h-[80px] left-0 top-[26.79px] absolute bg-black rounded-[50%]" />
            <div className="w-[227.89px] h-[35.71px] left-[125.63px] top-0 absolute text-black text-[20px] font-normal font-['Poppins']">
              Indra institude Manager
            </div>
            <div className="w-[365px] h-[71px] left-[129px] top-[55px] absolute text-black text-[16px] font-light font-['Poppins']">
              Web development refers to the creating, building, and maintaining
              of websites. It includes aspects such as web design
            </div>
            <div className="w-[122.71px] h-[50px] left-[679.29px] top-[25px] absolute">
              <div className="w-[122.71px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
              <div className="left-[30.93px] top-[11.93px] absolute text-black text-[17px] font-normal font-['Poppins']">
                Unblock
              </div>
            </div>
            <div className="w-[40.90px] h-[32.14px] left-[369.59px] top-[7px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']">
              2.5M
            </div>
            <div className="w-[33px] h-8 left-[413px] top-[2px] absolute opacity-50  overflow-hidden" />
          </div>
          <div className="self-stretch h-[126px] relative">
            <div className="w-[80px] h-[80px] left-0 top-[26.79px] absolute bg-black rounded-[50%]" />
            <div className="w-[227.89px] h-[35.71px] left-[125.63px] top-0 absolute text-black text-[20px] font-normal font-['Poppins']">
              Bazraa bagsh
            </div>
            <div className="w-[365px] h-[71px] left-[129px] top-[55px] absolute text-black text-[16px] font-light font-['Poppins']">
              Web development refers to the creating, building, and maintaining
              of websites. It includes aspects such as web design
            </div>
            <div className="w-[122.71px] h-[50px] left-[679.29px] top-[25px] absolute">
              <div className="w-[122.71px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
              <div className="left-[30.93px] top-[11.93px] absolute text-black text-[17px] font-normal font-['Poppins']">
                Unblock
              </div>
            </div>
            <div className="w-[40.90px] h-[32.14px] left-[369.59px] top-[7px] absolute opacity-50 text-black text-sm font-normal font-['Poppins']">
              2.5M
            </div>
            <div className="w-[33px] h-8 left-[413.42px] top-[1.79px] absolute opacity-50  overflow-hidden" />
          </div>
        </div>
        <div className="w-[563px] h-[459px] py-2.5 left-[1254px] top-[282px] absolute flex-col justify-start items-start gap-[50px] inline-flex">
          <div className="w-[532px] h-[60.75px] relative">
            <div className="w-[55px] h-[55px] left-0 top-[5.75px] absolute bg-[#342a2a] rounded-full" />
            <div className="w-[188px] h-[21px] left-[81px] top-0 absolute text-black text-[18px] font-semibold font-['Poppins']">
              Jonon Tuguldur
            </div>
            <div className="w-16 h-8 left-[468px] top-[16px] absolute">
              <div className="w-16 h-8 left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
              <div className="left-[16px] top-[7.71px] absolute text-black text-xs font-normal font-['Poppins']">
                Follow
              </div>
            </div>
            <div className="w-[317px] h-7 left-[107px] top-[28px] absolute text-black text-[15px] font-['Poppins']">
              {" "}
              HI i am Jonon Tuguldur crafting code <br /> and stories ...
            </div>
          </div>
          <div className="w-[532px] h-[60.75px] relative">
            <div className="w-[55px] h-[55px] left-0 top-[5.75px] absolute bg-[#342a2a] rounded-full" />
            <div className="w-[188px] h-[21px] left-[81px] top-0 absolute text-black text-[18px] font-semibold font-['Poppins']">
              Jonon Tuguldur
            </div>
            <div className="w-16 h-8 left-[468px] top-[16px] absolute">
              <div className="w-16 h-8 left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
              <div className="left-[16px] top-[7.71px] absolute text-black text-xs font-normal font-['Poppins']">
                Follow
              </div>
            </div>
            <div className="w-[317px] h-7 left-[107px] top-[28px] absolute text-black text-[15px] font-['Poppins']">
              {" "}
              HI i am Jonon Tuguldur crafting code <br /> and stories ...
            </div>
          </div>
          <div className="w-[532px] h-[63px] relative">
            <div className="w-[55px] h-[57.04px] left-0 top-[5.96px] absolute bg-[#342a2a] rounded-full" />
            <div className="w-[188px] h-[21.78px] left-[81px] top-0 absolute text-black text-[18px] font-semibold font-['Poppins']">
              Jonon Tuguldur
            </div>
            <div className="w-16 h-[33.18px] left-[468px] top-[16.59px] absolute">
              <div className="w-16 h-[33.18px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
              <div className="left-[16px] top-[7.93px] absolute text-black text-xs font-normal font-['Poppins']">
                Follow
              </div>
            </div>
            <div className="w-[317px] h-[29.04px] left-[107px] top-[29.04px] absolute text-black text-[15px] font-['Poppins']">
              {" "}
              HI i am Jonon Tuguldur crafting code <br /> and stories ...
            </div>
          </div>
        </div>
        <div className="left-[1254px] top-[206px] absolute text-black text-[22px] font-normal font-['Poppins']">
          Who to follow
        </div>
        <div className="w-[1030px] h-[0px] left-[1131px] top-[221px] absolute origin-top-left rotate-90 border border-black"></div>
        <div className="w-[744px] h-9 left-[225px] top-[203px] absolute justify-start items-center gap-[60px] inline-flex">
          <Link to={"/friends1"} element={<Friends1></Friends1>}>
            <div className="opacity-50 text-black text-[22px] font-normal font-['Poppins']">
              Followers
            </div>
          </Link>
          <Link to={"/friends2"} element={<Friends2></Friends2>}>
            <div className="opacity-50 text-black text-[22px] font-normal font-['Poppins']">
              Following
            </div>
          </Link>
          <Link to={"/friends3"} element={<Friends3></Friends3>}>
            <div className="opacity-50 text-black text-[22px] font-normal font-['Poppins']">
              Reading History
            </div>
          </Link>

          <div className="text-black text-[22px] font-normal font-['Poppins']">
            Blocked
          </div>
        </div>
        <div className="w-[682px] h-14 left-[223px] top-[119px] absolute text-black text-[32px] font-normal font-['Poppins']">
          Refine Recommendations
        </div>
      </div>
    </>
  );
};

export default Friends4;
