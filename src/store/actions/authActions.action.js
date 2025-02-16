import * as api from '../../utils/api';
import { closeAlertMessage, openAlertMessage  } from './alertActions.action';

export const authActions = {
    SET_USER_DETAILS :"AUTH.SET_USER_DETAILS"
};

const setUserDetails = (userDetails)=>{
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    }
}

export const getActions = (dispatch) =>{
    return {
        login: (userDetails, history)=> dispatch(login(userDetails, history)),
        register: (userDetails, history)=> dispatch(register(userDetails, history))
    }
}

export const login = (userDetails, navigate) =>{
    return async(dispatch) =>{
        const response  = await api.login(userDetails);
        if(response.error){
            //show error message in alert
           // dispatch()
           const message = response.exception.response.data.message;
           dispatch(openAlertMessage(message));
        }
        else
        {
           
            const {userDetails} = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));
            dispatch(closeAlertMessage());
            navigate("/");
        }
    }
}

export const register = (userDetails, navigate) =>{
    return async(dispatch) =>{
        const response  = await api.register(userDetails);
        if(response.error){
            //show error message in alert
            const message = response.exception.response.data.message;
            dispatch(openAlertMessage(message));
        }
        else
        {
          
            const {userDetails} = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));
            dispatch(closeAlertMessage());
            navigate("/login")
        }
    }
}