import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BlogPage from "../components/blog/BlogPage";
import SocialFeed from "../Social/socialFeed/SocialFeed";
function Notification() {
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

        <div className="w-[1204px] h-[865px] left-[243px] top-[83px] absolute">
          <div className="w-[622.83px] left-0 top-0 absolute text-black text-5xl font-medium font-['Inter'] leading-[72px]">
            Notifications
          </div>
          <div className="w-[1204px] h-[739px] left-0 top-[126px] absolute">
            <div className="w-[1204px] h-[168px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-6 bg-white justify-start items-start gap-3 inline-flex">
                <div className="w-12 h-12 relative bg-[#5b9e5d] rounded-[200px]">
                  <div className="left-[10px] top-[9px] absolute text-white text-xl font-semibold font-['Inter'] leading-[30px]">
                    AB
                  </div>
                  <img
                    className="w-12 h-12 left-0 top-0 absolute rounded-[200px]"
                    src="https://via.placeholder.com/48x48"
                  />
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-black text-sm font-semibold font-['Inter'] leading-[18px]">
                    Mary Thompson
                  </div>
                  <div className="self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">
                    Started a discussion: How does Mobile Inbox increase user
                    engagement?
                  </div>
                  <div className="py-1 justify-start items-start gap-2 inline-flex">
                    <div className="px-3 py-1 bg-[#2e70e8] rounded-[32px] justify-center items-center flex">
                      <div className="px-1 justify-center items-center gap-2 flex">
                        <div className="text-white text-sm font-medium font-['Inter'] leading-tight">
                          Join the discussion
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs font-normal font-['Inter'] leading-[18px]">
                    2 mins ago
                  </div>
                </div>
                <div className="px-2 py-1 bg-slate-800 rounded border border-slate-700 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="w-3.5 h-3.5 relative  overflow-hidden" />
                  <div className="text-slate-200 text-xs font-medium font-['Inter'] leading-[18px]">
                    15
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[0px] border border-slate-800"></div>
              </div>
            </div>
            <div className="w-[1202.02px] h-[147px] left-0 top-[219px] absolute flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-6 bg-white justify-start items-start gap-3 inline-flex">
                <div className="w-12 h-12 relative bg-[#5b9e5d] rounded-[200px]">
                  <div className="left-[10px] top-[9px] absolute text-white text-xl font-semibold font-['Inter'] leading-[30px]">
                    AB
                  </div>
                  <img
                    className="w-12 h-12 left-0 top-0 absolute rounded-[200px]"
                    src="https://via.placeholder.com/48x48"
                  />
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2 inline-flex">
                  <div className="self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">
                    SuprSend uploaded: 10 Reasons to Use In-app Inbox
                    Notifications In Your Product Communication Strategy.
                  </div>
                  <div className="text-slate-400 text-xs font-normal font-['Inter'] leading-[18px]">
                    2 mins ago
                  </div>
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <div className="w-16 h-16 relative bg-white rounded-lg  overflow-hidden">
                    <img
                      className="w-[332px] h-[186.75px] left-[-134px] top-[-61px] absolute"
                      src="https://via.placeholder.com/332x187"
                    />
                  </div>
                  <div className="origin-top-left -rotate-90 flex-col justify-start items-center inline-flex">
                    <div className="w-6 h-6 relative  overflow-hidden" />
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[0px] border border-slate-800"></div>
              </div>
            </div>
            <div className="w-[1204px] h-[178px] left-0 top-[366px] absolute flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-6 bg-white justify-start items-start gap-3 inline-flex">
                <div className="w-12 h-12 relative bg-slate-700 rounded-[200px]">
                  <div className="left-[10px] top-[9px] absolute text-slate-400 text-xl font-semibold font-['Inter'] leading-[30px]">
                    NK
                  </div>
                  <img
                    className="w-12 h-12 left-0 top-0 absolute rounded-[200px]"
                    src="https://via.placeholder.com/48x48"
                  />
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-black text-sm font-semibold font-['Inter'] leading-[18px]">
                    New feature alert! 🔔{" "}
                  </div>
                  <div className="self-stretch">
                    <span class="text-black text-sm font-normal font-['Inter'] leading-tight">
                      We’re pleased to introduce the latest enhancements in our{" "}
                    </span>
                    <span class="text-black text-sm font-bold font-['Inter'] leading-tight">
                      templating experience
                    </span>
                    <span class="text-black text-sm font-normal font-['Inter'] leading-tight">
                      .
                    </span>
                  </div>
                  <div className="py-1 justify-start items-start gap-2 inline-flex">
                    <div className="px-3 py-1 bg-[#2e70e8] rounded justify-center items-center flex">
                      <div className="px-1 justify-center items-center gap-2 flex">
                        <div className="text-white text-sm font-medium font-['Inter'] leading-tight">
                          Try now
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs font-normal font-['Inter'] leading-[18px]">
                    2 mins ago
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[0px] border border-slate-800"></div>
              </div>
            </div>
            <div className="w-[1204px] h-[145px] left-0 top-[594px] absolute flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-6 bg-white justify-start items-start gap-3 inline-flex">
                <div className="w-12 h-12 relative bg-slate-700 rounded-[200px]">
                  <div className="left-[10px] top-[9px] absolute text-slate-400 text-xl font-semibold font-['Inter'] leading-[30px]">
                    NK
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-2 inline-flex">
                  <div className="self-stretch text-[#343e4c] text-xs font-semibold font-['Inter'] leading-none tracking-tight">
                    ONBOARDING
                  </div>
                  <div className="opacity-50 text-black/70 text-sm font-semibold font-['Inter'] leading-[18px]">
                    Get Started in 4 Simple Steps ✨
                  </div>
                  <div className="self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">
                    Here are the first steps you can take to make the app feel
                    like yours.
                  </div>
                  <div className="text-slate-400 text-xs font-normal font-['Inter'] leading-[18px]">
                    2 mins ago
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[0px] border border-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[225.07px] h-[223px] left-[1591px] top-[200px] absolute">
          <div className="w-[207.38px] h-[222.48px] pr-1 left-[17.69px] top-0 absolute flex-col justify-start items-start gap-[29px] inline-flex">
            <div className="px-1 flex-col justify-start items-start flex">
              <div className="pr-4 py-2 rounded-md justify-center items-center gap-2 inline-flex overflow-hidden">
                <div className="text-black text-sm font-semibold font-['Inter'] leading-tight">
                  All
                </div>
                <div className="px-2 py-0.5 bg-slate-500/25 rounded-[10px] justify-start items-center flex">
                  <div className="text-center text-black text-xs font-medium font-['Inter'] leading-none">
                    2
                  </div>
                </div>
              </div>
            </div>
            <div className="px-1 flex-col justify-start items-start flex">
              <div className="w-28 h-9 relative rounded-md  overflow-hidden">
                <div className="left-0 top-[8px] absolute text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Mentions
                </div>
                <div className="px-2 py-0.5 left-[72px] top-[8px] absolute bg-slate-500/25 rounded-[10px] justify-start items-center inline-flex">
                  <div className="text-center text-black text-xs font-medium font-['Inter'] leading-none">
                    2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[3px] opacity-0 bg-[#005aff] rounded-tl rounded-tr" />
            </div>
            <div className="px-1 flex-col justify-start items-start flex">
              <div className="pr-4 py-2 rounded-md justify-center items-center gap-2 inline-flex overflow-hidden">
                <div className="text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Unread
                </div>
                <div className="px-2 py-0.5 bg-slate-500/25 rounded-[10px] justify-start items-center flex">
                  <div className="text-center text-black text-xs font-medium font-['Inter'] leading-none">
                    2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[3px] opacity-0 bg-[#005aff] rounded-tl rounded-tr" />
            </div>
          </div>
          <div className="w-[172.90px] h-[0px] left-[5.02px] top-[2.88px] absolute origin-top-left rotate-90 border border-[#0730ff]"></div>
        </div>
      </div>
    </>
  );
}

export default Notification;
