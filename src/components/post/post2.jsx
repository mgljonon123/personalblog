import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";
import { CgAdd } from "react-icons/cg";
import SocialFeed from "../Social/socialFeed/SocialFeed";

function Post2() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePublish = () => {
    if (title && story && tags.length > 0) {
      // Save the data to localStorage
      const postData = {
        title,
        story,
        tags,
        image,
      };
      localStorage.setItem("post", JSON.stringify(postData));

      alert("Post Published!");

      // Display the saved data in the console
      console.log("Title:", title);
      console.log("Story:", story);
      console.log("Tags:", tags);
      console.log("Image:", image);
    } else {
      alert("Please fill in all fields (title, story, and tags)!");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="w-[100%] h-[990px] relative bg-white overflow-hidden">
        <div className="w-[1903px] h-[65px] left-0 top-0 absolute">
          <div className="w-[1903px] h-[65px] left-0 top-0 absolute bg-[#d9d9d9]" />
          <div className="w-[1710.06px] left-[96.47px] top-[5px] absolute justify-between items-center inline-flex">
            <div className="justify-start items-center gap-9 flex">
              <div className="text-black text-4xl font-bold font-['Poppins']">
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
              <div className="justify-center items-center gap-[25px] flex">
                <div className="text-black text-xl font-normal font-['Poppins']">
                  Make Post
                </div>
                <div className="w-6 h-12 relative overflow-hidden" />
              </div>
              <div className="w-6 h-6 relative overflow-hidden" />
              <div className="w-[42px] h-[42px] bg-[#ca7272] rounded-full" />
            </div>
          </div>
        </div>

        <IoNotificationsOutline className="left-[1705px] top-[15px] absolute text-[27px] text-" />
        <LuFilePenLine className="left-[1645px] top-[15px] absolute text-[27px] text-" />
        <IoSearchOutline className="left-[230px] top-[15px] absolute text-3xl text-" />

        <div className="w-[367px] h-[25px] left-[222px] top-[356px] absolute opacity-50 text-black text-[22px] font-normal font-['Inter'] leading-snug">
          Add Topic for your new Story!
        </div>

        <div className="w-[430px] h-[77.93px] left-[210px] top-[418.74px] absolute">
          <div className="w-[430px] h-[77.93px] left-0 top-0 absolute bg-[#d9d9d9]" />
          <textarea
            value={text}
            onChange={handleChange}
            className="w-[150.56px] h-[25.14px] left-[15.66px] top-[26.40px] absolute opacity-50 text-black text-xl font-normal font-['Inter'] leading-tight resize-none"
            placeholder="Add a topic..."
          />
        </div>

        <div>
          <div className="w-60 h-[0px] left-[717px] top-[336px] absolute origin-top-left rotate-90 border border-black"></div>
          <div className="w-60 h-[0px] left-[1208px] top-[336px] absolute origin-top-left rotate-90 border border-black"></div>
          <div className="w-[188px] h-[30px] left-[882px] top-[403px] absolute text-black text-2xl font-normal font-['Inter'] leading-normal">
            <label
              htmlFor="image-upload"
              className="w-[341px] h-[165px] bg-[#d9d9d9] cursor-pointer"
            >
              Add Image +
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden w-[341px] h-[165px] bg-[#d9d9d9]"
              onChange={handleImageChange}
            />
          </div>

          {image && (
            <div className="absolute left-[781px] top-[336px]">
              <img
                src={image}
                alt="uploaded"
                className="w-[341px] h-[165px] object-cover"
              />
            </div>
          )}
        </div>

        <div className="w-[467px] h-[106px] left-[1318px] top-[341px] absolute justify-start items-start gap-[31px] inline-flex">
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-black text-xl font-normal font-['Poppins']">
              Javascript
            </div>
            <div className="w-6 h-6 relative overflow-hidden" />
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-black text-xl font-normal font-['Poppins']">
              Javascript
            </div>
            <div className="w-6 h-6 relative overflow-hidden" />
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-black text-xl font-normal font-['Poppins']">
              Javascript
            </div>
            <div className="w-6 h-6 relative overflow-hidden" />
          </div>
        </div>

        <CgAdd className="left-[1700px] top-[344px] absolute text-2xl text-" />
        <CgAdd className="left-[1555px] top-[344px] absolute text-2xl text-" />
        <CgAdd className="left-[1405px] top-[343px] absolute text-2xl text-" />

        <div className="w-[1255px] h-[60px] left-[324px] top-[219px] absolute">
          <div className="left-[-106px] top-[8px] absolute text-black text-[32px] font-normal font-['Inter'] leading-loose">
            Published ZoloB
          </div>
          <div className="left-[538px] top-[5px] absolute text-black text-[32px] font-normal font-['Inter']">
            Add Images
          </div>
          <div className="left-[1072px] top-0 absolute text-black text-[32px] font-normal font-['Poppins']">
            Add Tags:
          </div>
        </div>

        <div className="w-[358px] h-[87px] left-[1305px] top-[678px] absolute">
          <div
            className="w-[358px] h-[87px] left-0 top-0 absolute bg-[#20b150] border border-black cursor-pointer"
            onClick={handlePublish}
          >
            <Link to={"/SocialFeed"} element={<SocialFeed></SocialFeed>}>
              <div className="left-[95px] top-[9px] absolute text-white text-[32px] font-normal font-['Inter'] leading-loose">
                Publish now
              </div>
            </Link>
          </div>
        </div>

        {/* Хадгалагдсан мэдээллүүдийг харуулах */}
        <div className="published-content">
          {title && <h2>{title}</h2>}
          {story && <p>{story}</p>}
          {tags.length > 0 && (
            <div>
              <h4>Tags:</h4>
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Post2;
