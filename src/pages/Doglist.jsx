import React, { useState, useEffect } from 'react';
import styles from './Breedimage.module.css'



function DogImage({ breed }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(data => setImageUrl(data.message))
      .catch(error => console.error(error));
  }, [breed]);

  return (
    <img src={imageUrl} alt={`A ${breed} dog`} />
  );
}

function DogList() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => setBreeds(Object.keys(data.message)))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <ol>
        {breeds.map(breed => (
          <li key={breed} onClick={() => setSelectedBreed(breed)}>
            {breed}
          </li>
        ))}
      </ol>
      {selectedBreed && <DogImage breed={selectedBreed} />}
    </>
  );
}

export default DogList;

