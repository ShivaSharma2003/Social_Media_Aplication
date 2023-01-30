import { GET_PROFILE_SUCCESS, GET_PROFILE_REQUEST, GET_PROFILE_FAILS, GET_CURRENT_PROFILE_POSTS_FAILS, GET_CURRENT_PROFILE_POSTS_REQUEST, GET_CURRENT_PROFILE_POSTS_SUCCESS } from '../Constant/ProfileConstant'
import { FOLLOW_USER_FAILS, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILS, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS } from '../Constant/ProfileConstant'

const GetProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return { loading: true }
        case GET_PROFILE_SUCCESS:
            return { loading: false, profile: action.payload }
        case GET_PROFILE_FAILS:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

const GetCurrentProfilePostsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CURRENT_PROFILE_POSTS_REQUEST:
            return { loading: true }
        case GET_CURRENT_PROFILE_POSTS_SUCCESS:
            return { loading: false, posts: action.payload }
        case GET_CURRENT_PROFILE_POSTS_FAILS:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

const FollowUserReducer = (state = [], action) => {
    switch (action.type) {
        case FOLLOW_USER_REQUEST:
            return { loading: true }
        case FOLLOW_USER_SUCCESS:
            return { loading: false, Followings: action.payload }
        case FOLLOW_USER_FAILS:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

const UnfollowUserReducer = (state = {}, action) => {
    switch (action.type) {
        case UNFOLLOW_USER_REQUEST:
            return { loading: true }
        case UNFOLLOW_USER_SUCCESS:
            return { loading: false, unfollowings: action.payload }
        case UNFOLLOW_USER_FAILS:
            return { loading: false, error: action.error }
        default:
            return state;
    }
}

export { GetProfileReducer, GetCurrentProfilePostsReducer, FollowUserReducer, UnfollowUserReducer }