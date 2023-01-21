import { PROFILE_NAVBAR_ACTIVE, PROFILE_NAVBAR_DEACTIVE } from '../Constant/ProfileNavConstant'

const ProfileNavReducer = (state = { ProfileNavState: false }, action) => {
    switch (action.type) {
        case PROFILE_NAVBAR_DEACTIVE:
            return { ProfileNavState: action.payload }
        case PROFILE_NAVBAR_ACTIVE:
            return { ProfileNavState: action.payload }
        default:
            return state
    }
}

export {ProfileNavReducer}