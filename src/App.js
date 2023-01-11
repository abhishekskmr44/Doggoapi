import React from 'react'
import { Route } from 'react-router'
import DogBreedDetail from './pages/Breedimage'
import ListAllBreeds from './pages/Breedlist'
// import LoginSignup from './pages/Signup'
// import Login from './pages/Signup'

const App = () => {
  return (
    <div>
      <Route path="/" exact component={ListAllBreeds} />
      <Route path="/breeds/:breed" component={DogBreedDetail} />
    </div>
  )
}

export default App
