import { TIMELINE_POSTS_FAILS, TIMELINE_POSTS_REQUEST, TIMELINE_POSTS_SUCCESS } from '../Constant/TimeLinePostsConstant'

const TimePostsReducers = (state = { TimeLinePosts: [] }, action) => {
    switch (action.type) {
        case TIMELINE_POSTS_REQUEST:
            return { loading: true }
        case TIMELINE_POSTS_SUCCESS:
            return { loading: false, TimeLinePosts: action.payload }
        case TIMELINE_POSTS_FAILS:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export { TimePostsReducers }

