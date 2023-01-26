import { GET_PROFILE_SUCCESS, GET_PROFILE_REQUEST, GET_PROFILE_FAILS, GET_CURRENT_PROFILE_POSTS_FAILS, GET_CURRENT_PROFILE_POSTS_REQUEST, GET_CURRENT_PROFILE_POSTS_SUCCESS } from '../Constant/ProfileConstant'

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

export { GetProfileReducer,GetCurrentProfilePostsReducer}