import { MESSENGER_NAV_ACTIVE, MESSENGER_NAV_DEACTIVE } from '../Constant/MessengerNavConstant'

const MessengerNavActive = () => (dispatch) => {
    dispatch({ type: MESSENGER_NAV_ACTIVE, payload: true })
}

const MessengerNavDeActive = () => (dispatch) => {
    dispatch({ type: MESSENGER_NAV_DEACTIVE, payload: false })
}

export { MessengerNavActive, MessengerNavDeActive }