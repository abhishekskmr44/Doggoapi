import { withRouter } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BreedDetailPage({match}) {
  const [imageUrl, setImageUrl] = useState('');
  const { breed } = match.params;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
      setImageUrl(result.data.message);
    };
    fetchData();
  }, [breed]);

  return (
    <div>
      <h1>{breed}</h1>
      <img src={imageUrl} alt={breed} />
    </div>
  );
}

export default withRouter(BreedDetailPage);