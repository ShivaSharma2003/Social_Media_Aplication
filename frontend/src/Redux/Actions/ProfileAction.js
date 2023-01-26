import { GET_PROFILE_SUCCESS, GET_PROFILE_REQUEST, GET_PROFILE_FAILS, GET_CURRENT_PROFILE_POSTS_FAILS, GET_CURRENT_PROFILE_POSTS_REQUEST, GET_CURRENT_PROFILE_POSTS_SUCCESS } from '../Constant/ProfileConstant'

import Axios from '../../Axios'

const GetProfileAction = () => async (dispatch, getState) => {
    const { AuthLogin: { Token: { Token } } } = getState()
    const config = {
        headers:
        {
            Authorization: `Bearer ${Token}`
        }
    }
    try {

        dispatch({ type: GET_PROFILE_REQUEST })
        const { data } = await Axios.get('get/profile', config)
        dispatch({ type: GET_PROFILE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_PROFILE_FAILS, error: error.response })
    }
}

const GetCurrentProfilePostsAction = () => async (dispatch, getState) => {
    const { AuthLogin: { Token: { Token } } } = getState()
    const config = {
        headers:
        {
            Authorization: `Bearer ${Token}`
        }
    }
    try {
        dispatch({ type: GET_CURRENT_PROFILE_POSTS_REQUEST })
        const { data } = await Axios.get('get/profile/posts', config)
        dispatch({ type: GET_CURRENT_PROFILE_POSTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_CURRENT_PROFILE_POSTS_FAILS, error: error.response })
    }
}

export { GetProfileAction, GetCurrentProfilePostsAction }