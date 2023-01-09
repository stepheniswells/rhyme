import React from 'react';

const Poem = () => {
    return (
    <div className="poem-container">
        <PoemTitleInput className="poem-container-item"/>
        <PoemBodyInput className="poem-container-item"/>
      </div>
    )  
}

const PoemTitleInput = () => {
    return (
      <div>
        <form>
          <input id="PoemTitleInput" placeholder="Poem Title"/><br/>
        </form>
      </div>
    )
  }
  
  const PoemBodyInput = () => (
    <div>
      <textarea id="PoemTextInput" cols="50" rows="10"></textarea><br/>
      <div>
        <button>Save</button>
        <button>Save and publish</button>
      </div>
    </div>
  )

  export default Poem