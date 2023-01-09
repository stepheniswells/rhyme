import Poem from './Poem'
import SavedPoems from './SavedPoems'
import React from 'react';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Poem/>
      <SavedPoems/>
    </div>
  )
}

const Navbar = () => {
  return (
    <div>
      navbar
    </div>
  )
}



export default App
