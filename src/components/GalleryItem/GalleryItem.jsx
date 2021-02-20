import './GalleryItem.css';

function GalleryItem({ photo, handleClick }) {
  return (
    <div
      className="imgBlock"
      onClick={() => {
        handleClick(photo.id);
      }}
    >
      <img src={photo.path} />
      {photo.isClicked ? (
        <div className="desc">
          <h3>{photo.title}</h3>
          <div>{photo.description}</div>
        </div>
      ) : (
        <div></div>
      )}
      <button className="liked">like</button>
    </div>
  );
}

export default GalleryItem;
