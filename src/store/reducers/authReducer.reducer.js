import { authActions } from "../actions/authActions.action";



const initialState = {
    userDetails: null
}

const authReducer = (state=initialState, action)=>{
    switch(action.type)
    {
        case authActions.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails,
            }
        case "DUMMY":
            return {
                ...state,
            }
        default :
         return state;
    }
}

export default authReducer;