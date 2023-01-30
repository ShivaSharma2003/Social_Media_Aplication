import { TIMELINE_POSTS_FAILS, TIMELINE_POSTS_REQUEST, TIMELINE_POSTS_SUCCESS } from '../Constant/TimeLinePostsConstant'
import Axios from '../../Axios'

const TimelineAction = () => async (dispatch, getState) => {
    const { AuthLogin: { Token: { Token } } } = getState()
    const config = {
        headers:
        {
            Authorization: `Bearer ${Token}`
        }
    }
    try {
        dispatch({ type: TIMELINE_POSTS_REQUEST })
        const { data } = await Axios.get("get/timeline", config)
        dispatch({ type: TIMELINE_POSTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: TIMELINE_POSTS_FAILS, error: error })
    }
}

export { TimelineAction }