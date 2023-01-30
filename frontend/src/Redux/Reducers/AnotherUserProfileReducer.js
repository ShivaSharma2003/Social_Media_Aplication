import { SUGGESTED_PROFILE_ERROR, SUGGESTED_PROFILE_REQUEST, SUGGESTED_PROFILE_SUCCESS } from '../Constant/AnotherUserProfileConstant'

const SuggestedUserProfilereducer = (state = {}, action) => {
    switch (action.type) {
        case SUGGESTED_PROFILE_REQUEST:
            return { laoding: true }
        case SUGGESTED_PROFILE_SUCCESS:
            return { loading: false, SuggestedProfile: action.payload }
        case SUGGESTED_PROFILE_ERROR:
            return { loading: false, error: action.error }
        default:
            return state;
    }
}

export {SuggestedUserProfilereducer}