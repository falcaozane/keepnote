import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Header = () => {

  const {user, logOut}= UserAuth();
  const handleSignOut = async()=>{
    try {

      await logOut()
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <header>
        <h3>
        <DescriptionIcon />Note-It
        </h3>
        {/*
        {user?.displayName ? (
          <button onClick={handleSignOut}>Logout</button>
          ) : (
          <Link to='/signin' style={{'textDecoration':'none'}}>Sign-in</Link>
        )} 
          */}
      </header>
    </div>
  )
}

export default Header