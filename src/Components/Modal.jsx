import React from "react";

export default function Modal() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100 bg-opacity-50">
        <div className="h-140 w-135 bg-[#ffffff] shadow-2xl rounded-2xl">
          <div className="flex justify-between items-center m-4">
            <h1 className="text-[20px] font-medium text-black">Add Widget</h1>
            <img
              className="h-4 w-4 cursor-pointer"
              src="src/assets/close.png"
              alt=""
            />
          </div>

          <div>
            <h2 className="px-4 text-[#38b1a1] text-[15px] font-bold">
              GITHUB
            </h2>

            <div className="h-18 w-md hover:bg-[#f5f5f5] rounded-lg mt-2 mx-4 cursor-pointer">
              <h3 className="px-7 pt-2 text-black font-medium hover:text-[#38b1a1]">
                Github Profile
              </h3>
              <p className="px-7 pb-4 text-[13px] text-[#AF99A1]">
                User Stats:repos, followers,gists
              </p>
            </div>
            <div className="h-18 w-md hover:bg-[#f5f5f5] rounded-lg mx-4 cursor-pointer">
              <h3 className="px-7   text-black font-medium hover:text-[#38b1a1]">
                Github Repos
              </h3>
              <p className="px-7 pb-4 text-[13px] text-[#AF99A1]">
                Repository:List with stars and forks
              </p>
            </div>
          </div>

          <div>
            <h2 className="px-4 text-[#38b1a1] text-[15px] font-bold">
              DEV.TO
            </h2>

            <div className="h-18 w-md hover:bg-[#f5f5f5] rounded-lg mt-4 mx-4 cursor-pointer">
              <h3 className="px-7 pt-2 text-black font-medium hover:text-[#38b1a1]">
                Dev.To Articles
              </h3>
              <p className="px-7 pb-4 text-[13px] text-[#AF99A1]">
                Latest articles with reaction and comments
              </p>
            </div>
          </div>

          <div>
            <h2 className="px-4 text-[#38b1a1] text-[15px] font-bold">
              STACK OVERFLOW
            </h2>

            <div className="h-18 w-md hover:bg-[#f5f5f5] rounded-lg mt-4 mx-4 cursor-pointer">
              <h3 className="px-7 pt-2 text-black font-medium hover:text-[#38b1a1]">
                StackOverflow Summary
              </h3>
              <p className="px-7 pb-4 text-[13px] text-[#AF99A1]">
                User stats,reputation,and badges
              </p>
            </div>
          </div>

          <div>
            <h2 className="px-4 text-[#38b1a1] text-[15px] font-bold">
              HACKER NEWS
            </h2>

            <div className="h-18 w-md hover:bg-[#f5f5f5] rounded-lg mt-4 mx-4 cursor-pointer">
              <h3 className="px-7 pt-2 text-black font-medium hover:text-[#38b1a1]">
                Hacker News Activity
              </h3>
              <p className="px-7 pb-4 text-[13px] text-[#AF99A1]">
                Recent submission and karma
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
