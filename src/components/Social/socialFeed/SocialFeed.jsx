import * as React from "react";
import { Header } from "./components/Header";
import { NavigationTabs } from "./components/NavigationTabs";
import { PostCard } from "./components/PostCard";
import { SuggestedUser } from "./components/SuggestedUser";
import SidebarNavigation from "../../../SidebarNavigation";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const posts = [
  {
    id: 1,
    avatarColor: "bg-stone-700",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e80c29508d97464fb92ba623b01c0ec7a652572bad0f582ce912734443dbd2d2?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    interactions: (
      <div className="flex gap-5 self-start mt-1 text-base text-black whitespace-nowrap font-[250]">
        <button className="flex gap-2" aria-label="Like post">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/213b014d6fdc02fb3b7245dd5a0b9fcafc118ab7e9a0e628c4c7beee6bdd0d74?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-start aspect-[0.94] w-[17px]"
          />
          <span>1.5k</span>
        </button>
        <button aria-label="Comment">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6afb7df8ec5917fbd1f2588cf7fab7d5855b913de1889d04e26b32ffc705f3eb?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 aspect-[1.12] w-[27px]"
          />
        </button>
      </div>
    ),
  },
  {
    id: 2,
    avatarColor: "bg-lime-900",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e80c29508d97464fb92ba623b01c0ec7a652572bad0f582ce912734443dbd2d2?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    interactions: (
      <div className="flex gap-5 self-start mt-1 text-base text-black whitespace-nowrap font-[250]">
        <button className="flex gap-2" aria-label="Like post">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/171bd41212b414a289b3f920288500df249eecadeb281d64fa66353fc53b847f?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-start aspect-[0.94] w-[17px]"
          />
          <span>1.5k</span>
        </button>
        <button aria-label="Comment">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6afb7df8ec5917fbd1f2588cf7fab7d5855b913de1889d04e26b32ffc705f3eb?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 aspect-[1.12] w-[27px]"
          />
        </button>
      </div>
    ),
  },
  {
    id: 3,
    avatarColor: "bg-indigo-900",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be2d7bf6002ec27f085d66c48935f4cb3e1215a9538f8d84a88692d7d3efb5f4?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    interactions: (
      <div className="flex gap-5 self-start mt-1 text-base text-black whitespace-nowrap font-[250]">
        <button className="flex gap-2" aria-label="Like post">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c5d17097fbdcf5f0cc2b10b88305ecdf543e92bbbbf9f547d79014c1aeebb95?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 self-start aspect-[0.94] w-[17px]"
          />
          <span>1.5k</span>
        </button>
        <button aria-label="Comment">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b16843f6d0c334f4e4ced0462dd740edaf8c7685d473cd01b95add893b85e87f?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt=""
            className="object-contain shrink-0 aspect-[1.12] w-[27px]"
          />
        </button>
      </div>
    ),
  },
];

export function SocialFeed() {
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
            >
              <div className="flex flex-wrap grow gap-6 items-start text-black max-md:mt-10">
                <div className="shrink-0 mt-3 border border-black border-solid h-[828px] w-[3px]" />
                <div className="flex flex-col grow shrink-0 items-start ml-14 basis-0 h-[748px] w-fit max-md:max-w-full">
                  <section aria-label="Who to follow">
                    <h2 className="text-2xl">Who to follow</h2>
                    <div className="flex z-10 flex-col items-start mt-6 w-full min-h-[265px] max-md:max-w-full">
                      {[1, 2, 3].map((id) => (
                        <SuggestedUser key={id} />
                      ))}
                    </div>
                  </section>

                  <section aria-label="Recommended Topics" className="mt-10">
                    <h2 className="text-2xl">Recommended Topics</h2>
                    <div className="flex flex-wrap gap-5 justify-between mt-10 max-w-full text-base rounded-xl w-[563px]">
                      <div className="flex flex-col leading-none whitespace-nowrap">
                        <button>Programming</button>
                        <button className="self-start mt-10 max-md:mt-10">
                          Psychology
                        </button>
                      </div>
                      <div className="flex flex-col whitespace-nowrap">
                        <button className="px-6 py-0.5 rounded-xl bg-stone-500 max-md:px-5">
                          Technology
                        </button>
                        <button className="self-center mt-9 leading-none">
                          Python
                        </button>
                      </div>
                      <div className="flex flex-col">
                        <button>Gaming</button>
                        <button className="mt-9 leading-none">
                          JavaScript
                        </button>
                      </div>
                    </div>
                  </section>

                  <section
                    aria-label="Reading List"
                    className="flex flex-col items-start self-stretch pr-10 pb-11 mt-10 w-full max-md:pr-5 max-md:max-w-full"
                  >
                    <h2 className="text-xl">Reading List</h2>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b4f9e9df5cf8e4127246d88d8a013d5c54522dc3bafa41f4b5bdf0d08767157?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                      alt="Bookmark icon"
                      className="object-contain z-10 mt-10 ml-16 aspect-[1.23] w-[21px] max-md:mt-10 max-md:ml-2.5"
                    />
                    <p className="self-stretch mt-0 text-sm max-md:max-w-full">
                      Click the bookmark icon on any story to easily add it to
                      your reading list or a custom list that you can share.
                    </p>
                  </section>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
export default SocialFeed;
