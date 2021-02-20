import './GalleryItem.css';
import { FaHeart } from 'react-icons/fa';

function GalleryItem({ photo, handleClick, handleLike, idClicked }) {
  return (
    <div className="imgBlock">
      <img
        src={photo.path}
        onClick={() => {
          handleClick(photo.id);
        }}
      />
      {photo.id == idClicked ? (
        <div className="desc">
          <h3>{photo.title}</h3>
          <div>{photo.description}</div>
        </div>
      ) : (
        <div></div>
      )}
      <button
        onClick={() => {
          handleLike(photo.id);
        }}
        className="likeBtn"
      >
        <FaHeart color="#c22a2a" /> {photo.likes}
      </button>
    </div>
  );
}

export default GalleryItem;
