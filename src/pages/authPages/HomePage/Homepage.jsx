import React, { useEffect } from 'react'
import {styled} from '@mui/system';
import SideBar from './sidebar/SideBar';
import FriendsSideBar from './FreindSidebar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '../../../utils/auth';
import  {connect} from "react-redux";
import { getActions } from '../../../store/actions/authActions.action';

const Wrapper = styled('div')({
  width:'100%',
  height:'100vh',
  display:'flex',

})

const Homepage = ({setUserDetails}) => {

  useEffect(()=>{
    const userDetails = localStorage.getItem('user');
    if(!userDetails)
    {
      logout();
    }
    else
    {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);

  return  <Wrapper>
    <SideBar />
    <FriendsSideBar />
    <Messenger />
    <AppBar />
  </Wrapper>
}

const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch),
  }
}
export default  connect(null, mapActionsToProps) (Homepage);