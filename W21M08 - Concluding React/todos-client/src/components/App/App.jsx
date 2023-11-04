import Login from '../Login/Login';
import Home from '../Home/Home';
import TodoForm from '../TodoForm/TodoForm';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login setUserInfo={setUserInfo} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/home" Component={() => {
          if(isLoggedIn){
            return <Home userInfo={userInfo}/>
          }
          return <Login setUserInfo={setUserInfo} setIsLoggedIn={setIsLoggedIn}/>
        }}>
          <Route path="/home/new/todo" element={<TodoForm/>}/>
        </Route>
        <Route path="*" element={<div>This route doesn't exist</div>} />
      </Routes>
    </div>
  );
}

export default App;
