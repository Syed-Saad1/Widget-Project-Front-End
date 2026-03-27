import React from "react";

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <div className="w-full h-16 bg-white shadow">
        <div className="flex items-center justify-between w-full h-full px-8">
          <div>
            <h1 className="font-bold text-[24px] font-sans text-black li-[24px]">
              Analytics
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex justify-center text-[16px] font-medium rounded-[10px] transition-all duration-200 hover:text-white  hover:bg-[#38B1A1] text-black items-center gap-2 bg-[#F3F4F6] w-25 h-10">
              <img
                className="h-4 w-4 "
                src="src/assets/refreshicon.png"
                alt=""
              />
              <button>Refresh</button>
            </div>

            <div className="flex justify-center text-[16px] font-medium rounded-[10px]  text-white  bg-[#38B1A1] items-center gap-2 w-36 h-10">
              <img className="h-7 w-7 " src="src/assets/add.png" alt="" />
              <button>Add Widget</button>
            </div>
          </div>
        </div>
      </div>

      {/* UI */}

      <div className="h-screen flex flex-col justify-center items-center  gap-4">
        <div className="bg-[#EBE5E7] h-20 w-20 flex items-center justify-center rounded-[10px]">
          <img className="h-12 w-12 " src="src/assets/Widget-icon.png" alt="" />
        </div>
        <div>
          <h2 className="font-medium text-[20px] ">No widgets yet</h2>
        </div>
        <div>
          <p className="text-[14px] text-center text-[#826A72]">
            Click "Add Widget" to start building your personalized <br />{" "}
            analytics dashboard
          </p>
        </div>
      </div>
    </>
  );
}
