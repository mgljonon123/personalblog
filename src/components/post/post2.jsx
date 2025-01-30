import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuFilePenLine } from "react-icons/lu";
import { CgAdd } from "react-icons/cg";
import SocialFeed from "../Social/socialFeed/SocialFeed";
import { Link } from "react-router-dom";

function Post2() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  localStorage.setItem("title", title);
  localStorage.setItem("story", story);
  localStorage.setItem("image", image);
  localStorage.setItem("tags", tags);

  const handlePublish = () => {
    if (title && story && tags.length > 0) {
      // Get existing posts from localStorage, or initialize an empty array
      const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

      // Create the new post
      const newPost = {
        id: existingPosts.length + 1,
        title,
        story,
        tags,
        image,
        avatarColor: "bg-indigo-700", // Default avatar color for new posts
      };

      // Add the new post to the array of existing posts
      const updatedPosts = [newPost, ...existingPosts];

      // Save the updated posts array back to localStorage
      localStorage.setItem("posts", JSON.stringify(updatedPosts));

      alert("Post Published!");
      navigate("/SocialFeed"); // Navigate to the SocialFeed after publishing
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
  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags((prevTags) => [...prevTags, tagInput]);
      setTagInput(""); // Clear input after adding
    }
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full h-full relative bg-white">
      {/* Header Navigation */}
      <div className="w-full h-[65px] bg-gray-200 flex items-center justify-between px-10">
        <div className="flex items-center gap-6">
          <Link to={"/SocialFeed"} element={<SocialFeed></SocialFeed>}>
            <div className="text-4xl font-bold">Home</div>
          </Link>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 border rounded bg-gray-100 w-64"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/create-post" className="flex items-center gap-2">
            <CgAdd className="text-3xl" />
            <span className="text-xl">Make Post</span>
          </Link>
          <Link to={"/Notification"} element={<Notification></Notification>}>
            <IoNotificationsOutline className="text-3xl" />
          </Link>
          <LuFilePenLine className="text-3xl" />
        </div>
      </div>

      {/* Main Content: Split into two sides */}
      <div className="flex">
        {/* Left side - Post Form */}
        <div className="w-1/2 p-10">
          <div className="mb-5">
            <label className="text-xl">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded bg-gray-200"
              placeholder="Enter title"
            />
          </div>

          <div className="mb-5">
            <label className="text-xl">Story</label>
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="w-full h-32 p-2 border rounded bg-gray-200"
              placeholder="Write your story..."
            />
          </div>

          <div className="mb-5">
            <label className="text-xl">Add Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && (
              <div className="mt-2">
                <img
                  src={image}
                  alt="uploaded"
                  className="w-72 h-40 object-cover mt-2"
                />
              </div>
            )}
            {!image && <div className="bg-gray-200 w-72 h-40 mt-2"></div>}
          </div>

          <div className="mb-5">
            <label className="text-xl">Add Tags</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={handleTagInputChange}
                className="w-full p-2 border rounded bg-gray-200"
                placeholder="Enter tag"
              />
              <button
                onClick={handleAddTag}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add Tag
              </button>
            </div>
            <div className="flex gap-2 mt-2">
              {tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-200 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link to={"/SocialFeed"} element={<SocialFeed></SocialFeed>}>
            <button
              onClick={handlePublish}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Publish Now
            </button>
          </Link>
        </div>

        {/* Right side - Summary */}
        <div className="w-1/2 h-full p-10 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-5">Post Preview</h2>

          {title && (
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Title</h3>
              <p>{title}</p>
            </div>
          )}

          {story && (
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Story</h3>
              <p>{story}</p>
            </div>
          )}

          {image && (
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Image</h3>
              <img
                src={image}
                alt="uploaded"
                className="w-72 h-40 object-cover"
              />
            </div>
          )}

          {tags.length > 0 && (
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Tags</h3>
              <div className="flex gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-300 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post2;
