import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Profile from '../pages/user/Profile'
import NavBar from '../components/NavBar'
import MainDiv from '../components/MainDiv'
import PostCreate from './post/PostCreate'
import Post from './post/Post'
import ProfileEdit from '../pages/user/ProfileEdit'
import axios from '../constants/Axios'
import authToken from '../constants/AuthToken'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  typography: {
    marginRight: theme.spacing(2),
  }
}));

export default function Home(){ 
  useEffect(() => {
    axios.get('users',{
      headers: {
        "Authorization": authToken
      }
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err)) 
  }, [])
    return (
      <MainDiv>
       
        <NavBar />
        <PostCreate />
         {/* <Post /> */}
        {/* <Profile /> */}
        {/* <ProfileEdit /> */}
      </MainDiv>
    )
}
