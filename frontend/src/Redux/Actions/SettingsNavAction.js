import { SETTINGS_NAV_ACTIVE, SETTINGS_NAV_DEACTIVE } from '../Constant/SettingsNavConstant'

const SettingNavActive = () => async(dispatch) => {
    dispatch({ type: SETTINGS_NAV_ACTIVE, payload: true })
}

const SettingNavDeactive = () => async(dispatch) => {
    dispatch({ type: SETTINGS_NAV_DEACTIVE, payload: false })
}

export { SettingNavActive, SettingNavDeactive } 