import alertActions from "../actions/alertActions.action";

const initialState = {
    showAlertMessage: false,
    alertMessageContent: null
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case alertActions.OPEN_ALERT_MESSAGE:
            return {
                ...state,
                alertMessageContent: action.content,
                showAlertMessage: true
            }
        case alertActions.CLOSE_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: false,
                alertMessageContent: null
            }
        default:
            return state;
    }
}


export default reducer;