import { GET_PROFILE_SUCCESS, GET_PROFILE_REQUEST, GET_PROFILE_FAILS, GET_CURRENT_PROFILE_POSTS_FAILS, GET_CURRENT_PROFILE_POSTS_REQUEST, GET_CURRENT_PROFILE_POSTS_SUCCESS } from '../Constant/ProfileConstant'
import { FOLLOW_USER_FAILS, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILS, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS } from '../Constant/ProfileConstant'

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
        sessionStorage.setItem('userProfile', JSON.stringify(data))
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
        sessionStorage.setItem("userPosts", JSON.stringify(data))
        dispatch({ type: GET_CURRENT_PROFILE_POSTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_CURRENT_PROFILE_POSTS_FAILS, error: error.response })
    }
}

const FollowUserAction = (id) => async (dispatch, getState) => {
    const { AuthLogin: { Token: { Token } } } = getState()
    const headers =
    {
        'Authorization': `Bearer ${Token}`
    }
    try {
        dispatch({ type: FOLLOW_USER_REQUEST })
        const { data } = await Axios.post(`profile/follow/${id}`, {}, { headers: headers })
        dispatch({ type: FOLLOW_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FOLLOW_USER_FAILS, error: error.response })
    }
}

const UnfollowUserAction = (id) => async (dispatch, getState) => {
    const { AuthLogin: { Token: { Token } } } = getState()
    const config = {
        headers:
        {
            Authorization: `Bearer ${Token}`
        }
    }
    try {
        dispatch({ type: UNFOLLOW_USER_REQUEST })
        const {data} = await Axios.post(`profile/unfollow/${id}`, {}, config)
        dispatch({ type: UNFOLLOW_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UNFOLLOW_USER_FAILS, error: error.response })
    }
}

export { GetProfileAction, GetCurrentProfilePostsAction, FollowUserAction, UnfollowUserAction }