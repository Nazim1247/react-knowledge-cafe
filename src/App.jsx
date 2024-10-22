
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'

import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove bookmark from blog
    // console.log('added id', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
 
  return (
    <>
     <Header></Header>
     <div className='flex w-11/12 mx-auto'>
     <Blogs handleAddToBookmark={handleAddToBookmark}  handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
