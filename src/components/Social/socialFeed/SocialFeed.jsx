import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { NavigationTabs } from "./components/NavigationTabs";
import { PostCard } from "./components/PostCard";

function SocialFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const initialPosts = [
        {
          id: 0,
          title: "Welcome to the Social Feed!",
          story: "This is a static post that welcomes users to the platform.",
          tags: ["welcome", "socialfeed"],
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
          <div className="flex gap-5 max-md:flex-col">
            <section
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              aria-label="Posts"
            >
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </section>

            <aside
              className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
              role="complementary"
            ></aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SocialFeed;
