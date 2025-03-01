import React from 'react'
import {styled} from '@mui/material';
import FriendsListItem from './FriendsListItem';


const DUMMY_FRIENDS = [
  {
    id:1,
    username: 'Mark',
    isOnline: true
  },
  {
    id:2,
    username: 'Anna',
    isOnline: false
  },
  {
    id:1,
    username: 'John',
    isOnline: false
  },
]

const MainContainer = styled('div')({
    flexGrow:1,
    width:"100%"
})

const FriendsList = () => {
  return (
  <MainContainer>
    {
      DUMMY_FRIENDS.map((friend)=>(
        <FriendsListItem 
        username = {friend.username}
        id={friend.id}
        key={friend.id}
        isOnline={friend.isOnline}
        />
      ))
    }

  </MainContainer>
  )
}

export default FriendsList