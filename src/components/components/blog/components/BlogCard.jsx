import * as React from "react";

export default function BlogCard({
  date,
  title,
  description,
  tags,
  image,
  hasArrow = true,
}) {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
      <img
        loading="lazy"
        src={image}
        alt={`Blog post about ${title}`}
        className="object-contain w-full aspect-[2.05] max-md:max-w-full"
      />
      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <time className="text-sm font-semibold leading-none text-violet-700 max-md:max-w-full">
            {date}
          </time>
          <div className="flex flex-wrap gap-4 items-start mt-3 w-full max-md:max-w-full">
            <h3 className="flex-1 shrink text-2xl font-semibold leading-none text-black basis-0 max-md:max-w-full">
              {title}
            </h3>
            {hasArrow && (
              <div className="flex flex-col pt-1 w-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/052e1438604995409fca271555fb3622357518e25ea565954c6ba70c7526b53e?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
                  alt=""
                  className="object-contain w-6 aspect-square"
                />
              </div>
            )}
          </div>
          <p className="mt-3 text-base leading-6 text-black max-md:max-w-full">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-start mt-6 w-full text-sm font-medium leading-none text-center whitespace-nowrap max-md:max-w-full">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-start text-violet-700 bg-blend-lighten"
            >
              <div className="self-stretch px-2.5 py-0.5 bg-purple-50 rounded-2xl">
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
