function GalleryItem({ photo }) {
  return (
    <div className="imgBlock">
      <img src={photo.path} />
    </div>
  );
}

export default GalleryItem;
