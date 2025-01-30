import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SocialFeed from "../../Social/socialFeed/SocialFeed";
import Post2 from "../../post/post2";
function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="w-[100%] h-[100vh] relative bg-white overflow-hidden">
        <div className="w-[1903px] h-[876px] left-0 top-[87px] absolute">
          <img
            className="w-[0px] h-[0px] left-0 top-0 absolute"
            src="https://via.placeholder.com/0x0"
          />
          <div className="left-[88px] top-[476px] absolute text-black text-2xl font-normal font-['Poppins']">
            Who to follow
          </div>

          <div className="w-[800px] h-[0px] left-[631px] top-[22px] absolute origin-top-left rotate-[89.85deg] border border-black"></div>
          <div className="w-[388.98px] h-[814px] left-[758px] top-[22px] absolute">
            <div className="w-[387.98px] h-[371.94px] left-[1px] top-[93.57px] absolute flex-col justify-start items-start gap-[13px] inline-flex">
              <div className="w-[385.05px] h-[154.89px] relative">
                <div className="w-[385.05px] h-[154.89px] left-0 top-0 absolute bg-white rounded-lg border" />
                <img
                  className="w-[137.44px] h-[154.89px] left-0 top-0 absolute rounded-tl-lg rounded-bl-lg border"
                  src="https://via.placeholder.com/137x155"
                />
                <div className="left-[150.53px] top-[17.45px] absolute text-black text-xl font-extrabold font-['Avenir'] leading-snug">
                  Kyoto, Japan
                </div>
                <div className="left-[151.62px] top-[42.54px] absolute opacity-80 text-black text-xs font-normal font-['Avenir'] leading-snug">
                  1 week ago
                </div>
                <div className="w-[223.61px] left-[152.71px] top-[69.08px] absolute">
                  <span class="text-black text-[13.09px] font-normal font-['Avenir'] leading-snug">
                    Very cultural place and people here are really nice. Being
                    veg it’s hard to find a place here easily but the....{" "}
                  </span>
                  <span class="text-black text-[13.09px] font-extrabold font-['Avenir'] leading-snug">
                    Read more
                  </span>
                </div>
                <div className="w-[50.18px] h-[22px] left-[321.79px] top-[17.45px] absolute">
                  <div className="w-[50.18px] h-[20.73px] left-0 top-0 absolute bg-white rounded border" />
                  <div className="left-[24px] top-[-0px] absolute text-black text-xs font-normal font-['Avenir'] uppercase leading-snug tracking-tight">
                    3.9
                  </div>
                  <div className="w-[13.09px] h-[13.09px] left-[8.73px] top-[3.27px] absolute  overflow-hidden" />
                </div>
              </div>

              <div className="w-[385.05px] h-[154.89px] relative">
                <div className="w-[385.05px] h-[154.89px] left-0 top-0 absolute bg-white rounded-lg border" />
                <img
                  className="w-[137.44px] h-[154.89px] left-0 top-0 absolute rounded-tl-lg rounded-bl-lg border"
                  src="https://via.placeholder.com/137x155"
                />
                <div className="left-[150.53px] top-[17.45px] absolute text-black text-xl font-extrabold font-['Avenir'] leading-snug">
                  Barcelona, Spain
                </div>
                <div className="left-[151.62px] top-[42.54px] absolute opacity-80 text-black text-xs font-normal font-['Avenir'] leading-snug">
                  2 week ago
                </div>
                <div className="w-[223.61px] left-[152.71px] top-[69.08px] absolute">
                  <span class="text-black text-[13.09px] font-normal font-['Avenir'] leading-snug">
                    Loved the scenic view, the paradors where I stayed, the
                    added story behind those beautiful buildings....{" "}
                  </span>
                  <span class="text-black text-[13.09px] font-extrabold font-['Avenir'] leading-snug">
                    Read more
                  </span>
                </div>
                <div className="w-[50.18px] h-[22px] left-[321.79px] top-[17.45px] absolute">
                  <div className="w-[50.18px] h-[20.73px] left-0 top-0 absolute bg-white rounded border" />
                  <div className="left-[24px] top-0 absolute text-black text-xs font-normal font-['Avenir'] uppercase leading-snug tracking-tight">
                    4.5
                  </div>
                  <div className="w-[13.09px] h-[13.09px] left-[8.73px] top-[3.27px] absolute  overflow-hidden" />
                </div>
              </div>
            </div>
            <div className="w-[387.98px] h-[371.94px] left-0 top-[442.06px] absolute flex-col justify-start items-start gap-[13px] inline-flex">
              <div className="w-[385.05px] h-[154.89px] relative">
                <div className="w-[385.05px] h-[154.89px] left-0 top-0 absolute bg-white rounded-lg border" />
                <img
                  className="w-[137.44px] h-[154.89px] left-0 top-0 absolute rounded-tl-lg rounded-bl-lg border"
                  src="https://via.placeholder.com/137x155"
                />
                <div className="left-[150.53px] top-[17.45px] absolute text-black text-xl font-extrabold font-['Avenir'] leading-snug">
                  Kyoto, Japan
                </div>
                <div className="left-[151.62px] top-[42.54px] absolute opacity-80 text-black text-xs font-normal font-['Avenir'] leading-snug">
                  1 week ago
                </div>
                <div className="w-[223.61px] left-[152.71px] top-[69.08px] absolute">
                  <span class="text-black text-[13.09px] font-normal font-['Avenir'] leading-snug">
                    Very cultural place and people here are really nice. Being
                    veg it’s hard to find a place here easily but the....{" "}
                  </span>
                  <span class="text-black text-[13.09px] font-extrabold font-['Avenir'] leading-snug">
                    Read more
                  </span>
                </div>

                <div className="w-[50.18px] h-[22px] left-[321.79px] top-[17.45px] absolute">
                  <div className="w-[50.18px] h-[20.73px] left-0 top-0 absolute bg-white rounded border" />
                  <div className="left-[24px] top-[-0px] absolute text-black text-xs font-normal font-['Avenir'] uppercase leading-snug tracking-tight">
                    3.9
                  </div>
                  <div className="w-[13.09px] h-[13.09px] left-[8.73px] top-[3.27px] absolute  overflow-hidden" />
                </div>
              </div>

              <div className="w-[385.05px] h-[154.89px] relative">
                <div className="w-[385.05px] h-[154.89px] left-0 top-0 absolute bg-white rounded-lg border" />
                <img
                  className="w-[137.44px] h-[154.89px] left-0 top-0 absolute rounded-tl-lg rounded-bl-lg border"
                  src="https://via.placeholder.com/137x155"
                />
                <div className="left-[150.53px] top-[17.45px] absolute text-black text-xl font-extrabold font-['Avenir'] leading-snug">
                  Barcelona, Spain
                </div>
                <div className="left-[151.62px] top-[42.54px] absolute opacity-80 text-black text-xs font-normal font-['Avenir'] leading-snug">
                  2 week ago
                </div>
                <div className="w-[223.61px] left-[152.71px] top-[69.08px] absolute">
                  <span class="text-black text-[13.09px] font-normal font-['Avenir'] leading-snug">
                    Loved the scenic view, the paradors where I stayed, the
                    added story behind those beautiful buildings....{" "}
                  </span>
                  <span class="text-black text-[13.09px] font-extrabold font-['Avenir'] leading-snug">
                    Read more
                  </span>
                </div>
                <div className="w-[50.18px] h-[22px] left-[321.79px] top-[17.45px] absolute">
                  <div className="w-[50.18px] h-[20.73px] left-0 top-0 absolute bg-white rounded border" />
                  <div className="left-[24px] top-0 absolute text-black text-xs font-normal font-['Avenir'] uppercase leading-snug tracking-tight">
                    4.5
                  </div>
                  <div className="w-[13.09px] h-[13.09px] left-[8.73px] top-[3.27px] absolute  overflow-hidden" />
                </div>
              </div>
            </div>
            <div className="w-[381.65px] h-[40.22px] left-[1px] top-0 absolute justify-start items-center gap-[37px] inline-flex">
              <div
                onClick={() => handleClick("Blogs")}
                className="text-black text-[13.09px] font-normal font-['Abel'] uppercase leading-snug tracking-wider cursor-pointer"
              >
                Blogs
              </div>
              <div
                onClick={() => handleClick("Photos")}
                className="text-black text-[13.09px] font-normal font-['Abel'] uppercase leading-snug tracking-wider cursor-pointer"
              >
                Photos
              </div>
              <div
                onClick={() => handleClick("Reviews")}
                className="w-[80.72px] h-[34.91px] relative cursor-pointer"
              >
                <div className="w-[80.72px] h-[34.91px] left-0 top-0 absolute bg-[#81f0e5] rounded border" />
                <div className="left-[13px] top-[6px] absolute text-black text-[13.09px] font-normal font-['Abel'] uppercase leading-snug tracking-wider">
                  Reviews
                </div>
              </div>
              <div
                onClick={() => handleClick("Forums")}
                className="text-black text-[13.09px] font-normal font-['Abel'] uppercase leading-snug tracking-wider cursor-pointer"
              >
                Forums
              </div>
            </div>{" "}
          </div>

          <div className="w-[800px] h-[0px] left-[1253px] top-[22px] absolute origin-top-left rotate-[90.08deg] border border-black"></div>
          <div className="w-[445.22px] h-[386px] left-[88px] top-[61px] absolute">
            <div className="w-[281.22px] h-[54.79px] left-[164px] top-[78px] absolute">
              <div className="w-[60.99px] h-[54.79px] left-0 top-0 absolute text-center">
                <span class="text-black text-xl font-bold font-['Roboto'] leading-snug">
                  10K
                  <br />
                </span>
                <span class="text-[#959595] text-sm font-light font-['Roboto'] leading-none tracking-tight">
                  Likes
                </span>
              </div>
              <div className="w-[67.76px] h-[48.21px] left-[100.51px] top-0 absolute text-center">
                <span class="text-black text-xl font-bold font-['Roboto']">
                  528
                  <br />
                </span>
                <span class="text-[#959595] text-sm font-light font-['Roboto'] tracking-tight">
                  Following
                </span>
              </div>
              <div className="w-[67.76px] h-[48.21px] left-[213.45px] top-0 absolute text-center">
                <span class="text-black text-xl font-bold font-['Roboto']">
                  1.2K
                  <br />
                </span>
                <span class="text-[#959595] text-sm font-light font-['Roboto'] tracking-tight">
                  Followers
                </span>
              </div>
            </div>

            <img
              className="w-[123.19px] h-[119.52px] left-0 top-0 absolute rounded-full"
              src="https://via.placeholder.com/123x120"
            />
            <div className="w-[436px] h-[163px] left-[1px] top-[174px] absolute flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-black text-[26.18px] font-extrabold font-['Avenir'] leading-snug">
                Liam Ford
              </div>
              <div className="self-stretch text-black text-xl font-normal font-['Actor'] leading-snug">
                Hey! I love to travel and explore and have visited over more
                than 50+ countries until now!
              </div>
              <div className="self-stretch opacity-70 text-black text-base font-normal font-['Actor'] leading-snug">
                Sydney, Australia
              </div>
            </div>

            <div className="w-[412px] h-[49px] left-[1px] top-[337px] absolute justify-start items-center gap-[11px] inline-flex">
              <button
                onClick={() => alert("You clicked Programmer!")}
                className="w-[100px] h-[34px] bg-black rounded-[109.08px] border border-[#4d4d4d] flex items-center justify-center"
              >
                <span className="text-white text-[13.09px] font-normal font-['Inter'] leading-snug">
                  Programmer
                </span>
              </button>

              <button
                onClick={() => alert("You clicked Psychologist!")}
                className="w-[100px] h-[34px] bg-black rounded-[109.08px] border border-[#4d4d4d] flex items-center justify-center"
              >
                <span className="text-white text-[13.09px] font-normal font-['Inter'] leading-snug">
                  Psychologist
                </span>
              </button>

              <button
                onClick={() => alert("You clicked Polymath!")}
                className="w-[82px] h-[34px] bg-black rounded-[109.08px] border border-[#4d4d4d] flex items-center justify-center"
              >
                <span className="text-white text-[13.09px] font-normal font-['Inter'] leading-snug">
                  Polymath
                </span>
              </button>
            </div>
          </div>

          <div className="w-[28.97px] h-[190.95px] left-[89px] top-[538px] absolute flex-col justify-start items-start gap-5 inline-flex">
            <div className="w-[431px] h-[54.60px] relative">
              <div className="w-[44.47px] h-10 left-0 top-[0.67px] absolute bg-[#342a2a] rounded-full" />
              <div className="w-[147.87px] h-5 left-[70.01px] top-0 absolute text-black text-base font-semibold font-['Poppins']">
                Zolo
              </div>
              <div className="w-[90.82px] h-[31.46px] left-[340.18px] top-[10px] absolute">
                <div className="w-[90.82px] h-[31.46px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
                <div className="w-[44.47px] h-5 left-[25.57px] top-[7.70px] absolute text-black text-xs font-normal font-['Poppins']">
                  Follow
                </div>
              </div>
              <div className="w-[244.08px] h-[33.71px] left-[69.53px] top-[20.89px] absolute">
                <span class="text-black text-[10px] font-normal font-['Poppins']">
                  {" "}
                </span>
                <span class="text-black text-[13px] font-normal font-['Poppins']">
                  HI i am Zolo crafting code and stories ...
                </span>
              </div>
            </div>
            <div className="w-[431px] h-[54.60px] relative">
              <div className="w-[44.47px] h-10 left-0 top-[0.67px] absolute bg-[#342a2a] rounded-full" />
              <div className="w-[147.87px] h-5 left-[70.01px] top-0 absolute text-black text-base font-semibold font-['Poppins']">
                Zolo
              </div>
              <div className="w-[90.82px] h-[31.46px] left-[340.18px] top-[10px] absolute">
                <div className="w-[90.82px] h-[31.46px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
                <div className="w-[44.47px] h-5 left-[25.57px] top-[7.70px] absolute text-black text-xs font-normal font-['Poppins']">
                  Follow
                </div>
              </div>
              <div className="w-[244.08px] h-[33.71px] left-[69.53px] top-[20.89px] absolute">
                <span class="text-black text-[10px] font-normal font-['Poppins']">
                  {" "}
                </span>
                <span class="text-black text-[13px] font-normal font-['Poppins']">
                  HI i am Zolo crafting code and stories ...
                </span>
              </div>
            </div>
            <div className="w-[431px] h-[54.60px] relative">
              <div className="w-[44.47px] h-10 left-0 top-[0.67px] absolute bg-[#342a2a] rounded-full" />
              <div className="w-[147.87px] h-5 left-[70.01px] top-0 absolute text-black text-base font-semibold font-['Poppins']">
                Zolo
              </div>
              <div className="w-[90.82px] h-[31.46px] left-[340.18px] top-[10px] absolute">
                <div className="w-[90.82px] h-[31.46px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
                <div className="w-[44.47px] h-5 left-[25.57px] top-[7.70px] absolute text-black text-xs font-normal font-['Poppins']">
                  Follow
                </div>
              </div>
              <div className="w-[244.08px] h-[33.71px] left-[69.53px] top-[20.89px] absolute">
                <span class="text-black text-[10px] font-normal font-['Poppins']">
                  {" "}
                </span>
                <span class="text-black text-[13px] font-normal font-['Poppins']">
                  HI i am Zolo crafting code and stories ...
                </span>
              </div>
            </div>
            <div className="w-[431px] h-[54.60px] relative">
              <div className="w-[44.47px] h-10 left-0 top-[0.67px] absolute bg-[#342a2a] rounded-full" />
              <div className="w-[147.87px] h-5 left-[70.01px] top-0 absolute text-black text-base font-semibold font-['Poppins']">
                Zolo
              </div>
              <div className="w-[90.82px] h-[31.46px] left-[340.18px] top-[10px] absolute">
                <div className="w-[90.82px] h-[31.46px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
                <div className="w-[44.47px] h-5 left-[25.57px] top-[7.70px] absolute text-black text-xs font-normal font-['Poppins']">
                  Follow
                </div>
              </div>
              <div className="w-[244.08px] h-[33.71px] left-[69.53px] top-[20.89px] absolute">
                <span class="text-black text-[10px] font-normal font-['Poppins']">
                  {" "}
                </span>
                <span class="text-black text-[13px] font-normal font-['Poppins']">
                  HI i am Zolo crafting code and stories ...
                </span>
              </div>
            </div>
          </div>
          <div className="w-[463.35px] h-[703px] left-[1363px] top-[7px] absolute">
            <div className="w-[145.69px] left-[159.93px] top-0 absolute text-black text-xl font-normal font-['Abel'] uppercase leading-snug tracking-wider">
              Recent album
            </div>
            <div className="w-[463.35px] h-[661px] left-0 top-[42px] absolute">
              <div className="w-[463.35px] h-[661px] left-0 top-40 absolute bg-white" />

              <div className="w-[430.49px] h-[627.95px] left-[10.53px] top-[46.52px] absolute justify-start items-start gap-[13px] inline-flex">
                <img
                  className="w-[200px] h-[200px]"
                  src="https://via.placeholder.com/200x200"
                />
                <img
                  className="w-[200px] h-[200px]"
                  src="https://via.placeholder.com/200x200"
                />

                <div className="w-[830.49px] h-[627.95px] left-[0px] top-[216.52px] absolute justify-start items-start gap-[13px] inline-flex">
                  <img
                    className="w-[200px] h-[200px]"
                    src="https://via.placeholder.com/200x200"
                  />
                  <img
                    className="w-[200px] h-[200px]"
                    src="https://via.placeholder.com/200x200"
                  />
                </div>
                <div className="w-[830.49px] h-[627.95px] left-[0px] top-[432.52px] absolute justify-start items-start gap-[13px] inline-flex">
                  <img
                    className="w-[200px] h-[200px]"
                    src="https://via.placeholder.com/200x200"
                  />
                  <img
                    className="w-[200px] h-[200px]"
                    src="https://via.placeholder.com/200x200"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            class="left-[1px] top-[-21px]     bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
          >
            <div class=" bg-[#81f0e5] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#000000"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <p class="translate-x-2"></p>
          </button>
        </div>

        <div className="w-[139px] h-[37px] left-[1724px] top-[934px] absolute justify-start items-center gap-8 inline-flex">
          <div className="w-6 h-6 relative  overflow-hidden" />
        </div>

        <div className="w-[1903px] h-[65px] left-0 top-0 absolute">
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
                  <div className="w-8 h-9 relative overflow-hidden" />
                  {isEditing ? (
                    <input
                      type="text"
                      autoFocus
                      placeholder="Type to search..."
                      className="text-black text-xl font-normal font-['Poppins'] outline-none border-b border-gray-300 focus:border-black transition-all"
                      onBlur={() => setIsEditing(false)}
                    />
                  ) : (
                    <div
                      className="text-black text-xl font-normal font-['Poppins'] cursor-pointer"
                      onClick={() => setIsEditing(true)}
                    >
                      Search
                    </div>
                  )}
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
        </div>
      </div>
    </>
  );
}

export default Profile;
