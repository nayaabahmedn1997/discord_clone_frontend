import React, { useState } from 'react'

import CustomPrimaryButton from '../../../../shared/components/CustomPrimaryButton';
import AddFriendDialogue from './AddFriendDailogue';



const additionalStyles = {
  backgroundColor: "#3ba55d",
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  
}

const AddFriendButton = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleOpenAddFriendDialog = () =>{
   
    setIsDialogOpen(true);
  };
  const handleCloseAddFriendDialog = () =>{
    setIsDialogOpen(false);
  }


  return (
    <>
    <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialogue 
       isDialogOpen={isDialogOpen}
       closeDialogHandler={handleCloseAddFriendDialog}
      
      />
    </>
  )
}

export default AddFriendButton;