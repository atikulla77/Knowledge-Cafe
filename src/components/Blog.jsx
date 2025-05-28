
import BlogCard from "./BlogCard";


const Blog = ({ blogs, handleAddToBookmarks, handleSpentTimeOnRead, handleRemoveToBookmarks }) => {

  return (
    <div className="w-[845px]">
      {/* Card */}
      {blogs.map((blog) => {
        return (
          <BlogCard key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleSpentTimeOnRead={handleSpentTimeOnRead} handleRemoveToBookmarks={handleRemoveToBookmarks} />
        )
      })}
    </div>
  );
};



export default Blog;
