import { AUTH_LOGIN_FAILS, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_REQUEST, AUTH_REGISTER_FAILS, AUTH_REGISTER_SUCCESS, AUTH_REGISTER_REQUEST } from '../Constant/AuthConstant'
import Axios from '../../Axios'

const LoginAction = (email, Password) => async (dispatch) => {
    const Options = {
        Password, email
    }
    try {
        dispatch({ type: AUTH_LOGIN_REQUEST })
        const { data } = await Axios.post('auth/login', Options)
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data })
        localStorage.setItem("LoginUser", JSON.stringify({ data }))
    } catch (error) {
        dispatch({ type: AUTH_LOGIN_FAILS, error: error.response })
    }
}

const RegisterAction = (userName, email, phoneNumber, Password, FullName) => async (dispatch) => {
    const options = {
        userName, email, phoneNumber, Password, FullName
    }

    try {
        dispatch({ type: AUTH_REGISTER_REQUEST })
        const { data } = await Axios.post("auth/register", options)
        dispatch({ type: AUTH_REGISTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: AUTH_REGISTER_FAILS, error: error.response })
    }
}

export { LoginAction, RegisterAction }