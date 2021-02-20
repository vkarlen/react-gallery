import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [photoList, setPhotoList] = useState([]);

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

  const handleClick = (index) => {
    console.log('in click', index);

    axios
      .put(`/gallery/toggle/${index}`)
      .then((res) => {
        console.log('back from put');
        getPhotos();
      })
      .catch((err) => {
        console.log('err in put', err);
      });
  }; // end handleClick

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList photoList={photoList} handleClick={handleClick} />
      {/* <img src="/images/frida-first.jpg"></img>; */}
    </div>
  );
}

export default App;
