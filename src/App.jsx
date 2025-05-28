import { useEffect, useState } from 'react';
import './App.css'
import Blog from './components/Blog'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarksSpentTime, setBookmarksSpentTime] = useState(0);

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  const handleAddToBookmarks = (blog) => {
    let updatedBookmarks;
    if (!bookmarks.includes(blog)) {
      updatedBookmarks = [...bookmarks, blog];
    } else {
      updatedBookmarks = [...bookmarks];
    }
    setBookmarks(updatedBookmarks)
  }

  const handleSpentTimeOnRead = (blog) => {
    let totalReadingTime = bookmarksSpentTime + blog.reading_time;
    setBookmarksSpentTime(totalReadingTime)
  }

  return (
    <div className='w-[1280px] h-full mx-auto exo2font'>

      <Header />

      <div className='w-full pt-[2rem] flex justify-between pb-[20rem]'>
        <Blog blogs={blogs} handleAddToBookmarks={handleAddToBookmarks} handleSpentTimeOnRead={handleSpentTimeOnRead} />
        <Bookmarks bookmarks={bookmarks} bookmarksSpentTime={bookmarksSpentTime} />
      </div>

    </div>
  )
}

export default App
