import {useState, useEffect } from 'react'
import axios from 'axios'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const {email, password } = userInfo

    const onChange = (event) => {
        setUserInfo((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const loginUser = (event) => {
      event.preventDefault()
      axios
      .post('http://localhost:5000/api/users/login', userInfo)
      .then(response => {
          console.log('Logged in successfully')
          localStorage.setItem("jwt", response.data.token)
      })
    }

    return (
      <div>
        <form onSubmit={loginUser}>
            <input type="text" value={email} placeholder='Email' onChange={onChange} name='email'/>
            <input type="text" value={password} placeholder='Password' onChange={onChange} name='password'/>
            <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
  
  export default Login