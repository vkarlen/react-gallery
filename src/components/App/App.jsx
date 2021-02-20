import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [galleryList, setGalleryList] = useState();

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    console.log('in get');

    axios
      .get('/gallery')
      .then((res) => {
        console.log('back', res.data);
      })
      .catch((err) => {
        console.log('err getting gallery', err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
    </div>
  );
}

export default App;
