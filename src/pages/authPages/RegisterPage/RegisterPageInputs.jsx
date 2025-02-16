import React from 'react'
import InputWithLabel from '../../../shared/components/InputWithLabel';

const RegisterPageInputs = (props) => {

    const {mail, setMail, username,
         setUsername, password,
         setPassword
        } = props;
  return (
    <>
    <InputWithLabel 
    value = {mail}
    setValue = {setMail}
    label="E-mail address"
    type="email"
    placeholder = "Enter e-mail address"
    />
     <InputWithLabel 
    value = {username}
    setValue = {setUsername}
    label="User name"
    type="text"
    placeholder = "Enter user name"
    />
     <InputWithLabel 
    value = {password}
    setValue = {setPassword}
    label="Password"
    type="password"
    placeholder = "Enter the password"
    />
    </>
  )
}

export default RegisterPageInputs