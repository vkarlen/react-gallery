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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList photoList={photoList} />
      {/* <img src="/images/frida-first.jpg"></img>; */}
    </div>
  );
}

export default App;
