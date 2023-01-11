import React, { useState, useEffect } from 'react';

function ListAllBreeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => setBreeds(Object.keys(data.message)))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>List of All Dog Breeds</h1>
      <ul>
        {breeds.map(breed => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListAllBreeds;
