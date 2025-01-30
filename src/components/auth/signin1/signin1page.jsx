import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import FooterLinks from "./FooterLinks";
import SocialButton from "./SocialButton";
import { BrowserRouter as Router, Link } from "react-router-dom";
import InterestsPage from "../../tagnuud/interests/InterestsPage";
import CreateAccount from "../createaccount/CreateAccount";
import img1 from "./img1.png";
import icon from "./icon.png";

export default function Signin1page() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <main className="flex flex-col overflow-hidden h-[100vh]" role="main">
      <div className="flex relative flex-col justify-center items-center w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8909c0efc620c890ff94ae179f6b417d5a7840860b8015d79c359407588f25f8?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          alt=""
          className="object-cover absolute h-[990px] w-[1920px]"
        />
        <section className="flex overflow-hidden relative flex-col pr-4 pl-20 mt-[50px] bg-white rounded-3xl w-[1165px] max-md:pl-5 max-md:mb-2.5">
          <div className="flex flex-wrap gap-10 self-end max-w-full w-[796px]">
            <div className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[69%]">
                  <h1 className="mt-28 mr-0 text-2xl font-medium text-center text-stone-500 mr-[100px]">
                    Unlimited free access to our resources
                  </h1>
                </div>
                <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={img1}
                    alt=""
                    className="object-cover grow shrink-0  max-w-full aspect-[1.46]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start mt-5 min-h-[633px] max-md:mr-1.5 max-md:max-w-full">
            <div className="flex flex-wrap items-start max-md:max-w-full">
              <section className="flex overflow-hidden flex-wrap gap-10 pl-16 text-2xl min-w-[240px] text-zinc-800 w-[482px] max-md:max-w-full">
                <div className="flex flex-col grow shrink-0 justify-center items-center my-auto basis-0 w-fit">
                  <h2 className="text-2xl font-medium text-center text-neutral-900">
                    Sign up
                  </h2>

                  <SocialButton
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/220d3a20f6858bbef96fd603d79d73555346371736a637b4b3bf103227db2b6a?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                    text="Continue with Google"
                  />
                  <SocialButton icon={icon} text="Continue with Facebook" />
                  <SocialButton
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8993e17232abab3df66b5865ad9c0fd0bb96db841382bde1ccebb943d16f9b?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                    text="Sign up with email"
                  />

                  <p className="gap-2.5 mt-6 max-w-full text-sm text-center text-stone-500 w-[342px]">
                    By signing up, you agree to the{" "}
                    <a href="#" className="underline text-zinc-800">
                      Terms of Service
                    </a>{" "}
                    <br />
                    and acknowledge you've read our{" "}
                    <a href="#" className="underline text-neutral-900">
                      Privacy Policy.
                    </a>
                  </p>
                </div>
                <div className="flex shrink-0 w-px bg-stone-500 bg-opacity-30 h-[451px]" />
              </section>

              <section className="flex overflow-hidden flex-col justify-center px-16 py-10 font-medium min-w-[240px] w-[482px] max-md:px-5 max-md:max-w-full">
                <form className="flex flex-col justify-center items-center">
                  <Link to={"/InterestPage"} element={<InterestsPage />}>
                    <button className="text-2xl text-center text-neutral-900">
                      Log in
                    </button>
                  </Link>

                  <div className="flex flex-col mt-6 max-w-full text-base text-stone-500 w-[354px]">
                    <label
                      htmlFor="email"
                      className="py-0.5 w-full max-md:pr-5"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="flex mt-1 w-full rounded-xl border-solid border-[3px] border-stone-500 border-opacity-30 min-h-[56px]"
                      aria-label="Email address"
                    />
                  </div>

                  <div className="flex flex-col items-end mt-6 max-w-full w-[354px]">
                    <div className="flex flex-col w-full whitespace-nowrap max-w-[354px]">
                      <div className="flex gap-10 pr-2.5 w-full">
                        <label
                          htmlFor="password"
                          className="text-base text-stone-500"
                        >
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="flex flex-1 gap-2 text-lg text-right text-stone-500 text-opacity-80 ml-[170px]"
                          aria-label="Toggle password visibility"
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d1b78634eafb5a7b069542d6346404fd95b35131d0c31d9c980ecb7eb3b17c?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                            alt=""
                            className="object-contain shrink-0 self-start w-6 aspect-square"
                          />
                          <span>{passwordVisible ? "Hide" : "Show"}</span>
                        </button>
                      </div>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        className="flex mt-1 w-full rounded-xl border-solid border-[3px] border-stone-500 border-opacity-30 min-h-[56px]"
                        aria-label="Password"
                      />
                    </div>
                    <a
                      href="#"
                      className="mt-2 text-base text-right text-neutral-900"
                    >
                      Forget your password
                    </a>
                  </div>

                  <Link to={"/InterestPage"} element={<InterestsPage />}>
                    <button
                      type="submit"
                      className="flex overflow-hidden flex-col justify-center py-4 pr-4 pl-2 mt-6 max-w-full text-2xl text-center text-white bg-neutral-900 rounded-[32px] w-[180px] max-md:px-5"
                      aria-label="Log in"
                    >
                      <span className="gap-2 self-stretch">Log in</span>
                    </button>
                  </Link>

                  {/* Create Account Button */}
                  <Link
                    to={"/CreateAccount"}
                    element={<CreateAccount />}
                    className="mt-4 text-center text-xl text-blue-600"
                  >
                    Create an Account
                  </Link>
                </form>
              </section>
            </div>

            <footer className="flex flex-col mt-10 max-w-full w-[965px]">
              <div className="flex overflow-hidden flex-col pb-4 w-full text-base bg-white max-w-[965px] text-zinc-800 max-md:max-w-full">
                <div className="flex shrink-0 h-px bg-stone-500 bg-opacity-30 max-md:max-w-full" />
                <LanguageSelector />
              </div>
              <FooterLinks />
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
