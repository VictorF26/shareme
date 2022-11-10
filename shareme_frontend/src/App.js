import React, {useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import {gapi} from 'gapi-script'
import {GoogleOAuthProvider} from '@react-oauth/google'

import Login from './components/Login'
import Home from './container/Home'
import { fetchUser } from './utils/fetchUser'

const App = () => {

  const navigate = useNavigate()
  
  useEffect(() => {
    function start () {
      gapi.auth2.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  }, []);

  useEffect(()=>{
    const user = fetchUser();
    if(!user) navigate('/login')
  }, [])

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`} > 
      <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </GoogleOAuthProvider>
  )
}

export default App 