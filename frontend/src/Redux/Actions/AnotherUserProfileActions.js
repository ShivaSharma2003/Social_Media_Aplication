import { SUGGESTED_PROFILE_ERROR, SUGGESTED_PROFILE_REQUEST, SUGGESTED_PROFILE_SUCCESS } from '../Constant/AnotherUserProfileConstant'
import Axios from '../../Axios'

const SuggestedProfileAction = () => async (dispatch) => {
    try {
        dispatch({ type: SUGGESTED_PROFILE_REQUEST })
        const { data } = await Axios.get("get/allUsers")
        dispatch({ type: SUGGESTED_PROFILE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SUGGESTED_PROFILE_ERROR, error: error.response })
    }
}

export {SuggestedProfileAction} 