
import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks)
    return (
        <div className="md:w-1/3">
            <h3 className='mt-12 ml-3 text-2xl text-purple-800 p-4 bg-slate-100'>Reading Time: {readingTime}</h3>
            <div className='bg-gray-100 ml-3'>
            <h3 className='text-2xl p-4'>Bookmarks: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;