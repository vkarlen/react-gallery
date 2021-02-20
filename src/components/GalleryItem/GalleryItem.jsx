import './GalleryItem.css';

function GalleryItem({ photo, handleClick, handleLike }) {
  return (
    <div className="imgBlock">
      <img
        src={photo.path}
        onClick={() => {
          handleClick(photo.id);
        }}
      />
      {photo.isClicked ? (
        <div className="desc">
          <h3>{photo.title}</h3>
          <div>{photo.description}</div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="likeContainer">
        <button
          onClick={() => {
            handleLike(photo.id);
          }}
        >
          likes: {photo.likes}
        </button>
      </div>
    </div>
  );
}

export default GalleryItem;
