import { Route,Routes } from "react-router-dom";
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Signin from "./components/Signin";
import Home from "./components/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {

  
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
