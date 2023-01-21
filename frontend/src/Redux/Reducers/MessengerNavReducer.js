import { MESSENGER_NAV_ACTIVE, MESSENGER_NAV_DEACTIVE } from '../Constant/MessengerNavConstant'

const MessengerNavReducer = (state = { MessengerNavState: false }, action) => {
    switch (action.type) {
        case MESSENGER_NAV_ACTIVE:
            return { MessengerNavState: action.payload }
        case MESSENGER_NAV_DEACTIVE:
            return { MessengerNavState: action.payload }
        default:
            return state
    }
}

export { MessengerNavReducer }