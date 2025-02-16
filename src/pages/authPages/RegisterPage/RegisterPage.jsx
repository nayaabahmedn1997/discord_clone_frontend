import React, { useEffect, useState } from 'react'
import AuthBox from '../../../shared/components/AuthBox'
import { Typography } from '@mui/material'
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../../utils/validation';
import { useNavigate } from 'react-router-dom';
import { getActions } from '../../../store/actions/authActions.action';
import {connect} from 'react-redux';
 
const mapActionsToProp = (dispatch)=>{
  return {
    ...getActions(dispatch),
  }
}

const RegisterPage = ({register}) => {

  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false) ;

  const handleRegister = () =>{
    const userDetails ={
      mail,
      username,
      password
    }
    register(userDetails, navigate);
  }

  useEffect(()=>{
    setIsFormValid(validateRegisterForm({
      mail,
      password, 
      username
    }))
  },
  [mail, username, password, setIsFormValid]
    );

  return (
   <AuthBox>
    <Typography
    variant='5'
    sx={{color:"white"}}
    >
      Create an account
    </Typography>
    <RegisterPageInputs 
     mail = {mail}
     setMail = {setMail}
     username = {username}
     setUsername={setUsername}
     password = {password}
     setPassword = {setPassword}
    />
    <RegisterPageFooter 
    handleRegister={handleRegister}
    isFormValid={isFormValid}
    />
   </AuthBox>
  )
}

export default connect(null, mapActionsToProp)(RegisterPage);