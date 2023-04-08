import { async } from '@firebase/util'
import React, { useEffect } from 'react'
import { GoogleButton } from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signin = () => {

    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate()

    const handleGoogleSignIn = async () =>{
        try {
            await googleSignIn();
            
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        if(user !=null){
            navigate('/')
        }
    })
  return (
    <div>
        <h1>Sign in</h1>
        <div>
            <GoogleButton onClick={handleGoogleSignIn} />
        </div>
    </div>
  )
}

export default Signin