import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";
import Post2 from "./post2";
import { CgAdd } from "react-icons/cg";
import SidebarNavigation from "../../SidebarNavigation";

function Post1() {
  const [isPublished, setIsPublished] = useState(false);
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  // Save post data in localStorage or pass to next page
  const handlePublish = () => {
    if (title && story) {
      setIsPublished(true);
      alert("Post Published!");

      // Save data in localStorage
      const postData = { title, story };
      localStorage.setItem("post", JSON.stringify(postData));

      // Optionally, you can clear the input fields after publishing
      setTitle("");
      setStory("");
    } else {
      alert("Please fill in both title and story!");
    }
  };

  return (
    <>
      <div className="w-[100%] h-[990px] relative bg-white overflow-hidden">
        <div className="w-[1903px] h-[65px] left-0 top-0 absolute">
          <div className="w-[1903px] h-[65px] left-0 top-0 absolute bg-[#d9d9d9]" />
          <div className="w-[1710.06px] left-[96.47px] top-[5px] absolute justify-between items-center inline-flex">
            <div className="justify-start items-center gap-9 flex">
              <div className="text-black text-4xl font-bold font-['Poppins'] mb-[10px]">
                Home
              </div>
              <div className="justify-start items-center gap-3.5 flex">
                <div className="w-8 h-9 relative overflow-hidden" />
                <div className="text-black text-xl font-normal font-['Poppins']">
                  Search
                </div>
              </div>
            </div>

            <div className="justify-center items-center gap-10 flex">
              <div className="justify-center items-center flex">
                <div className="text-black text-xl font-normal font-['Poppins'] mr-[150px] mb-[10px]">
                  Make Post
                </div>
              </div>
              <div className="">
                <SidebarNavigation />
              </div>
            </div>
          </div>
        </div>

        <IoNotificationsOutline className="left-[1605px] top-[20px] absolute text-[27px] text-" />
        <LuFilePenLine className="left-[1520px] top-[20px] absolute text-[27px] text-" />
        <IoSearchOutline className="left-[230px] top-[20px] absolute text-3xl text-" />

        <CgAdd className="left-[350px] top-[244px] absolute text-3xl text-" />
        <CgAdd className="left-[350px] top-[339px] absolute text-3xl text-" />
        <CgAdd className="left-[350px] top-[429px] absolute text-3xl text-" />

        {/* Title input */}
        <div className="w-[202.31px] h-[86px] left-[356px] top-[214px] absolute">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[147.40px] h-[86px] left-[54.91px] top-0 absolute opacity-50 text-black text-5xl font-medium font-['Inter']"
            placeholder="Title"
          />
        </div>

        {/* Story input */}
        <div className="w-[526px] h-[86px] left-[356px] top-[307.41px] absolute">
          <input
            type="text"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-[471.09px] h-[86px] left-[54.91px] top-0 absolute opacity-50 text-black text-5xl font-medium font-['Inter']"
            placeholder="Tell your story"
          />
        </div>

        {/* Publish button */}
        <div
          className="w-[227px] h-[62px] p-3 left-[1085px] top-[242px] absolute bg-[#3a8e33] rounded-lg border border-white justify-center items-center gap-2 inline-flex overflow-hidden"
          onClick={handlePublish}
        >
          <Link to={"/Post2"} element={<Post2 />}>
            <button className="text-neutral-100 text-[25px] font-normal font-['Inter'] leading-none">
              Publish
            </button>
          </Link>
        </div>

        {/* Publish status */}
        <div className="w-[261.55px] h-[53.38px] left-[356px] top-[418.62px] absolute">
          <div
            className={`w-[206.64px] h-[53.38px] left-[54.91px] top-0 absolute ${
              isPublished ? "bg-[#4caf50]" : "bg-[#d9d9d9]"
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default Post1;
