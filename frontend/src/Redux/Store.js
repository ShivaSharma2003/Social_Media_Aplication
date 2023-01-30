import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import { AuthLoginReducer, AuthRegisterReducer } from './Reducers/AuthReducer'
import { GetProfileReducer, GetCurrentProfilePostsReducer,FollowUserReducer,UnfollowUserReducer } from './Reducers/ProfileReducer'
import { SearchModalReducer, SettingsModalReducer, ActivityModalReducer, PostUploadModalReducer } from './Reducers/ModalSReducer'
import {SuggestedUserProfilereducer} from './Reducers/AnotherUserProfileReducer'
import {TimePostsReducers} from './Reducers/TimelinePostsReducer'

const LoginUserFromStorage = localStorage.getItem("LoginUser") ? JSON.parse(localStorage.getItem("LoginUser")) : {}
const UserProfileFromStorage = sessionStorage.getItem("userProfile") ? JSON.parse(sessionStorage.getItem("userProfile")) : {}
const UserPostsFromStorage = sessionStorage.getItem("userPosts") ? JSON.parse(sessionStorage.getItem("userPosts")) : {}

console.log(LoginUserFromStorage)
console.log(UserProfileFromStorage)
console.log(UserPostsFromStorage)

const reducer = combineReducers({
    AuthLogin: AuthLoginReducer,
    AuthRegister: AuthRegisterReducer,
    Profile: GetProfileReducer,
    CurrentProfilePosts: GetCurrentProfilePostsReducer,
    SearchModal: SearchModalReducer,
    SettingsModal: SettingsModalReducer,
    ActivityModal: ActivityModalReducer,
    PostUploadModal: PostUploadModalReducer,
    SuggestedProfile : SuggestedUserProfilereducer,
    TimelinePosts : TimePostsReducers,
    FollowUser : FollowUserReducer,
    UnFollow : UnfollowUserReducer,
})

const InitialState = {
    AuthLogin: { loading: false, Token: LoginUserFromStorage, Login: true },
    Profile: { profile: UserProfileFromStorage },
    CurrentProfilePosts: { posts: UserPostsFromStorage }
}

const middleware = [thunk]

const store = configureStore({ reducer }, { InitialState }, composeWithDevTools(applyMiddleware(middleware)))

export default store;