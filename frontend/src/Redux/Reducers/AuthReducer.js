import { AUTH_LOGIN_FAILS, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_REGISTER_FAILS, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS } from '../Constant/AuthConstant'

const AuthLoginReducer = (state = { loading: false, Token: null, Login: false }, action) => {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return { loading: true }
        case AUTH_LOGIN_SUCCESS:
            return { loading: false, Token: action.payload, Login: true }
        case AUTH_LOGIN_FAILS:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

const AuthRegisterReducer = (state = { SignUp: false }, action) => {
    switch (action.type) {
        case AUTH_REGISTER_REQUEST:
            return { loading: true }
        case AUTH_REGISTER_SUCCESS:
            return { loading: false, Register: action.payload, SignUp: true }
        case AUTH_REGISTER_FAILS:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export { AuthLoginReducer, AuthRegisterReducer }