import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DogBreedDetail() {
  const [imageUrl, setImageUrl] = useState('');
  const { breed } = useParams();

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(data => setImageUrl(data.message))
      .catch(error => console.error(error));
  }, [breed]);

  return (
    <div>
      <h1>{breed}</h1>
      {imageUrl && <img src={imageUrl} alt={breed} />}
    </div>
  );
}

export default DogBreedDetail;
