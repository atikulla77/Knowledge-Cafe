import React from "react";
import { LuBookmark } from "react-icons/lu";

const Blog = ({ blogs, handleAddToBookmarks }) => {
  return (
    <div className="w-[845px]">
      {/* Card */}
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="w-full">
            <div className="w-full h-[450px] rounded-[8px] overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src={blog.cover_photo}
              />
            </div>
            <div className="w-full flex justify-between pt-[2rem]">
              <div className="flex items-center">
                <img
                  className="w-[60px] h-[60px] rounded-[50%]"
                  src={blog.author_image}
                />
                <div className="pl-[1.5rem]">
                  <h1 className="text-[24px] font-[700]">{blog.author}</h1>
                  <p className="text-[16px] text-[#111111] opacity-[60%] font-[600]">
                    {blog.posted_date}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <h1 className="text-[20px] font-[500] text-[#111111] opacity-[60%] pr-[5px]">
                  {blog.reading_time} min read
                </h1>
                {/* Bookmark */}
                <LuBookmark onClick={() => handleAddToBookmarks(blog)} className="text-[22px] text-[#111111] opacity-[60%] cursor-pointer" />
              </div>
            </div>
            <div className="pt-[1.2rem]">
              <h1 className="text-[40px] text-[#111111] font-[700] leading-[160%]">
                {blog.title}
              </h1>
              <div className="flex items-center pt-[1.5rem] pb-[1rem]">
                {blog.hashtags.map((hashtag, index) => {
                  return (
                    <p key={index} className="text-[20px] text-[#111111] opacity-[60%] font-[500] pr-[1.2rem]">{hashtag}</p>
                  )
                })}
              </div>
              <a className="text-[20px] font-[600] underline text-[#6047EC]">Mark as read</a>
            </div>
            {/* Card Underline */}
            <div className="w-full h-[1px] bg-[#111111] opacity-[10%] my-[2rem]"></div>
          </div>
        )
      })}
    </div>
  );
};

export default Blog;
