import { SEARCH_MODAL_CLOSE, SEARCH_MODAL_OPEN, SETTINGS_MODAL_CLOSE, SETTINGS_MODAL_OPEN, ACTIVITY_MODAL_CLOSE, ACTIVITY_MODAL_OPEN, POST_UPDLOAD_MODAL_CLOSE, POST_UPDLOAD_MODAL_OPEN } from '../Constant/ModalsConstant'

const SearchModalReducer = (state = { SearchModal: false }, action) => {
    switch (action.type) {
        case SEARCH_MODAL_OPEN:
            return { SearchModal: true }
        case SEARCH_MODAL_CLOSE:
            return { SearchModal: false }
        default:
            return state;
    }
}

const SettingsModalReducer = (state = { SettingsModal: false }, action) => {
    switch (action.type) {
        case SETTINGS_MODAL_OPEN:
            return { SettingsModal: true }
        case SETTINGS_MODAL_CLOSE:
            return { SettingsModal: false }
        default:
            return state
    }
}

const ActivityModalReducer = (state = { ActivityModal: false }, action) => {
    switch (action.type) {
        case ACTIVITY_MODAL_OPEN:
            return { ActivityModal: true }
        case ACTIVITY_MODAL_CLOSE:
            return { ActivityModal: false }
        default:
            return state
    }
}

const PostUploadModalReducer = (state = { PostUploadModal: false }, action) => {
    switch (action.type) {
        case POST_UPDLOAD_MODAL_OPEN:
            return { PostUploadModal: true }
        case POST_UPDLOAD_MODAL_CLOSE:
            return { PostUploadModal: false }
        default:
            return state
    }
}



export { SearchModalReducer, SettingsModalReducer, ActivityModalReducer, PostUploadModalReducer }