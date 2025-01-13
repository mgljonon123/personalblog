import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import img1 from "./img1.png";
export default function SidebarNavigation() {
  const navigate = useNavigate();

  // Handle the navigation when an option is selected
  const handleNavigation = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <div className="w-[120px] bg-[#0D1117] p-2.5 rounded-md">
      <select
        onChange={handleNavigation}
        className="w-full p-2.5 bg-transparent border-none text-white cursor-pointer rounded-md hover:bg-[#21262C] focus:outline-none focus:bg-[#1A1F24] active:bg-[#1A1F24]"
      >
        <option value="">Menu</option>

        <option value="/Profile">My Profile</option>

        <option value="/ProfilePage">Edit Profile</option>

        <option value="/friends1">Friends</option>

        <option value="/Library">Library</option>

        <option value="/PrivacySettings">Privacy</option>

        <option value="/">Pass/Change</option>

        <option value="/">Sign out</option>

        {/* Add more options as needed */}
      </select>
    </div>
  );
}
