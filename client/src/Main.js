import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Explore from './Explore'
import Create from './Create'
import Login from './Login'
import Register from './Register'

const Main = () =>{
    return (
        <Router>
            <div className="navbar">
                <Link className="navLink" to ="/">Explore</Link>
                <Link className="navLink" to ="/create">Create</Link>
                <Link className="navLink" to ="/login">Login</Link>
                <Link className="navLink" to ="/register">Register</Link>
            </div>

            <Routes>
                <Route path="/" element={<Explore />} />
                <Route path="/create" element={<Create />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default Main