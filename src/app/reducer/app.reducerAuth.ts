import { State } from './app.state';

const initialState: State = {
    auth: false,
    messageRegister: '',
}

export function ReducerAuth(state = initialState, action) {
    switch (action.type) {
        case "REGISTRATION":
            return {
                ...state,
                messageRegister: action.payload
            }
        case "LOGIN_IN":
            return {
                ...state,
                auth: true
            };
        case "LOGIN_OUT":
            return {
                ...state,
                auth: false
            };
        default:
            return state
    }
}