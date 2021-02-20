import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ photoList }) {
  //console.log('in gallery', photoList);

  return (
    <div id="imgContainer">
      {photoList.map((photo, index) => {
        return <GalleryItem key={index} photo={photo} />;
      })}
    </div>
  );
}

export default GalleryList;
