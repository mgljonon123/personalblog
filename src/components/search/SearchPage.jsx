// import * as React from "react";
// import { Header } from "./components/Header";
// import { ProfileCard } from "./components/ProfileCard";
// import { PostCard } from "./components/PostCard";
// import { SuggestedUser } from "./components/SuggestedUser";

// const suggestedUsers = [
//   {
//     name: "Jonon Tuguldur",
//     description: "HI i am Jonon Tuguldur crafting code and stories ...",
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc81901f5f3488348e70c30e67e4e4de75f7f0d70e086194f87545153bff1cf3?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
//   },
//   {
//     name: "Jonon Tuguldur",
//     description: "HI i am Jonon Tuguldur crafting code and stories ...",
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5384bbbf43da809c2bce8d58d7d81994599cf75b040d0bf6c7a75426d8a5042?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
//   },
//   {
//     name: "Jonon Tuguldur",
//     description: "HI i am Jonon Tuguldur crafting code and stories ...",
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5384bbbf43da809c2bce8d58d7d81994599cf75b040d0bf6c7a75426d8a5042?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
//   },
// ];

// export function SearchPage() {
//   return (
//     <main className="flex overflow-hidden flex-col bg-white">
//       <Header />
//       <div className="flex flex-col self-center mt-14 ml-10 w-full max-w-[1498px] max-md:mt-10 max-md:max-w-full">
//         <h2 className="self-start text-3xl text-black">Searched Text : </h2>
//         <div className="flex flex-wrap gap-5 justify-between items-start mt-2.5 max-md:max-w-full">
//           <div className="flex flex-col mt-12 max-md:mt-10 max-md:max-w-full">
//             <ProfileCard
//               name="UI/UX Dev"
//               description="Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design"
//               followers="2.5M"
//             />
//             <PostCard
//               author="Front end Dev"
//               content="You need to figure it out yourself. It's a experience that will teach you more than 10 books. You will learn what endurance and fail means..."
//               likes="1.5k"
//               image="https://cdn.builder.io/api/v1/image/assets/TEMP/5d8f340dce18821eba35c8072d009682f7166ecb602ac6dc4b0e31a2e9b29e0d?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
//             />
//           </div>
//           <div
//             className="shrink-0 mt-3 w-px border border-black border-solid h-[798px]"
//             role="separator"
//           />
//           <aside className="flex flex-col items-start text-black h-[748px] max-md:max-w-full">
//             <section className="flex flex-col pb-12 max-w-full w-[571px]">
//               <h2 className="self-start text-2xl">Who to follow</h2>
//               <div className="flex z-10 flex-col items-start mt-6 w-full min-h-[265px] max-md:max-w-full">
//                 {suggestedUsers.map((user, index) => (
//                   <SuggestedUser key={index} {...user} />
//                 ))}
//               </div>
//             </section>
//             <section className="mt-10 max-w-full text-2xl rounded-none w-[271px]">
//               <h2>Recommended Topics</h2>
//               <div className="flex flex-wrap gap-5 justify-between mt-10 max-w-full text-base rounded-xl w-[563px]">
//                 <div className="flex flex-col leading-none whitespace-nowrap">
//                   <button className="text-left">Programming</button>
//                   <button className="self-start mt-10 max-md:mt-10">
//                     Psychology
//                   </button>
//                 </div>
//                 <div className="flex flex-col whitespace-nowrap">
//                   <button className="px-6 py-0.5 rounded-xl bg-stone-500 max-md:px-5">
//                     Technology
//                   </button>
//                   <button className="self-center mt-9 leading-none">
//                     Python
//                   </button>
//                 </div>
//                 <div className="flex flex-col">
//                   <button className="self-start">Gaming</button>
//                   <button className="mt-9 leading-none">JavaScript</button>
//                 </div>
//               </div>
//             </section>
//             <section className="flex flex-col items-start self-stretch pr-10 pb-11 mt-10 w-full max-md:pr-5 max-md:max-w-full">
//               <h2 className="text-xl">Reading List</h2>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/f58d747b4ed68948d51672293cb1e3d95e9711affa4ec2e757e8b936f7fb539c?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
//                 className="object-contain z-10 mt-10 ml-16 aspect-[1.23] w-[21px] max-md:mt-10 max-md:ml-2.5"
//                 alt="Reading list icon"
//               />
//               <p className="self-stretch mt-0 text-sm max-md:max-w-full">
//                 Click the bookmark icon on any story to easily add it to your
//                 reading list or a custom list that you can share.
//               </p>
//             </section>
//           </aside>
//         </div>
//       </div>
//     </main>
//   );
// }
import React from "react";
import SidebarNavigation from "../../SidebarNavigation";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Notification from "../notification/notification";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";
import SocialFeed from "../Social/socialFeed/SocialFeed";
import Post2 from "../post/post2";
const SearchPage = () => {
  const inp = localStorage.getItem("input_data");
  return (
    <div className="w-[1903px] h-[990px] relative bg-white  overflow-hidden">
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
              <div className="w-6 h-6 relative  overflow-hidden" />
              <div className="text-black text-xl font-normal font-['Poppins']">
                Search
              </div>
            </div>
          </div>
          <div className="justify-center items-center gap-10 flex">
            <div className="justify-center items-center gap-[17px] flex">
              <Link to={"/Post2"} element={<Post2></Post2>}>
                {" "}
                <div className="text-black text-xl font-normal font-['Poppins'] mr-[60px]">
                  Make Post
                </div>
              </Link>
            </div>

            <Link to={"/Notification"} element={<Notification></Notification>}>
              <IoNotificationsOutline className="left-[1605px] top-[10px] absolute text-[27px] " />
            </Link>
            <LuFilePenLine className="left-[1545px] top-[10px] absolute text-[27px] text-" />
            <IoSearchOutline className="left-[145px] top-[10px] absolute text-3xl text-" />
            <div>
              <SidebarNavigation></SidebarNavigation>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[718px] h-[809px] left-[1022px] top-[181px] absolute">
        <div className="w-[798px] h-[0px] left-0 top-[11px] absolute origin-top-left rotate-90 border border-black"></div>
        <div className="w-[657px] h-[748px] left-[61px] top-0 absolute flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-[571px] h-[382px] relative">
            <div className="w-[563px] h-[239px] left-[8px] top-[143px] absolute flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-[532px] h-[60.75px] relative">
                <div className="w-[55px] h-[55px] left-0 top-[5.75px] absolute bg-[#342a2a] rounded-full" />
                <div className="w-[188px] h-[21px] left-[81px] top-0 absolute text-black text-base font-semibold font-['Poppins']">
                  Jonon Tuguldur
                </div>
                <div className="w-16 h-8 left-[468px] top-[16px] absolute">
                  <div className="w-16 h-8 left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
                  <div className="left-[13px] top-[5.71px] absolute text-black text-xs font-normal font-['Poppins']">
                    Follow
                  </div>
                </div>
                <div className="w-[317px] h-7 left-[107px] top-[28px] absolute text-black text-[13px] font-['Poppins']">
                  {" "}
                  HI i am Jonon Tuguldur crafting code <br /> and stories ...
                </div>
              </div>
            </div>
            <div className="w-[563px] h-[265px] left-[8px] top-[59px] absolute flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-[532px] h-[60.75px] relative">
                <div className="w-[55px] h-[55px] left-0 top-[5.75px] absolute bg-[#342a2a] rounded-full" />
                <div className="w-[188px] h-[21px] left-[81px] top-0 absolute text-black text-base font-semibold font-['Poppins']">
                  Jonon Tuguldur
                </div>
                <div className="w-16 h-8 left-[468px] top-[16px] absolute">
                  <div className="w-16 h-8 left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
                  <div className="left-[13px] top-[5.71px] absolute text-black text-xs font-normal font-['Poppins']">
                    Follow
                  </div>
                </div>
                <div className="w-[317px] h-7 left-[107px] top-[28px] absolute text-black text-[13px] font-['Poppins']">
                  {" "}
                  HI i am Jonon Tuguldur crafting code <br /> and stories ...
                </div>
              </div>
            </div>
            <div className="w-[563px] h-[105px] left-[8px] top-[229px] absolute flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-[532px] h-[60.75px] relative">
                <div className="w-[55px] h-[55px] left-0 top-[5.75px] absolute bg-[#342a2a] rounded-full" />
                <div className="w-[188px] h-[21px] left-[81px] top-0 absolute text-black text-base font-semibold font-['Poppins']">
                  Jonon Tuguldur
                </div>
                <div className="w-16 h-8 left-[468px] top-[16px] absolute">
                  <div className="w-16 h-8 left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
                  <div className="left-[13px] top-[5.71px] absolute text-black text-xs font-normal font-['Poppins']">
                    Follow
                  </div>
                </div>
                <div className="w-[317px] h-7 left-[107px] top-[28px] absolute text-black text-[13px] font-['Poppins']">
                  {" "}
                  HI i am Jonon Tuguldur crafting code <br /> and stories ...
                </div>
              </div>
            </div>
            <div className="w-[210.10px] left-0 top-0 absolute text-black text-2xl font-normal font-['Poppins']">
              Who to follow
            </div>
          </div>
          <div className="text-black text-2xl font-normal font-['Poppins']">
            Recommended Topics
          </div>
          <div className="w-[563px] h-20 relative">
            <div className="left-0 top-[61px] absolute text-black text-base font-normal font-['Poppins'] leading-[19px]">
              Phsychology
            </div>
            <div className="w-[142px] h-[27px] left-[214px] top-0 absolute bg-[#a46f6f] rounded-[10px]" />
            <div className="left-[238px] top-[1px] absolute text-black text-base font-normal font-['Poppins']">
              Technology
            </div>
            <div className="left-[251px] top-[61px] absolute text-black text-base font-normal font-['Poppins'] leading-[19px]">
              Python
            </div>
            <div className="left-[474px] top-[61px] absolute text-black text-base font-normal font-['Poppins'] leading-[19px]">
              Java Script
            </div>
            <div className="left-[1px] top-[1px] absolute text-black text-base font-normal font-['Poppins'] leading-[19px]">
              Programming
            </div>
            <div className="left-[474px] top-[1px] absolute text-black text-base font-normal font-['Poppins']">
              Gaming
            </div>
          </div>
          <div className="self-stretch h-[137px] relative">
            <div className="w-[319.19px] h-[33.33px] left-0 top-0 absolute text-black text-xl font-normal font-['Poppins']">
              Reading List
            </div>
            <div className="w-[657px] h-[75.56px] left-0 top-[61.44px] absolute text-black text-sm font-normal font-['Poppins']">
              Click the on any story to easily add it to your reading list or a
              custom list that you can share.
            </div>
            <div className="w-[21px] h-[17px] left-[64px] top-[62px] absolute  overflow-hidden" />
          </div>
        </div>
      </div>
      <div className="left-[242px] top-[123px] absolute text-black text-[32px] font-normal font-['Poppins'] flex gap-[20px]">
        Searched Text : <h1 className="text-blue">{inp}</h1>
      </div>
      <div className="w-[736.15px] h-[551px] left-[242px] top-[229px] absolute">
        <div className="w-[673.08px] h-[159.59px] left-0 top-0 absolute">
          <div className="w-[670.08px] h-[93.59px] left-[3px] top-[66px] absolute">
            <div className="w-[72.84px] h-[70.24px] left-0 top-[19.16px] absolute bg-black rounded-full" />
            <div className="w-[84.75px] h-[25.54px] left-[113.89px] top-0 absolute text-black text-[13px] font-normal font-['Poppins']">
              UI/UX Dev
            </div>
            <div className="w-[331.07px] left-[116.54px] top-[39.59px] absolute text-black text-xs font-light font-['Poppins']">
              Web development refers to the creating, building, and maintaining
              of websites. It includes aspects such as web design
            </div>
            <div className="w-[84.75px] h-[35.76px] left-[585.33px] top-[17.88px] absolute">
              <div className="w-[84.75px] h-[35.76px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
              <button className="left-[23.22px] top-[9.39px] absolute text-black text-xs font-normal font-['Poppins']">
                Follow
              </button>
            </div>
            <div className="w-7 h-[23px] left-[324px] top-[1px] absolute opacity-50 text-black text-xs font-normal font-['Poppins']">
              2.5M
            </div>
            <div className="w-[18.54px] h-[17.88px] left-[371px] top-[1px] absolute opacity-50  overflow-hidden" />
          </div>
          <div className="left-0 top-0 absolute text-black text-2xl font-normal font-['Poppins']">
            People
          </div>
        </div>
        <div className="w-[733.15px] h-[275px] left-[3px] top-[276px] absolute">
          <div className="w-[733.15px] h-[189px] left-0 top-[86px] absolute">
            <div className="w-[55.63px] h-[50px] left-0 top-[1px] absolute bg-[#513939] rounded-full" />
            <img
              className="w-[194.69px] h-[117px] left-[538.46px] top-[11px] absolute"
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww"
            />
            <div className="w-[436.11px] h-[189px] left-[76.76px] top-0 absolute">
              <div className="w-[422px] left-[0.24px] top-[60px] absolute text-black text-base font-['Poppins']">
                You need to figure it out yourself. It's a experience that will
                teach you more than 10 books. You will learn what endurance and
                fail means...
              </div>
              <div className="w-[434.99px] h-6 left-[1.11px] top-[165px] absolute">
                <div className="w-[48.95px] h-6 left-0 top-0 absolute">
                  <div className="w-[24.48px] left-[24.48px] top-0 absolute text-black text-base font-['Poppins']"></div>
                  <div className="w-[17px] h-[18px] left-0 top-[1px] absolute  overflow-hidden" />
                </div>
                <div className="left-[319px] top-0 absolute justify-start items-center gap-3 inline-flex">
                  <div className="w-4 h-4 relative  overflow-hidden" />
                  <div className="w-4 h-4 relative  overflow-hidden" />
                  <div className="w-4 h-4 relative  overflow-hidden" />
                </div>
              </div>
              <div className="w-[82.33px] h-12 left-0 top-0 absolute">
                <div className="w-[75.65px] left-0 top-0 absolute text-black text-[10px] font-['Poppins']">
                  Front end Dev
                </div>
                <div className="w-[82.33px] left-0 top-[24px] absolute text-black text-base font-normal font-['Poppins']">
                  Suzulaab
                </div>
                <div className="w-[81.21px] h-[0px] left-[1.11px] top-[48px] absolute border border-black"></div>
                <div className="w-3 h-[0px] left-[1.11px] top-[14px] absolute origin-top-left rotate-90 border border-black/60"></div>
              </div>
            </div>
          </div>
          <div className="left-0 top-0 absolute text-black text-2xl font-normal font-['Poppins']">
            Posts
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
