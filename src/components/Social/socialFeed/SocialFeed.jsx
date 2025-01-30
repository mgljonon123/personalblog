import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { NavigationTabs } from "./components/NavigationTabs";
import { PostCard } from "./components/PostCard";
import { PostCarddefault } from "./posts/PostCarddefault";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BlogPost } from "../../blog/components/BlogPost";

function SocialFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const initialPosts = [
        {
          id: 0,
          title: "",
          story: "",
          tags: [],
          image: null,
          avatarColor: "bg-gray-500",
        },
      ];
      setPosts(storedPosts.length > 0 ? storedPosts : initialPosts);
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  return (
    <main className="flex overflow-hidden flex-col bg-white" role="main">
      <Header />
      <div className="flex flex-col self-center mt-7 w-full max-w-[1563px] max-md:max-w-full">
        <NavigationTabs />
        <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <h1 className="mb-[30px] ml-[24px] font-bold">Your Posts</h1>
          <div className="flex gap-5 max-md:flex-col">
            <section
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              aria-label="Posts"
            >
              <div className="ml-[25px]">
                {posts.length === 0 ? (
                  <p>No posts to display.</p>
                ) : (
                  posts.map((post) => (
                    <div
                      key={post.id}
                      className="border border-gray-300 rounded-lg p-4 mb-6 shadow-md bg-white"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-gray-500 mr-4"></div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-700">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Front-end Dev | Suzulaab
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{post.story}</p>
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full h-40 object-cover rounded-md mb-4"
                        />
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-lg"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-gray-500 text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 9l-5 5m0 0l5 5m-5-5H3"
                              />
                            </svg>
                            {post.likes} likes
                          </span>
                          <span className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                            {post.comments} comments
                          </span>
                        </div>
                        <button className="text-gray-700 hover:underline">
                          More...
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="ml-[30px] mt-[70px]">
                <Link to={"/BlogPost"} element={<BlogPost></BlogPost>}>
                  <PostCarddefault></PostCarddefault>
                </Link>
              </div>
            </section>

            <aside
              className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
              role="complementary"
            ></aside>
          </div>
        </div>
      </div>
      <div className="w-[657px] h-[748px] absolute left-[1200px] top-[150px] flex-col justify-start items-start gap-10 inline-flex">
        <div className="w-[571px] h-[382px] relative">
          <div className="w-[563px] h-[239px] left-[8px] top-[143px] absolute flex-col justify-start items-start gap-5 inline-flex">
            <div className="w-[532px] h-[60.75px] relative">
              <div className="w-[55px] h-[55px] left-0 top-[5.75px] absolute bg-[#342a2a] rounded-full" />
              <div className="w-[188px] h-[21px] left-[81px] top-0 absolute text-black text-base font-semibold font-['Poppins']">
                Jonon Tuguldur
              </div>
              <div className="w-16 h-8 left-[468px] top-[16px] absolute">
                <div className="w-16 h-8 left-0 top- absolute bg-[#d9d9d9] rounded-[20px] border border-black" />
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
    </main>
  );
}

export default SocialFeed;
