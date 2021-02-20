import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ photoList, setIDClicked, handleLike, idClicked }) {
  //console.log('in gallery', photoList);

  return (
    <div id="imgContainer">
      {photoList.map((photo, index) => {
        return (
          <GalleryItem
            key={index}
            photo={photo}
            setIDClicked={setIDClicked}
            handleLike={handleLike}
            idClicked={idClicked}
          />
        );
      })}
    </div>
  );
}

export default GalleryList;
