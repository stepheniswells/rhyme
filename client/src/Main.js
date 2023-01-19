import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Explore from './Explore'
import Create from './Create'
import Login from './Login'
import Register from './Register'

const Main = (props) =>{
    const logout = () =>{
        console.log('logging out')
        props.setUserLogin(false)
        localStorage.removeItem("jwt")
        localStorage.removeItem("username")
    }

    return (
        <Router>
            <div className="navbar">
                <Link className="navLink" to ="/">Explore</Link>
                <Link className="navLink" to ="/create">Create</Link>             
                <Link className="navLink" to ="/register">Register</Link>
                {!props.loggedIn 
                    ? <Link className="navLink" to ="/login">Login</Link>
                    :   <>
                            <em className='navLink'>Logged in as {localStorage.getItem("username")}</em>
                            <button onClick={logout}>Logout</button>
                        </>
                } 
            </div>

            <Routes>
                <Route path="/" element={<Explore />} />
                <Route path="/create" element={<Create />} />
                <Route path="/login" element={<Login setUserLogin={props.setUserLogin}/>} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default Main