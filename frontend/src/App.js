import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home';
import Profile from './Screen/Profile';
import Settings from './Screen/Settings';
import Search from './Screen/Search';
import Messenger from './Screen/Messenger';
import Chat from './Screen/Chat';
import Auth from './Screen/Auth';
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/Signup";
import SearchModal from './Components/Model/SearchModal'
import SettingsModal from './Components/Model/SettingsModal'
import ActivityModal from "./Components/Model/ActivityModal"
import PostUploadModal from './Components/Model/PostUpload'

function App() {
  return (
    <div className="App h-[100vh] w-[100vw] bg-gray-100 overflow-scroll scrollbar-hide  relative">
      <SearchModal />
      <SettingsModal />
      <ActivityModal />
      <PostUploadModal />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/settings' element={<Settings />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/messenger' element={<Messenger />} />
        <Route exact path='/chat' element={<Chat />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
