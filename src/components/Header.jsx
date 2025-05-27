import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-between pt-[1.5rem] pb-[2.1rem]">
        <h1 className="text-[40px] font-[700]">Knowledge Cafe</h1>
        <img
          className="w-[60px] h-[60px] rounded-[50%]"
          src="https://i.ibb.co.com/7MWc4jk/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg"
        />
      </div>
      <div className="w-full h-[1px] bg-[#111111] opacity-[15%]"></div>
    </>
  );
};

export default Header;
