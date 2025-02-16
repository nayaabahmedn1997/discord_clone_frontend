import React, { useEffect, useState } from 'react'
import AuthBox from '../../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../../utils/validation';
import { getActions } from '../../../store/actions/authActions.action';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapActionsToProp = (dispatch)=>{
  return {
    ...getActions(dispatch),
  }
}


const LoginPage = ({login}) => {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () =>{
   const userDetails = {
    mail,
    password
   };

   login(userDetails, navigate);

  }


  useEffect(()=>{
    setIsFormValid(validateLoginForm({mail,password}))
  },[mail, password, isFormValid]);



  return (
   <AuthBox>
   <LoginPageHeader />
   <LoginPageInputs 
   mail={mail}
   setMail = {setMail}
   password = {password}
   setPassword = {setPassword}
   />
   <LoginPageFooter 
   isFormValid={isFormValid}
   handleLogin={handleLogin}
   />
   </AuthBox>
  )
}



export default connect(null, mapActionsToProp)(LoginPage);