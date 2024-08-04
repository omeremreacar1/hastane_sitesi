import React from "react";

function BottomSection({ values }) {
  return (
    <div className="container mx-auto flex justify-center mt-5 md:mt-10 mb-5 md:mb-0">
      <div className="flex items-center md:items-stretch w-for-categories flex-wrap gap-8 lg:gap-5 justify-center">
        {values.map((value, index) => (
          <div
            key={index}
            className="w-for-category flex md:space-x-3 flex-col md:flex-row"
          >
            <div className="w-60 h-14 flex flex-col justify-center pl-3 rounded border border-custom-top shadow">
              <h3 className="font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4 cursor-pointer">
                {value.header}
              </h3>
              <p className="text-sm text-gray-500">{value.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomSection;
