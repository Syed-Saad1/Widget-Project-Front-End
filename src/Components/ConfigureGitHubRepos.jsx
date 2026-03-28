import React from "react";
import UsernameDropdown from "./DropDownInput";
export default function ConfigureGitHubRepos() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 ">
        <div className="h-99 w-130 bg-[#ffffff] shadow-2xl rounded-3xl px-6 py-6">
          <div className="flex justify-between items-center ">
            <h1 className="text-[19px] font-[Inter,Poppins,sans-serif] font-medium text-[#000000]">
              Configure GitHub Repos
            </h1>
            <img
              className="h-4 w-4 cursor-pointer"
              src="src/assets/close.png"
              alt=""
            />
          </div>

          <div>
            <h2 className="font-bold text-[14px] font-[Inter,Poppins,sans-serif] text-[#000000] leading-6 pt-2">
              GitHub Username
            </h2>
            <input
              className="w-118 h-10.5 mt-1 px-3 py-2 text-[16px] font-[Inter,Poppins,sans-serif]  rounded-2xl outline-none border-2 border-[#38B1A1]"
              type="text"
              placeholder="Enter your Username"
              name=""
              id=""
            />
          </div>

          <div>
            <h2 className="font-bold mt-3 text-[14px] font-[Inter,Poppins,sans-serif] text-[#000000] leading-6 pt-2">
              Sort By
            </h2>
            <UsernameDropdown />
          </div>

          <div>
            <h2 className="font-bold mt-3 text-[14px] font-[Inter,Poppins,sans-serif] text-[#000000] leading-6 pt-2">
              Limit
            </h2>
            <input
              className="w-118 h-10.5 mt-1 px-3 py-2 text-[16px] font-[Inter,Poppins,sans-serif]  rounded-2xl outline-none border-2 border-[#38B1A1]"
              type="number"
              placeholder="5"
              name=""
              id=""
            />
          </div>

          <button className="w-118 h-10.5 bg-[#38B1A1] rounded-2xl mt-6 text-center text-[16px] font-[Inter,Poppins,sans-serif] text-[#ffffff] cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </>
  );
}
