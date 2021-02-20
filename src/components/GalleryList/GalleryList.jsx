import './GalleryList.css';

function GalleryList({ photoList }) {
  console.log('in gallery', photoList);
  return (
    <div id="imgContainer">
      {photoList.map((photo, index) => {
        console.log(photo.path);
        return (
          <div class="imgBlock" key={photo.id}>
            <img src={photo.path} />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryList;
