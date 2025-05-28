
import BlogCard from "./BlogCard";


const Blog = ({ blogs, handleAddToBookmarks, handleSpentTimeOnRead }) => {

  return (
    <div className="w-[845px]">
      {/* Card */}
      {blogs.map((blog) => {
        return (
          <BlogCard key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleSpentTimeOnRead={handleSpentTimeOnRead} />
        )
      })}
    </div>
  );
};



export default Blog;
