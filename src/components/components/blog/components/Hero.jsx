import * as React from "react";

export default function Hero() {
  return (
    <section className="flex relative flex-wrap gap-5 justify-between mt-40 w-full max-w-[1629px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col min-h-[464px] max-md:max-w-full">
        <h1 className="text-7xl font-bold text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Hi, i'm Jonon <br />
          Full Stack dev
        </h1>
        <div className="flex flex-wrap gap-3 justify-center items-center mt-8 text-3xl text-stone-400 max-md:max-w-full">
          <div className="shrink-0 self-stretch my-auto w-0 h-14 border-solid border-[3px] border-zinc-800" />
          <p className="self-stretch my-auto w-[812px] max-md:max-w-full">
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, etc
            <br />
            Make sure you subscribe to get the latest updates
          </p>
        </div>
        <form className="flex overflow-hidden flex-wrap gap-5 items-start mt-8 max-w-full text-xl min-h-[110px] w-[757px]">
          <label htmlFor="emailInput" className="sr-only">
            Enter your email
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email here...."
            className="gap-2.5 self-stretch py-5 pr-52 pl-6 bg-white rounded-lg min-w-[240px] text-stone-300 max-md:px-5 max-md:max-w-full"
            aria-label="Email subscription input"
          />
          <button
            type="submit"
            className="gap-2.5 self-stretch px-6 py-5 font-bold text-white capitalize whitespace-nowrap bg-indigo-600 rounded-lg min-h-[67px] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 max-md:px-5"
          >
            Subscribe
          </button>
        </form>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b4dd0e131e237f48cad6c9a629c9cee9a8366368ff9725d188ed4300151127c?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
        alt="Developer illustration"
        className="object-contain self-start mt-3.5 w-full aspect-[1.14] max-md:max-w-full"
      />
    </section>
  );
}
