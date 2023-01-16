import React from 'react';
import {useState, useEffect } from 'react'
import axios from 'axios';

const Poem = () => {
  const [poemInfo, setPoemInfo] = useState({
    title: '',
    content: ''
  })

    const savePoem = () => {
      console.log(poemInfo)
      axios
      .post('http://localhost:5000/api/poems', poemInfo, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("jwt")}`
        }
      })
      .then(response => {
          console.log('omg')
      })
    }

    const updatePoemInfo = (event) => {
      console.log(event.target.value)
      setPoemInfo((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }))
    }

    return (
    <div className="poem-container">
        <PoemTitleInput className="poem-container-item" x={updatePoemInfo}/>
        <PoemBodyInput className="poem-container-item" x={updatePoemInfo}/>
        <div>
        <button onClick={savePoem}>Save</button>
        <button>Save and publish</button>
      </div>
      </div>
    )  
}

const PoemTitleInput = (props) => {
    return (
      <div>
        <form>
          <input name='title' onChange={props.x} id="PoemTitleInput" placeholder="Poem Title"/><br/>
        </form>
      </div>
    )
  }
  
  const PoemBodyInput = (props) => {
    return (
    <div>
      <textarea name='content' onChange={props.x} id="PoemTextInput" cols="50" rows="10"></textarea><br/>
    </div>
  )}

  export default Poem