import { useState, useEffect } from 'react'
import axios from 'axios'
const User = require('../schemas/userSchema')

const Explore = () =>{
    return (
        <div>
            <h1>list of all poems</h1>
            <PoemFeed/>
        </div>
    )
}

const PoemFeed = () => {
    const [poems, setPoems] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/poems')
            .then(response => {
                setPoems(response.data)
        })
    }, [])

    return(
        <div>
            poemfeed
            <ul>
                {poems.map(poem => <PoemFeedItem key={poem._id} poem={poem}/>)}
            </ul>
        </div>
    )
}

const PoemFeedItem = (props) => {
    return (
        <div>
            <div>title: {props.poem.title} </div>
            <div>content: {props.poem.content}</div>
            <div>created at: {props.poem.createdAt}</div>
            <div>created by: {User.find}</div>
        </div>
    )
}



export default Explore