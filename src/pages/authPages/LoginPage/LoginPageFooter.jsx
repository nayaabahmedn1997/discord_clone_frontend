import React from 'react'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../../shared/components/RedirectInfo'
import { useNavigate } from "react-router-dom"
import { Tooltip } from '@mui/material'


const LoginPageFooter = ({
    handleLogin,
    isFormValid
}) => {

  const navigate = useNavigate();
  const handlePushToRegister = () =>{
    navigate('/register');
  }
  
  
const getFormNotValidMessage = ()=>{
  return 'Enter correct email password should contain between 6 and 12 characters'
}

const getFormValidMessage = () =>{
  return 'Press to login'
}

  return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage(): getFormValidMessage()}
    >
    <div>
        <CustomPrimaryButton 
        label="Log in"
        additionalStyles={{marginTop:'30px'}}
        disabled={!isFormValid}
        onClick={handleLogin}
        />
          <RedirectInfo 
            text="Need an account?"
            redirectText="Create an account"
            additionalStyles={{marginTop:'5px'}}
            redirectHandler={handlePushToRegister}
         />
    </div>
    </Tooltip>
    </>
  )
}

export default LoginPageFooter