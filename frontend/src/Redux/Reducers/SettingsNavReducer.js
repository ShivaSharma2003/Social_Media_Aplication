import { SETTINGS_NAV_ACTIVE, SETTINGS_NAV_DEACTIVE } from '../Constant/SettingsNavConstant'

const SettingsNavReducer = (state = {SettingsNavState : false}, action) => {
    switch (action.type) {
        case SETTINGS_NAV_ACTIVE:
            return { SettingsNavState: action.payload }
        case SETTINGS_NAV_DEACTIVE:
            return { SettingsNavState: action.payload }
        default:
            return state
    }
}

export {SettingsNavReducer} 