import React from "react";

const Bookmarks = ({ bookmarks, bookmarksSpentTime }) => {
    return (
        <div className="w-[411px]">
            <div className="w-full h-[80px] border-[1px] border-[#6047EC] bg-[#6047ec29] rounded-[8px] flex justify-center items-center text-center">
                <h1 className="text-[#6047EC] text-[24px] font-[700]">
                    Spent time on read : {bookmarksSpentTime} min
                </h1>
            </div>
            <div className="w-full bg-[#11111112] rounded-[8px] p-[2rem] mt-[1.5rem]">
                <h1 className="text-[24px] text-[#111111] font-[700]">
                    Bookmarked Blogs : {bookmarks.length}
                </h1>

                {/* BookMarked ---- Cards */}
                {bookmarks.map((bookmark, index) => {
                    return (
                        <div key={bookmark.id} className="w-full h-fit bg-white rounded-[8px] mt-[1rem] p-[1.1rem]">
                            <h1 className="text-[18px] font-[600] leading-[30px]">
                                {bookmark.title}
                            </h1>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Bookmarks;
