import { useState, useEffect } from 'react'
import axios from 'axios'

const Explore = () => {
    return (
        <div>
            <PoemFeed className="poem-feed" />
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

    return (
        <div className="poem-feed">
            <ul>
                {poems.map(poem => <PoemFeedItem key={poem._id} poem={poem} />)}
            </ul>
        </div>
    )
}
const convertDate = (date) => {
    return new Date(date).toLocaleString()
}

const PoemFeedItem = (props) => {

    
    const displayComment = (comments) => {
        if(Array.isArray(comments) && comments.length > 0){
            return (
                <ul>
                    {comments.map(comment => <PoemComment key={comment._id} comment={comment}/>)}
                </ul>
            )
        }
    }

    return (
        <div>
            <div id="poem-feed-item">
                <div id="poem-feed-user">{props.poem.username}
                    <span id="poem-feed-title"> {props.poem.title} </span>
                </div>
                <div id="poem-feed-content">{props.poem.content}</div>
                <div id="poem-feed-date">{convertDate(props.poem.createdAt)}</div>      
            </div>
            <div id="poem-feed-comments">{displayComment(props.poem.comments)}</div>
            <br/>
        </div>
    )
}

const PoemComment = (props) => {
    console.log(props)
    return (
        <div>
            <div id="poem-comment">
                <div id="comment-user">{props.comment.user}</div>
                <div id="comment-content">{props.comment.content}</div>
                <div id="comment-date">{convertDate(props.comment.date)}</div>      
            </div>
            <br/>
        </div>
    )
}

export default Explore