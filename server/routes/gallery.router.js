const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  res.send(galleryItems);
}); // END GET Route

// PUT Route
router.put('/toggle/:id', (req, res) => {
  const photoID = Number(req.params.id);
  //console.log(photoID);

  for (const photo of galleryItems) {
    if (photo.id === photoID) {
      //console.log(photo);
      photo.isClicked = !photo.isClicked ? true : false;
      res.sendStatus(200);
    }
  }
  res.sendStatus(400);
});

module.exports = router;
