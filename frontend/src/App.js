import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home';
import Profile from './Screen/Profile';
import Settings from './Screen/Settings';
import Search from './Screen/Search';
import Messenger from './Screen/Messenger';
import Chat from './Screen/Chat';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';

function App() {
  return (
    <div className="App h-[100vh] w-[100vw] relative bg-gray-100 overflow-hidden">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/settings' element={<Settings />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/messenger' element={<Messenger />} />
        <Route exact path='/chat' element={<Chat />} />
        <Route exact path='/auth/login' element={<Login />} />
        <Route exact path='/auth/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
