import {
    LOGIN,
    SUCCESS,
    FAILURE,
} from '../actions'

const initialState = {
isLoggingIn: false,
error:''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN:
            return{
                ...state,
                isLoggingIn: true,
                error: ''
            }
            case SUCCESS:
                    return {
                        ...state,
                        isLoggingIn: false,
                        error:''
                    };
            case FAILURE:
                return{
                    ...state,
                    isLoggingIn:false,
                    error: action.payload
                }
        default:
            return state;            

    }
}