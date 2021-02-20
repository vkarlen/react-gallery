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
      <div>
        <h3>{photo.title}</h3>
        <div>{photo.description}</div>
        <button>like</button>
      </div>
    </div>
  );
}

export default GalleryItem;
