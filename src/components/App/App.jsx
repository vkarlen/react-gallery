import React from 'react';
import { useEffect, useState } from 'react';
// import { FaHeart } from 'react-icons/fa';
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
    console.log('in get');

    axios
      .get('/gallery')
      .then((res) => {
        console.log('back', res.data);
        setPhotoList(res.data);
      })
      .catch((err) => {
        console.log('err getting gallery', err);
      });
  }; // end getPhotos

  function handleLike(photoID) {
    console.log('in like', photoID);

    axios
      .put(`/gallery/like/${photoID}`)
      .then((res) => {
        console.log('back from like');
        getPhotos();
      })
      .catch((err) => {
        console.log('Error in likes');
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList
        photoList={photoList}
        setIDClicked={setIDClicked}
        handleLike={handleLike}
        idClicked={idClicked}
        // icon={FaHeart}
      />
      {/* <img src="/images/frida-first.jpg"></img>; */}
    </div>
  );
}

export default App;
