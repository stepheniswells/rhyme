import Main from './Main'
import React, { useState } from 'react';

const App = () => {
  const [loggedIn, setUserLogin] = useState(localStorage.getItem("jwt"))



  return (
    <div>
      <Main loggedIn={loggedIn} setUserLogin={setUserLogin} /> 
    </div>
  )
}

export default App
