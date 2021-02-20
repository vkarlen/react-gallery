import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ photoList, handleClick, handleLike, idClicked }) {
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
            idClicked={idClicked}
          />
        );
      })}
    </div>
  );
}

export default GalleryList;
