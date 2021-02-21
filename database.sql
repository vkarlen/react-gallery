-- Clear table if it exists
DROP TABLE IF EXISTS "gallery";

-- Create Table
CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(80),
  "path" VARCHAR(1024) NOT NULL,
	"description" VARCHAR(250),
  "likes" NUMERIC DEFAULT 0
);

-- Image data
INSERT INTO "gallery"
	("title", "path", "description")
VALUES
  ('Frida', '/images/frida-now.jpg', 'My puppy, Frida. Still only 7 months old.'),
  ('New Baby Sister', '/images/frida-first.jpg', 'The first time Frida and Ender met. Hard to believe she was ever that tiny!'),
  ('Adventure Boy', '/images/ender-hiking.jpg', 'Hiking with Ender in Tettegouche State Park last fall.'),
  ('Baby Endy', '/images/ender-first.jpg', 'The first day Ender came home.'),
  ('ACNH', '/images/ACNH.png', 'On my Animal Crossing island'), 
  ('Scully', '/images/scully.jpg', 'The pretty boy of the house.'),
  ('Phyllis Vance of Vance Refrigeration', '/images/phyllis.jpg', 'My office pet when I worked at Chuck & Dons.'),
  ('Zebra Schnoz', '/images/zebra.jpg', 'One of my collection of animal skulls. This one came from a tribe in Africa that uses the rest of the animal for food.'),
  ('Art', '/images/art.png', 'Art piece I did for a friend.'),
  ('Rescued', '/images/foster.jpg', 'The reason I foster... Barnes the day I picked him up from transport.'),
  ('Barnes', '/images/barn-adopt.jpg', 'Barnes waiting for his adoption papers to be signed! Hes now living his best life on an apple orchard up north.'),
  ('Hi Buddy', '/images/mulder-high.jpg', 'Post surgery Mulder, enjoying the pain meds and a newly cancer free life.'),
  ('Ms. Lenny', '/images/lenny.jpg', 'Probably one of the most punk rock dogs youll ever meet.'),
  ('Sonrisa', '/images/sonrisa.jpg', 'Her name means smile in Spanish. We thought it was fitting.'),
  ('Izzy', '/images/izzy.jpg', 'Nicknamed Busy Izzy because she never stopped moving.');
