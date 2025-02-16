import React from 'react'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../../shared/components/RedirectInfo'
import { useNavigate } from "react-router-dom"
import { Tooltip } from '@mui/material'


const RegisterPageFooter = ({
    handleRegister,
    isFormValid
}) => {

  const navigate = useNavigate();
  const handlePushToLogin = () =>{
    navigate('/login');
  }
  
  
const getFormNotValidMessage = ()=>{
  return 'Username should contains between 3 ad 12 characters and password should contain between 6 and 1 characters.Also correct e-mail address should be provided'
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
        label="Register"
        additionalStyles={{marginTop:'30px'}}
        disabled={!isFormValid}
        onClick={handleRegister}
        />
          <RedirectInfo 
            text="Already have an account? "
            redirectText="Click here to login"
            additionalStyles={{marginTop:'5px'}}
            redirectHandler={handlePushToLogin}
         />
    </div>
    </Tooltip>
    </>
  )
}

export default RegisterPageFooter