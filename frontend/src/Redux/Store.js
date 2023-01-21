import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import {ProfileNavReducer} from './Reducers/ProfileNavReducer'
import {SettingsNavReducer} from './Reducers/SettingsNavReducer'
import {MessengerNavReducer} from './Reducers/MessengerNavReducer'

const reducer = combineReducers({
    ProfileNavbar : ProfileNavReducer,
    SettingNavbar : SettingsNavReducer,
    MessengerNavbar : MessengerNavReducer,
})
const InitialState = {}
const middleware = [thunk]

const store = configureStore({reducer}, InitialState, composeWithDevTools(applyMiddleware(middleware)))

export default store