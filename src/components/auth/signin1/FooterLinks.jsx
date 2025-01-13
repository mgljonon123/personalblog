import * as React from "react";

const links = [
  { text: "About", href: "#" },
  { text: "Help Center", href: "#" },
  { text: "Terms of Service", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Cookie Policy", href: "#" },
  { text: "Careers", href: "#" },
];

export default function FooterLinks() {
  return (
    <nav className="flex overflow-hidden flex-col justify-center items-center px-16 py-5 w-full text-sm bg-zinc-100 max-w-[965px] text-stone-500 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-end max-md:max-w-full">
        {links.map((link) => (
          <a
            key={link.text}
            href={link.href}
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
            tabIndex={0}
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
