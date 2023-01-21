import { PROFILE_NAVBAR_ACTIVE, PROFILE_NAVBAR_DEACTIVE } from '../Constant/ProfileNavConstant'

const ProfileNavActive = () => async (dispatch) => {
    dispatch({ type: PROFILE_NAVBAR_ACTIVE, payload: true })
}

const ProfileNavDeactive = () => async (dispatch) => {
    dispatch({ type: PROFILE_NAVBAR_DEACTIVE, payload: false })
}

export { ProfileNavActive, ProfileNavDeactive }