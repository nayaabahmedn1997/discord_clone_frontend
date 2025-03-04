import { styled } from '@mui/material'
import React from 'react'
import PendingInvitationsListItem from './PendingInvitationsListItem'


const DUMMY_INVITATIONS =[
  {
    _id:'1',
    senderId:{
      username: 'Mark',
      mail:"dummy@ad.com"
    }
  },
  {
    _id:'2',
    senderId:{
      username: 'John',
      mail:"john@ad.com"
    }
  },
]

const MainContainer = styled('div')({
   
    width:"100%",
    height:"22%",
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    overflow:'auto'
})


const PendingInvitationList = () => {
  return (
   <MainContainer>
    {
      DUMMY_INVITATIONS.map((invitation)=>(
        <PendingInvitationsListItem 
        key={invitation._id}
        id={invitation._id}
        username={invitation.senderId.username}
        mail={invitation.senderId.mail}
        />
      ))
    }
   </MainContainer>
  )
}

export default PendingInvitationList