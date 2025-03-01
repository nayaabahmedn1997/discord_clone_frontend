import React, { useEffect, useState } from 'react'
import { validateMail } from '../../../../utils/validation';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import InputWithLabel from '../../../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../../../shared/components/CustomPrimaryButton';


const AddFriendDialogue = ({
    isDialogOpen,
    closeDialogHandler,
    handleSendInvitatio = () =>{}
}) => {

    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const handleSendInvitation = () =>{
        //Send friend request to server

    }

    const handleCloseDialog = () =>{
        closeDialogHandler();
        setMail("");
    }

    useEffect(()=>{
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid]);
  return (
   <Dialog 
   open={isDialogOpen}
   onClose={handleCloseDialog}
   >
    <DialogTitle>
      <Typography>
        Invite a friend
      </Typography>
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        <Typography>
          Enter the e-mail address of friend which you would like to invite
        </Typography>
        </DialogContentText>
        <InputWithLabel 
        label="Mail"
        type="email"
        value ={mail}
        setValue={setMail}
        placeHolder="Enter mail address"
        />
      
    </DialogContent>
    <DialogActions>
      <CustomPrimaryButton 
      onClick={handleSendInvitation}
      disabled={!isFormValid}
      label="Send"
      additionalStyles={{
        marginLeft:"15px",
        marginRight:"15px",
        marginBottom:"10px"
      }}
      />
    </DialogActions>
   </Dialog>
  )
}

export default AddFriendDialogue;