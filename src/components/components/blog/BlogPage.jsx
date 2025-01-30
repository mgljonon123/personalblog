import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signin1page from "../../auth/signin1/signin1page";
import img1 from "./img1.png";
import img2 from "./img2.png";

const BlogPage = () => {
  return (
    <>
      <div className="w-full h-[3184px] relative bg-white">
        <div className="w-3.5 h-3.5 left-[103px] top-[267px] absolute" />
        <div className="w-[1753px] h-[620px] left-[75px] top-[948px] absolute bg-[#090d1f]" />
        <div className="w-[1677px] h-[512px] px-8 left-[113px] top-[1001px] absolute flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch text-white text-2xl font-semibold font-poppins leading-loose">
            Recent blog posts
          </div>
          <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <img
                className="w-[750px] h-[228px] relative object-cover"
                src="https://i.pinimg.com/736x/93/5f/85/935f855b01501354f605f49016a81678.jpg"
              />
              <div className="self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch text-[#6840c6] text-sm font-semibold font-poppins leading-tight">
                    Sunday , 1 Jan 2023
                  </div>
                  <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="grow shrink basis-0 text-white text-2xl font-semibold font-poppins leading-loose">
                      UX review presentations
                    </div>
                    <div className="pt-1 flex-col justify-start items-start inline-flex">
                      <div className="w-6 h-6 relative overflow-hidden" />
                    </div>
                  </div>
                  <div className="w-[461px] text-[#c0c5d0] text-base font-normal font-poppins leading-normal">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="mix-blend-lighten justify-start items-start flex">
                    <div className="px-2.5 py-0.5 bg-[#f9f5ff] rounded-2xl justify-center items-center flex">
                      <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                        Design
                      </div>
                    </div>
                  </div>
                  <div className="mix-blend-lighten justify-start items-start flex">
                    <div className="px-2.5 py-0.5 bg-[#eef3ff] rounded-2xl justify-center items-center flex">
                      <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                        Research
                      </div>
                    </div>
                  </div>
                  <div className="mix-blend-lighten justify-start items-start flex">
                    <div className="px-2.5 py-0.5 bg-[#fdf1f9] rounded-2xl justify-center items-center flex">
                      <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                        Presentation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-8 inline-flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <img
                  className="w-80 h-[200px] relative"
                  src="https://i.pinimg.com/736x/93/5f/85/935f855b01501354f605f49016a81678.jpg"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch h-[116px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-[#6840c6] text-sm font-semibold font-poppins leading-tight">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-white text-lg font-semibold font-poppins leading-7">
                        Migrating to Linear 101
                      </div>
                      <div className="self-stretch text-[#c0c5d0] text-base font-normal font-poppins leading-normal">
                        Linear helps streamline software projects, sprints,
                        tasks, and bug tracking. Here’s how to get...
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-sky-50 rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                          Design
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#fdf1f9] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                          Research
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <img
                  className="w-80 h-[200px] relative"
                  src="https://i.pinimg.com/736x/93/5f/85/935f855b01501354f605f49016a81678.jpg"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch h-[116px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-[#6840c6] text-sm font-semibold font-poppins leading-tight">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-white text-lg font-semibold font-poppins leading-7">
                        Building your API Stack
                      </div>
                      <div className="self-stretch text-[#c0c5d0] text-base font-normal font-poppins leading-normal">
                        The rise of RESTful APIs has been met by a rise in tools
                        for creating, testing, and manag...
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#ebfdf2] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                          Design
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#fdf1f9] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                          Research
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1603px] h-[1148px] px-8 left-[150px] top-[1619px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="self-stretch text-black text-2xl font-semibold font-poppins leading-loose">
            All blog posts
          </div>
          <div className="self-stretch h-[968px] flex-col justify-start items-start gap-12 flex">
            <div className="self-stretch justify-center items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <img
                  className="h-60 relative"
                  src="https://i.pinimg.com/736x/93/5f/85/935f855b01501354f605f49016a81678.jpg"
                />
                <div className="self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-[#6840c6] text-sm font-semibold font-poppins leading-tight">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                      <div className="grow shrink basis-0 text-black text-2xl font-semibold font-poppins leading-loose">
                        Bill Walsh leadership lessons
                      </div>
                      <div className="pt-1 flex-col justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative overflow-hidden" />
                      </div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-poppins leading-normal">
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#f9f5ff] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                          Leadership
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#f8f8fb] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#353e72] text-sm font-medium font-poppins leading-tight">
                          Management
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#fdf1f9] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#c01573] text-sm font-medium font-poppins leading-tight">
                          Presentation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <img
                  className="h-60 relative"
                  src="https://i.pinimg.com/736x/93/5f/85/935f855b01501354f605f49016a81678.jpg"
                />
                <div className="self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-[#6840c6] text-sm font-semibold font-poppins leading-tight">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                      <div className="grow shrink basis-0 text-black text-2xl font-semibold font-poppins leading-loose">
                        PM mental models
                      </div>
                      <div className="pt-1 flex-col justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative overflow-hidden" />
                      </div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-poppins leading-normal">
                      Mental models are simple expressions of complex processes
                      or relationships.
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-sky-50 rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#016aa2] text-sm font-medium font-poppins leading-tight">
                          Product
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#eef3ff] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#3537cc] text-sm font-medium font-poppins leading-tight">
                          Research
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#fff5ed] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#c3320a] text-sm font-medium font-poppins leading-tight">
                          Frameworks
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <img
                  className="h-60 relative"
                  src="https://i.pinimg.com/736x/93/5f/85/935f855b01501354f605f49016a81678.jpg"
                />
                <div className="self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-[#6840c6] text-sm font-semibold font-poppins leading-tight">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                      <div className="grow shrink basis-0 text-black text-2xl font-semibold font-poppins leading-loose">
                        What is Wireframing?
                      </div>
                      <div className="pt-1 flex-col justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative overflow-hidden" />
                      </div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-poppins leading-normal">
                      Introduction to Wireframing and its Principles. Learn from
                      the best in the industry.
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#f9f5ff] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                          Design
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#eef3ff] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#3537cc] text-sm font-medium font-poppins leading-tight">
                          Research
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#fdf1f9] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#c01573] text-sm font-medium font-poppins leading-tight">
                          Presentation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-center items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <img
                  className="h-60 relative"
                  src="https://i.pinimg.com/736x/93/5f/85/935f855b01501354f605f49016a81678.jpg"
                />
                <div className="self-stretch h-[204px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[156px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-[#6840c6] text-sm font-semibold font-poppins leading-tight">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                      <div className="grow shrink basis-0 text-black text-2xl font-semibold font-poppins leading-loose">
                        How collaboration makes us better
                      </div>
                      <div className="pt-1 flex-col justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative overflow-hidden" />
                      </div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-poppins leading-normal">
                      Collaboration can make our teams stronger, and our
                      individual designs better.
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#f9f5ff] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                          Design
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#eef3ff] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#3537cc] text-sm font-medium font-poppins leading-tight">
                          Research
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#fdf1f9] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#c01573] text-sm font-medium font-poppins leading-tight">
                          Presentation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <img
                  className="h-60 relative"
                  src="https://i.pinimg.com/736x/93/5f/85/935f855b01501354f605f49016a81678.jpg"
                />
                <div className="self-stretch h-[204px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[156px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-[#6840c6] text-sm font-semibold font-poppins leading-tight">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                      <div className="grow shrink basis-0 text-black text-2xl font-semibold font-poppins leading-loose">
                        Our top 10 Javascript frameworks to use
                      </div>
                      <div className="pt-1 flex-col justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative overflow-hidden" />
                      </div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-poppins leading-normal">
                      JavaScript frameworks make development easy with extensive
                      features and functionalities.
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#ebfdf2] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#027947] text-sm font-medium font-poppins leading-tight">
                          Software Development
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#fdf1f9] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#c01573] text-sm font-medium font-poppins leading-tight">
                          Tools
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#fef1f2] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#c00f47] text-sm font-medium font-poppins leading-tight">
                          SaaS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <img
                  className="h-60 relative"
                  src="https://i.pinimg.com/736x/93/5f/85/935f855b01501354f605f49016a81678.jpg"
                />
                <div className="self-stretch h-[204px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[156px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-[#6840c6] text-sm font-semibold font-poppins leading-tight">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                      <div className="grow shrink basis-0 text-black text-2xl font-semibold font-poppins leading-loose">
                        Podcast: Creating a better CX Community
                      </div>
                      <div className="pt-1 flex-col justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative overflow-hidden" />
                      </div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-poppins leading-normal">
                      Starting a community doesn’t need to be complicated, but
                      how do you get started?
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#f9f5ff] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#6840c6] text-sm font-medium font-poppins leading-tight">
                          Podcasts
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#f8f8fb] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#353e72] text-sm font-medium font-poppins leading-tight">
                          Customer Success
                        </div>
                      </div>
                    </div>
                    <div className="mix-blend-lighten justify-start items-start flex">
                      <div className="px-2.5 py-0.5 bg-[#fdf1f9] rounded-2xl justify-center items-center flex">
                        <div className="text-center text-[#c01573] text-sm font-medium font-poppins leading-tight">
                          Presentation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[54px] pt-5 border-t border-white/30 justify-between items-center inline-flex">
            <div className="justify-start items-start flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="w-5 h-5 relative overflow-hidden" />
                <div className="text-black text-sm font-medium font-poppins leading-tight">
                  Previous
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-0.5 flex">
              <div className="w-10 h-10 relative bg-[#a189c4] rounded-lg overflow-hidden">
                <div className="w-10 h-10 p-3 left-0 top-0 absolute rounded-lg justify-center items-center inline-flex">
                  <div className="text-center text-[#112211] text-sm font-medium font-poppins leading-tight">
                    1
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                <div className="w-10 h-10 p-3 left-0 top-0 absolute rounded-lg justify-center items-center inline-flex">
                  <div className="text-center text-black text-sm font-medium font-poppins leading-tight">
                    2
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                <div className="w-10 h-10 p-3 left-0 top-0 absolute rounded-lg justify-center items-center inline-flex">
                  <div className="text-center text-black text-sm font-medium font-poppins leading-tight">
                    3
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                <div className="w-10 h-10 p-3 left-0 top-0 absolute rounded-lg justify-center items-center inline-flex">
                  <div className="text-center text-black text-sm font-medium font-poppins leading-tight">
                    ...
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                <div className="w-10 h-10 p-3 left-0 top-0 absolute rounded-lg justify-center items-center inline-flex">
                  <div className="text-center text-black text-sm font-medium font-poppins leading-tight">
                    8
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                <div className="w-10 h-10 p-3 left-0 top-0 absolute rounded-lg justify-center items-center inline-flex">
                  <div className="text-center text-black text-sm font-medium font-poppins leading-tight">
                    9
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                <div className="w-10 h-10 p-3 left-0 top-0 absolute rounded-lg justify-center items-center inline-flex">
                  <div className="text-center text-black text-sm font-medium font-poppins leading-tight">
                    10
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="text-[#efefef] text-sm font-medium font-poppins leading-tight">
                  Next
                </div>
                <div className="w-5 h-5 relative overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[900px] left-[3px] top-0 absolute">
          <div className="w-6 h-6 left-[938px] top-[846px] absolute overflow-hidden" />
          <div className="left-[100px] top-[271px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="w-[824px] text-[#2b2c34] text-[68px] font-bold font-poppins capitalize">
              Hi, I’m Jonon <br />
              Full Stack dev
            </div>
            <div className="justify-center items-center gap-3 inline-flex">
              <div className="w-14 h-[0px] origin-top-left rotate-90 border-2 border-[#2b2c34]"></div>
              <div className="w-[812px] text-[#9a9393] text-[28px] font-normal font-poppins">
                On this blog I share tips and tricks, frameworks, projects,
                tutorials, etc
                <br />
                Make sure you subscribe to get the latest updates
              </div>
            </div>

            <div className="w-[757px] h-[110px] justify-start items-start gap-5 inline-flex overflow-hidden">
              <div className="pl-[25px] pr-[200px] py-[21px] bg-[#fffffe] rounded-lg border-2 justify-start items-center gap-2.5 flex">
                <div className="text-[#c0c0c0] text-xl font-normal font-poppins">
                  Enter your email here....
                </div>
              </div>
              <div className="px-[23px] pt-5 pb-[19px] bg-[#6246ea] rounded-lg justify-center items-center gap-2.5 flex">
                <div className="text-[#fffffe] text-xl font-bold font-poppins capitalize">
                  Subscribe
                </div>
              </div>
            </div>
          </div>

          <div className="w-[514px] h-[451px] left-[1215px] top-[284px] absolute overflow-hidden">
            <img
              src={img2}
              className="w-[474.93px] h-[423.46px] left-[19.30px] top-[15px] absolute"
            ></img>
          </div>
        </div>
        <div className="w-full h-[110px] left-0 top-0 absolute bg-white" />
        <img
          className="w-[264px] h-28 left-0 top-0 absolute object-cover"
          src={img1}
        />

        <div className="w-[328px] h-[49px] left-[1523px] top-[30px] absolute">
          <div className="w-[110px] h-[49px] left-[30px] top-0 absolute bg-[#6246ea] rounded-[10px]" />
          <div className="w-[149px] h-[49px] left-[155px] top-0 absolute bg-[#6246ea] rounded-[10px]" />
          <Link to={"/signin1page"} element={<Signin1page></Signin1page>}>
            <div className="left-[49px] top-[8px] absolute text-white text-2xl font-semibold font-poppins">
              Log in{" "}
            </div>
          </Link>

          <Link to={"/signin1page"} element={<Signin1page></Signin1page>}>
            <div className="left-[182px] top-[8px] absolute text-white text-2xl font-semibold font-poppins">
              Sign up
            </div>
          </Link>
        </div>

        <div className="w-[29px] h-[0px] left-[1274px] top-[41px] absolute origin-top-left rotate-90 border border-white"></div>
        <div className="w-full h-[493px] left-0 top-[2791px] absolute bg-white overflow-hidden">
          <div className="w-full h-[593px] left-0 top-0 absolute bg-[#09132e]" />
          <div className="w-[1475.16px] h-[414px] left-[186px] top-[100px] absolute">
            <div className="w-[182.37px] h-[223px] left-[55.84px] top-[32px] absolute">
              <div className="w-[77.97px] left-0 top-0 absolute text-white text-base font-bold font-poppins leading-7">
                Product
              </div>
              <div className="w-[182.37px] left-0 top-[43px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Employee database
              </div>
              <div className="w-[62.11px] left-0 top-[75px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Payroll
              </div>
              <div className="w-[92.11px] left-0 top-[107px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Recruitment
              </div>
              <div className="w-[62.11px] left-0 top-[139px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Onboarding
              </div>
              <div className="w-[62.11px] left-0 top-[171px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Performance
              </div>
            </div>
            <div className="w-[182.37px] h-[223px] left-[298.84px] top-[32px] absolute">
              <div className="w-[77.97px] left-0 top-0 absolute text-white text-base font-bold font-poppins leading-7">
                Company
              </div>
              <div className="w-[182.37px] left-0 top-[43px] absolute opacity-75 text-white text-base font-normal font-poppins">
                About us
              </div>
              <div className="w-[62.11px] left-0 top-[75px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Careers
              </div>
              <div className="w-[92.11px] left-0 top-[107px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Contact us
              </div>
              <div className="w-[62.11px] left-0 top-[139px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Blog
              </div>
              <div className="w-[62.11px] left-0 top-[171px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Press
              </div>
            </div>
            <div className="w-[182.37px] h-[223px] left-[541.84px] top-[32px] absolute">
              <div className="w-[77.97px] left-0 top-0 absolute text-white text-base font-bold font-poppins leading-7">
                Resources
              </div>
              <div className="w-[182.37px] left-0 top-[43px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Help center
              </div>
              <div className="w-[62.11px] left-0 top-[75px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Guides
              </div>
              <div className="w-[92.11px] left-0 top-[107px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Events
              </div>
              <div className="w-[62.11px] left-0 top-[139px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Webinars
              </div>
              <div className="w-[62.11px] left-0 top-[171px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Tutorials
              </div>
            </div>
            <div className="w-[182.37px] h-[223px] left-[784.84px] top-[32px] absolute">
              <div className="w-[77.97px] left-0 top-0 absolute text-white text-base font-bold font-poppins leading-7">
                Legal
              </div>
              <div className="w-[182.37px] left-0 top-[43px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Privacy policy
              </div>
              <div className="w-[152.11px] left-0 top-[75px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Terms of service
              </div>
              <div className="w-[132.11px] left-0 top-[107px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Cookie policy
              </div>
              <div className="w-[62.11px] left-0 top-[139px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Security
              </div>
              <div className="w-[62.11px] left-0 top-[171px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Compliance
              </div>
            </div>
            <div className="w-[182.37px] h-[223px] left-[1027.84px] top-[32px] absolute">
              <div className="w-[77.97px] left-0 top-0 absolute text-white text-base font-bold font-poppins leading-7">
                Follow us
              </div>
              <div className="w-[182.37px] left-0 top-[43px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Facebook
              </div>
              <div className="w-[62.11px] left-0 top-[75px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Twitter
              </div>
              <div className="w-[92.11px] left-0 top-[107px] absolute opacity-75 text-white text-base font-normal font-poppins">
                LinkedIn
              </div>
              <div className="w-[62.11px] left-0 top-[139px] absolute opacity-75 text-white text-base font-normal font-poppins">
                Instagram
              </div>
              <div className="w-[62.11px] left-0 top-[171px] absolute opacity-75 text-white text-base font-normal font-poppins">
                YouTube
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
