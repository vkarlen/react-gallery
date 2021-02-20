import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ photoList, handleClick, handleLike }) {
  //console.log('in gallery', photoList);

  return (
    <div id="imgContainer">
      {photoList.map((photo, index) => {
        return (
          <GalleryItem
            key={index}
            photo={photo}
            handleClick={handleClick}
            handleLike={handleLike}
          />
        );
      })}
    </div>
  );
}

export default GalleryList;
