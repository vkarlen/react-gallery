import './GalleryItem.css';

function GalleryItem({ photo }) {
  return (
    <div className="imgBlock">
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
