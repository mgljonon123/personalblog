import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarNavigation() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigation = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <div className="w-[50px] h-[50px] bg-[#21262C] rounded-md relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="w-full  bg-transparent border-none cursor-pointer rounded-md"
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
          alt=""
          className="w-[50px] h-[50px]"
        />
      </button>

      {dropdownOpen && (
        <div className="absolute h-[250px] left-[-130px] top-[50px] bg-[#0D1117] mt-2 rounded-md z-10 w-[200px]">
          <button
            onClick={() => handleNavigation("/Profile")}
            className="w-full p-2.5 text-white hover:bg-[#21262C] rounded-md"
          >
            My Profile
          </button>
          <button
            onClick={() => handleNavigation("/ProfilePage")}
            className="w-full p-2.5 text-white hover:bg-[#21262C] rounded-md"
          >
            Edit Profile
          </button>
          <button
            onClick={() => handleNavigation("/friends1")}
            className="w-full p-2.5 text-white hover:bg-[#21262C] rounded-md"
          >
            Friends
          </button>
          <button
            onClick={() => handleNavigation("/Library")}
            className="w-full p-2.5 text-white hover:bg-[#21262C] rounded-md"
          >
            Library
          </button>
          <button
            onClick={() => handleNavigation("/")}
            className="w-full p-2.5 text-white hover:bg-[#21262C] rounded-md"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
