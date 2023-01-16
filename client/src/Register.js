import {useState, useEffect } from 'react'
import axios from 'axios'

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const {username, email, password, password2 } = userInfo

    const onChange = (event) => {
        setUserInfo((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const registerUser = (event) => {
        event.preventDefault()
        const user = {name: username, email: email, password: password }
        axios
            .post('http://localhost:5000/api/users', user)
            .then(response => {
                console.log('success?')
        })
    }

    return (
      <div>
        Register
        <form onSubmit={registerUser}>
            <input type="text" value={username} placeholder='Enter a username' onChange={onChange} name='username'/>
            <input type="text" value={email} placeholder='Enter your email' onChange={onChange} name='email'/>
            <input type="text" value={password} placeholder='Enter a password' onChange={onChange} name='password'/>
            <input type="text" value={password2} placeholder='Confirm password' onChange={onChange} name='password2'/>
            <button type='submit'>Create Account</button>
        </form>
        <p> I suggest you don't reuse one of your passwords from somewhere else</p>
      </div>
    )
  }
  
  export default Register