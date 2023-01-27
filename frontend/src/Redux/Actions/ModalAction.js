import { SEARCH_MODAL_CLOSE, SEARCH_MODAL_OPEN, SETTINGS_MODAL_CLOSE, SETTINGS_MODAL_OPEN, ACTIVITY_MODAL_CLOSE, ACTIVITY_MODAL_OPEN, POST_UPDLOAD_MODAL_CLOSE, POST_UPDLOAD_MODAL_OPEN } from '../Constant/ModalsConstant'

const OpenSearchModalAction = () => (dispatch) => {
    dispatch({ type: SEARCH_MODAL_OPEN })
}
const CloseSearchModalAction = () => (dispatch) => {
    dispatch({ type: SEARCH_MODAL_CLOSE })
}

const OpenSettingsModalAction = () => (dispatch) => {
    dispatch({ type: SETTINGS_MODAL_OPEN })
}
const CloseSettingsModalAction = () => (dispatch) => {
    dispatch({ type: SETTINGS_MODAL_CLOSE })
}

const OpenActivityModalAction = () => (dispatch) => {
    dispatch({ type: ACTIVITY_MODAL_OPEN })
}
const CloseActivityModalAction = () => (dispatch) => {
    dispatch({ type: ACTIVITY_MODAL_CLOSE })
}

const OpenPostUploadModalAction = () => (dispatch) => {
    dispatch({ type: POST_UPDLOAD_MODAL_OPEN })
}
const ClosePostUploadModalAction = () => (dispatch) => {
    dispatch({ type: POST_UPDLOAD_MODAL_CLOSE })
}

export { OpenActivityModalAction, OpenPostUploadModalAction, OpenSearchModalAction, OpenSettingsModalAction, CloseSettingsModalAction, CloseActivityModalAction, ClosePostUploadModalAction, CloseSearchModalAction }

