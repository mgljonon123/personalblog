import { useState, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";
import Friends2 from "./friends2";
import Friends3 from "./friends3";
import Friends4 from "./friends4";
import Notification from "../notification/notification";
function Friends1() {
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
        <Link to={"/Notification"} element={<Notification></Notification>}>
          <IoNotificationsOutline className="left-[1705px] top-[15px] absolute text-[27px] text-" />
        </Link>

        <LuFilePenLine className="left-[1645px] top-[15px] absolute text-[27px] text-" />
        <IoSearchOutline className="left-[230px] top-[15px] absolute text-3xl text-" />

        <div className="w-[545.79px] h-[46.41px] left-[218.41px] top-[125.68px] absolute text-black text-[32px] font-normal font-['Poppins']">
          Refine Recommendations
        </div>
        <div className="left-[222px] top-[208px] absolute justify-start items-center gap-[43px] inline-flex">
          <div className="w-[123px] h-[38px] text-black text-xl font-normal font-['Poppins']">
            Followers
          </div>
          <Link to={"/friends2"} element={<Friends2></Friends2>}>
            <div className="w-[125px] h-[38px] text-black/50 text-xl font-normal font-['Poppins']">
              Following
            </div>
          </Link>
          <Link to={"/friends3"} element={<Friends3></Friends3>}>
            <div className="w-52 h-[38px] opacity-50 text-black text-xl font-normal font-['Poppins']">
              Reading History
            </div>
          </Link>
          <Link to={"/friends4"} element={<Friends4></Friends4>}>
            <div className="w-[105px] h-[38px] opacity-50 text-black text-xl font-normal font-['Poppins']">
              Blocked
            </div>
          </Link>
        </div>
        <div className="w-[730px] h-[0px] left-[218px] top-[249px] absolute opacity-50 border border-black"></div>
        <div className="w-[122px] h-[0px] left-[218px] top-[249px] absolute border border-black"></div>
        <div className="w-[1030px] h-[0px] left-[1147px] top-[181px] absolute origin-top-left rotate-90 border border-black"></div>
        <div className="w-[563px] h-[459px] py-2.5 left-[1278px] top-[277px] absolute flex-col justify-start items-start gap-[50px] inline-flex">
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
              HI i am spirt Tuguldur crafting code <br /> and stories ...
            </div>
          </div>
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

        <div className="w-[69px] h-[30px] left-[223px] top-[304px] absolute text-black text-base font-normal font-['Poppins']">
          Topics
        </div>
        <div className="w-[670.08px] h-[89.40px] left-[223.32px] top-[374.16px] absolute">
          <div className="w-[72.84px] h-[70.24px] left-0 top-[19.16px] absolute bg-black rounded-full" />
          <div className="w-[170.83px] h-[25.54px] left-[113.89px] top-0 absolute text-black text-[16px] font-normal font-['Poppins']">
            Web Developement
          </div>
          <div className="w-[331.07px] h-[24.27px] left-[116.54px] top-[39.59px] absolute opacity-70 text-black text-[14px] font-light font-['Poppins']">
            Web development refers to the creating, building, and maintaining of
            websites. It includes aspects such as web design
          </div>
          <div className="w-[84.75px] h-[35.76px] left-[585.33px] top-[17.88px] absolute">
            <div className="w-[84.75px] h-[35.76px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
            <div className="left-[25.22px] top-[10.39px] absolute text-black text-xs font-normal font-['Poppins']">
              Follow
            </div>
          </div>
          <div className="w-7 h-[23px] left-[322.68px] top-[0.84px] absolute opacity-50 text-black text-xs font-normal font-['Poppins']">
            2.5M
          </div>
          <div className="w-[18.54px] h-[17.88px] left-[369.93px] top-[1.28px] absolute opacity-50  overflow-hidden" />
        </div>
        <div className="w-[670.08px] h-[89.40px] left-[222px] top-[514px] absolute">
          <div className="w-[72.84px] h-[70.24px] left-0 top-[19.16px] absolute bg-black rounded-full" />
          <div className="w-[84.75px] h-[25.54px] left-[113.89px] top-0 absolute text-black text-[16px] font-normal font-['Poppins']">
            UI/UX Dev
          </div>
          <div className="w-[331.07px] h-[24.27px] left-[116.54px] top-[39.59px] absolute text-black text-[14px] font-light font-['Poppins']">
            Web development refers to the creating, building, and maintaining of
            websites. It includes aspects such as web design
          </div>
          <div className="w-[84.75px] h-[35.76px] left-[585.33px] top-[17.88px] absolute">
            <div className="w-[84.75px] h-[35.76px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
            <div className="left-[25.22px] top-[10.39px] absolute text-black text-xs font-normal font-['Poppins']">
              Follow
            </div>
          </div>
          <div className="w-7 h-[23px] left-[324px] top-[1px] absolute opacity-50 text-black text-xs font-normal font-['Poppins']">
            2.5M
          </div>
          <div className="w-[18.54px] h-[17.88px] left-[371px] top-[1px] absolute opacity-50  overflow-hidden" />
        </div>
        <div className="w-[670.08px] h-[89.40px] left-[220.32px] top-[690.60px] absolute">
          <div className="w-[72.84px] h-[70.24px] left-0 top-[19.16px] absolute bg-black rounded-full" />
          <div className="w-[206.59px] h-[25.54px] left-[113.89px] top-0 absolute text-black text-[16px] font-normal font-['Poppins']">
            Indra institude Manager
          </div>
          <div className="w-[331.07px] h-[24.27px] left-[116.54px] top-[39.59px] absolute text-black text-[14px] font-light font-['Poppins']">
            Web development refers to the creating, building, and maintaining of
            websites. It includes aspects such as web design
          </div>
          <div className="w-[84.75px] h-[35.76px] left-[585.33px] top-[17.88px] absolute">
            <div className="w-[84.75px] h-[35.76px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
            <div className="left-[25.22px] top-[10.39px] absolute text-black text-xs font-normal font-['Poppins']">
              Follow
            </div>
          </div>
          <div className="w-[37.08px] h-[22.99px] left-[325.04px] top-[1.28px] absolute opacity-50 text-black text-xs font-normal font-['Poppins']">
            2.5M
          </div>
          <div className="w-[18.54px] h-[17.88px] left-[372.77px] top-[1.28px] absolute opacity-50  overflow-hidden" />
        </div>
        <div className="w-[39px] h-[0px] left-[226px] top-[337px] absolute border border-[#ff0000]"></div>
        <div className="w-16 h-[31px] left-[223px] top-[640px] absolute text-black text-base font-normal font-['Poppins']">
          Writer
        </div>
        <div className="w-[43px] h-[0px] left-[223px] top-[666px] absolute border border-[#ff0000]"></div>
        <div className="left-[1278px] top-[207px] absolute text-black text-[22px] font-normal font-['Poppins']">
          Who to follow
        </div>
      </div>
    </>
  );
}
export default Friends1;
