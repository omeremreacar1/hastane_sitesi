import React, { useState } from "react";

function SelectCategorySection({ handleChangePage, categories }) {
  const [activeDiv, setActiveDiv] = useState(2);

  return (
    <div className="container flex gap-3 lg-gap-0 flex-row flex-wrap items-center lg:items-stretch lg:flex-row mx-auto justify-center md:mt-10 lg:mt-10 lg:space-x-10">
      {/* Categories */}
      {categories.map((category) => (
        <div
          className={`w-38 lg:w-44 h-16 flex items-center justify-center rounded hover:shadow cursor-pointer focus:bg-slate-600 ${
            activeDiv === category.id ? "bg-active shadow" : ""
          }`}
          onClick={() => {
            setActiveDiv(category.id);
            handleChangePage(category.id);
          }}
          key={category.id}
        >
          <div className="flex">
            <div
              className={`w-12 h-12 flex justify-center items-center ml-5 rounded bg-custom-top text-blue-500 ${
                activeDiv === category.id ? "!text-custom-top !bg-blue-500" : ""
              }`}
            >
              <category.icon className="size-6" />
            </div>

            <div className="w-32 h-12 flex flex-col justify-center ml-2">
              <p className="font-semibold">{category.number}</p>
              <p className="text-gray-500 font-light">{category.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectCategorySection;
