
import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='space-y-5 py-12'>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center space-x-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className="text-2xl"><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h3>Title: {title}</h3>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className="text-purple-700 underline" onClick={()=>handleMarkAsRead(id, reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;