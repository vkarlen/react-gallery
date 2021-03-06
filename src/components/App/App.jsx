import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [photoList, setPhotoList] = useState([]);
  const [idClicked, setIDClicked] = useState(-1);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    //console.log('in get');

    axios
      .get('/gallery')
      .then((res) => {
        //console.log('back', res.data);
        setPhotoList(res.data);
      })
      .catch((err) => {
        console.log('err getting gallery', err);
      });
  }; // end getPhotos

  function handleLike(photoID) {
    //console.log('in like', photoID);

    axios
      .put(`/gallery/like/${photoID}`)
      .then((res) => {
        //console.log('back from like');
        getPhotos();
      })
      .catch((err) => {
        console.log('Error in likes');
      });
  } // end handleLike

  function handleClick(photoID) {
    setIDClicked(photoID === idClicked ? -1 : photoID);
  } // end handleClick

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList
        photoList={photoList}
        handleClick={handleClick}
        handleLike={handleLike}
        idClicked={idClicked}
      />
    </div>
  );
}

export default App;
