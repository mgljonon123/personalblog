import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Friends1 from "./friends1";
import Friends2 from "./friends2";
import Friends4 from "./friends4";
const Friends3 = () => {
  return (
    <>
      <div className="w-[100%] h-[990px] relative bg-white  overflow-hidden">
        <div className="w-[1903px] h-[65px] left-0 top-0 absolute">
          <div className="w-[1903px] h-[65px] left-0 top-0 absolute bg-[#d9d9d9]" />
          <div className="w-[1710.06px] left-[96.47px] top-[5px] absolute justify-between items-center inline-flex">
            <div className="justify-start items-center gap-9 flex">
              <div className="text-black text-4xl font-bold font-['Poppins']">
                Home
              </div>
              <div className="justify-start items-center gap-3.5 flex">
                <div className="w-8 h-9 relative  overflow-hidden" />
                <div className="text-black text-xl font-normal font-['Poppins']">
                  Search
                </div>
              </div>
            </div>

            <div className="justify-center items-center gap-10 flex">
              <div className="justify-center items-center gap-[25px] flex">
                <div className=" text-black text-xl font-normal font-['Poppins']">
                  Make Post
                </div>
                <div className="w-6 h-12 relative  overflow-hidden" />
              </div>
              <div className="w-6 h-6 relative  overflow-hidden" />
              <div className="w-[42px] h-[42px] bg-[#ca7272] rounded-full" />
            </div>
          </div>
        </div>

        <IoNotificationsOutline className="left-[1705px] top-[15px] absolute text-[27px] text-" />
        <LuFilePenLine className="left-[1645px] top-[15px] absolute text-[27px] text-" />
        <IoSearchOutline className="left-[230px] top-[15px] absolute text-3xl text-" />

        <div className="w-[682px] h-14 left-[223px] top-[119px] absolute text-black text-[32px] font-normal font-['Poppins']">
          Refine Recommendations
        </div>
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
          <div className="text-black text-[22px] font-normal font-['Poppins']">
            Reading History
          </div>
          <Link to={"/friends4"} element={<Friends4></Friends4>}>
            <div className="opacity-50 text-black text-[22px] font-normal font-['Poppins']">
              Blocked
            </div>
          </Link>
        </div>
        <div className="w-[688px] h-[0px] left-[225px] top-[249px] absolute opacity-50 border border-black"></div>
        <div className="w-[155px] h-[0px] left-[519px] top-[249px] absolute border border-black"></div>
        <div className="w-[1030px] h-[px] left-[1131px] top-[221px] absolute origin-top-left rotate-90 border border-black"></div>
        <div className="w-[823px] h-[530px] left-[222px] top-[398px] absolute flex-col justify-start items-start gap-[35px] inline-flex">
          <div className="w-[797px] h-[209px] relative">
            <div className="w-[60.47px] h-[55.29px] left-[-0px] top-[1.11px] absolute bg-[#513939] rounded-full" />
            <img
              className="w-[211.65px] h-[129.38px] left-[585.35px] top-[12.16px] absolute"
              src="https://i.pinimg.com/236x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg"
            />
            <div className="w-[474.09px] h-[209px] left-[83.45px] top-0 absolute">
              <div className="w-[458.37px] h-[40.92px] left-[-0px] top-[66.35px] absolute text-black text-base font-['Poppins']">
                You need to figure it out yourself. It's a experience that will
                teach you more than 10 books. You will learn what endurance and
                fail means...
              </div>
              <div className="w-[472.88px] h-[26.54px] left-[1.21px] top-[182.46px] absolute">
                <div className="w-[53.21px] h-[26.54px] left-0 top-0 absolute">
                  <div className="w-[26.61px] h-[26.54px] left-[26.61px] top-0 absolute text-black text-base font-['Poppins']">
                    1.5k
                  </div>
                  <div className="w-[17px] h-[18px] left-0 top-[1px] absolute  overflow-hidden" />
                </div>
                <div className="left-[319px] top-0 absolute justify-start items-center gap-3 inline-flex">
                  <div className="w-4 h-4 relative  overflow-hidden" />
                  <div className="w-4 h-4 relative  overflow-hidden" />
                  <div className="w-4 h-4 relative  overflow-hidden" />
                </div>
              </div>
              <div className="w-[89.50px] h-[53.08px] left-0 top-0 absolute">
                <div className="w-[82.24px] h-[16.59px] left-0 top-0 absolute text-black text-[12px] font-['Poppins']">
                  Front end Dev
                </div>
                <div className="w-[89.50px] h-[26.54px] left-[-0px] top-[26.54px] absolute text-black text-base font-normal font-['Poppins']">
                  Suzulaab
                </div>
                <div className="w-[88.29px] h-[0px] left-[1.21px] top-[53.08px] absolute border border-black"></div>
                <div className="w-[13.27px] h-[0px] left-[1.21px] top-[15.48px] absolute origin-top-left rotate-90 border border-black/60"></div>
              </div>
            </div>
          </div>
          <div className="w-[797px] h-[223px] relative">
            <div className="w-[60.47px] h-[58.99px] left-[-0px] top-[1.18px] absolute bg-[#513939] rounded-full" />
            <img
              className="w-[211.65px] h-[138.05px] left-[585.35px] top-[12.98px] absolute"
              src="https://i.pinimg.com/736x/50/b2/79/50b279805d5fe09a69a6e088df10cf2c.jpg"
            />
            <div className="w-[474.09px] h-[223px] left-[83.45px] top-0 absolute">
              <div className="w-[458.37px] h-[43.66px] left-[-0px] top-[70.79px] absolute text-black text-base font-['Poppins']">
                You need to figure it out yourself. It's a experience that will
                teach you more than 10 books. You will learn what endurance and
                fail means...
              </div>
              <div className="w-[472.88px] h-[28.32px] left-[1.21px] top-[194.68px] absolute">
                <div className="w-[53.21px] h-[28.32px] left-0 top-0 absolute">
                  <div className="w-[26.61px] h-[28.32px] left-[26.61px] top-0 absolute text-black text-base font-['Poppins']">
                    1.5k
                  </div>
                  <div className="w-[17px] h-[18px] left-0 top-[1px] absolute  overflow-hidden" />
                </div>
                <div className="left-[319px] top-0 absolute justify-start items-center gap-3 inline-flex">
                  <div className="w-4 h-4 relative  overflow-hidden" />
                  <div className="w-4 h-4 relative  overflow-hidden" />
                  <div className="w-4 h-4 relative  overflow-hidden" />
                </div>
              </div>
              <div className="w-[89.50px] h-[56.63px] left-0 top-0 absolute">
                <div className="w-[82.24px] h-[17.70px] left-0 top-0 absolute text-black text-[12px] font-['Poppins']">
                  Front end Dev
                </div>
                <div className="w-[89.50px] h-[28.32px] left-[-0px] top-[28.32px] absolute text-black text-base font-normal font-['Poppins']">
                  Suzulaab
                </div>
                <div className="w-[88.29px] h-[0px] left-[1.21px] top-[56.63px] absolute border border-black"></div>
                <div className="w-[14.16px] h-[0px] left-[1.21px] top-[16.52px] absolute origin-top-left rotate-90 border border-black/60"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[793px] h-[65px] px-3.5 py-[13px] left-[225px] top-[282px] absolute bg-[#d9d9d9] justify-center items-center gap-[60px] inline-flex">
          <div className="text-black text-base font-normal font-['Poppins']">
            You can clear your history and start fresh and clean
          </div>
          <div className="w-[122px] h-7 relative">
            <div className="w-[122px] h-7 left-0 top-0 absolute bg-[#ff0606] rounded-[10px]" />
            <div className="left-[17px] top-[3px] absolute text-white text-sm font-normal font-['Poppins']">
              Clear History
            </div>
          </div>
        </div>
        <div className="w-[563px] h-[459px] py-2.5 left-[1254px] top-[282px] absolute flex-col justify-start items-start gap-[50px] inline-flex">
          <div className="w-[532px] h-[60.75px] relative">
            <div className="w-[55px] h-[55px] left-0 top-[5.75px] absolute bg-[#342a2a] rounded-full" />
            <div className="w-[188px] h-[21px] left-[81px] top-0 absolute text-black text-[17px] font-semibold font-['Poppins']">
              Jonon Tuguldur
            </div>
            <div className="w-16 h-8 left-[468px] top-[16px] absolute">
              <div className="w-16 h-8 left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
              <div className="left-[15px] top-[8px] absolute text-black text-xs font-normal font-['Poppins']">
                Follow
              </div>
            </div>
            <div className="w-[317px] h-7 left-[107px] top-[28px] absolute text-black text-[14px] font-['Poppins']">
              {" "}
              HI i am Jonon Tuguldur crafting code <br /> and stories ...
            </div>
          </div>
          <div className="w-[532px] h-[60.75px] relative">
            <div className="w-[55px] h-[55px] left-0 top-[5.75px] absolute bg-[#342a2a] rounded-full" />
            <div className="w-[188px] h-[21px] left-[81px] top-0 absolute text-black  text-[17px] font-semibold font-['Poppins']">
              Jonon Tuguldur
            </div>
            <div className="w-16 h-8 left-[468px] top-[16px] absolute">
              <div className="w-16 h-8 left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
              <div className="left-[15px] top-[8px] absolute text-black text-xs font-normal font-['Poppins']">
                Follow
              </div>
            </div>
            <div className="w-[317px] h-7 left-[107px] top-[28px] absolute text-black text-[14px] font-['Poppins']">
              {" "}
              HI i am Jonon Tuguldur crafting code <br /> and stories ...
            </div>
          </div>
          <div className="w-[532px] h-[63px] relative">
            <div className="w-[55px] h-[57.04px] left-0 top-[5.96px] absolute bg-[#342a2a] rounded-full" />
            <div className="w-[188px] h-[21.78px] left-[81px] top-0 absolute text-black text-[17px] font-semibold font-['Poppins']">
              Jonon Tuguldur
            </div>
            <div className="w-16 h-[33.18px] left-[468px] top-[16.59px] absolute">
              <div className="w-16 h-[33.18px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
              <div className="left-[15px] top-[8px] absolute text-black text-xs font-normal font-['Poppins']">
                Follow
              </div>
            </div>
            <div className="w-[317px] h-[29.04px] left-[107px] top-[29.04px] absolute text-black text-[14px] font-['Poppins']">
              {" "}
              HI i am Jonon Tuguldur crafting code <br /> and stories ...
            </div>
          </div>
        </div>
        <div className="left-[1254px] top-[206px] absolute text-black text-[22px] font-normal font-['Poppins']">
          Who to follow
        </div>
      </div>
      ;
    </>
  );
};

export default Friends3;
