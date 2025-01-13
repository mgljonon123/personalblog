import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SocialFeed from "../../Social/socialFeed/SocialFeed";
import img1 from "./img1.png";
function CreateAccount() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    if (email && username && password) {
      console.log("Account Created:", { email, username, password });
      alert("Account successfully created!");
    } else {
      alert("Please fill in all the fields!");
    }
  };

  return (
    <>
      <div className="w-[1903px] h-[970px] relative bg-white overflow-hidden">
        <div className="w-[1092px] h-[970px] left-0 top-0 absolute overflow-hidden">
          <div className="h-[809px] left-[88px] top-[88px] absolute flex-col justify-end items-start gap-8 inline-flex">
            <div className="flex-col justify-start items-start gap-0.5 flex">
              <div className="text-[#333333] text-[32px] font-medium font-['Poppins']">
                Welcome to Design Community
              </div>
              <div className="p-0.5 justify-start items-start gap-2.5 inline-flex">
                <div>
                  <span className="text-[#333333] text-base font-normal font-['Poppins']">
                    Already have an account?
                  </span>
                  <span className="text-[#111111] text-base font-normal font-['Poppins'] underline">
                    Log in
                  </span>
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="self-stretch h-[87px] flex-col justify-start items-start gap-1 flex">
              <label className="h-[27px] text-[#666666] text-base font-normal font-['Poppins']">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[1000px] h-14 rounded-xl border-2 border-[#666666]/30 px-4"
              />
            </div>

            {/* Username Input */}
            <div className="self-stretch h-[87px] flex-col justify-start items-start gap-1 flex">
              <label className="h-[27px] text-[#666666] text-base font-normal font-['Poppins']">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[1000px] h-14 rounded-xl border-2 border-[#666666]/30 px-4"
              />
            </div>

            {/* Password Input */}
            <div className="self-stretch h-[87px] flex-col justify-start items-start gap-1 flex">
              <label className="h-[27px] text-[#666666] text-base font-normal font-['Poppins']">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[1000px] h-14 rounded-xl border-2 border-[#666666]/30 px-4"
              />
            </div>

            <div className="self-stretch justify-start items-start gap-[18px] inline-flex">
              <div className="flex-col justify-start items-start inline-flex">
                <div className="pr-2 py-2 justify-center items-center gap-2 inline-flex">
                  <div className="w-2 h-2 bg-[#666666]/60 rounded-full" />
                  <div className="text-[#666666]/60 text-sm font-normal font-['Poppins']">
                    Use 8 or more characters
                  </div>
                </div>
                <div className="pr-2 py-2 justify-center items-center gap-2 inline-flex">
                  <div className="w-2 h-2 bg-[#666666]/60 rounded-full" />
                  <div className="text-[#666666]/60 text-sm font-normal font-['Poppins']">
                    One special character
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="pr-2 py-2 justify-center items-center gap-2 inline-flex">
                  <div className="w-2 h-2 bg-[#666666]/60 rounded-full" />
                  <div className="text-[#666666]/60 text-sm font-normal font-['Poppins']">
                    One Uppercase character
                  </div>
                </div>
                <div className="pr-2 py-2 justify-center items-center gap-2 inline-flex">
                  <div className="w-2 h-2 bg-[#666666]/60 rounded-full" />
                  <div className="text-[#666666]/60 text-sm font-normal font-['Poppins']">
                    One number
                  </div>
                </div>
              </div>
              <div className="w-[236px] flex-col justify-start items-start inline-flex">
                <div className="pr-2 py-2 justify-center items-center gap-2 inline-flex">
                  <div className="w-2 h-2 bg-[#666666]/60 rounded-full" />
                  <div className="text-[#666666]/60 text-sm font-normal font-['Poppins']">
                    One lowercase character
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch pr-2 py-2 justify-start items-start gap-2 inline-flex">
              <div className="w-6 h-6 relative  overflow-hidden" />
              <div className="w-[603px] text-[#333333] text-base font-normal font-['Poppins']">
                I want to receive emails about the product, feature updates,
                events, and marketing promotions.
              </div>
            </div>
            <div className="self-stretch pr-2 py-2 justify-start items-start gap-2.5 inline-flex">
              <div>
                <span class="text-[#333333] text-base font-normal font-['Poppins']">
                  By creating an account, you agree to the{" "}
                </span>
                <span class="text-[#111111] text-base font-normal font-['Poppins'] underline">
                  Terms of use
                </span>
                <span class="text-[#666666] text-base font-normal font-['Poppins']">
                  {" "}
                </span>
                <span class="text-[#333333] text-base font-normal font-['Poppins']">
                  and
                </span>
                <span class="text-[#666666] text-base font-normal font-['Poppins']">
                  {" "}
                </span>
                <span class="text-[#111111] text-base font-normal font-['Poppins'] underline">
                  Privacy Policy.
                </span>
                <span class="text-[#666666] text-base font-normal font-['Poppins'] underline">
                  {" "}
                </span>
              </div>
            </div>

            {/* Create Account Button */}
            <div className="h-[100px] flex-col justify-center items-start gap-2 flex ">
              <button
                onClick={handleCreateAccount}
                className="w-[200px] h-16 bg-[#5dade2] rounded-[32px] flex justify-center items-center"
              >
                <Link to={"/SocialFeed"} element={<SocialFeed></SocialFeed>}>
                  <span className="text-white text-[22px] font-medium font-['Poppins']">
                    Create account
                  </span>
                </Link>
              </button>

              <div className="p-0.5 justify-start items-start gap-2.5 inline-flex">
                <div>
                  <span class="text-[#333333] text-base font-normal font-['Poppins']">
                    Already have an ccount?
                  </span>
                  <span class="text-[#666666] text-base font-normal font-['Poppins']">
                    {" "}
                  </span>
                  <span class="text-[#111111] text-base font-normal font-['Poppins'] underline">
                    Log in{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="w-52 h-[142px] left-[890px] top-[10px] absolute object-cover"
          src={img1}
        />

        <div className="w-[782px] h-[990px] left-[1121px] top-0 absolute bg-black overflow-hidden">
          <img
            className="w-[887px] h-[970px] absolute"
            src="https://i.pinimg.com/736x/68/91/ee/6891eef7b4fbb8833f80a3cc3689d0cb.jpg"
            alt="background"
          />
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
