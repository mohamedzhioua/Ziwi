import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import UpdateUser from './components/UpdateEmployeer';
import Login from './components/Login';
import Signup from './components/Signup';
import LoginForm from './components/LoginForm';
import RequireAuth from './components/RequireAuth';
import Logout from './components/Logout';

function App (){

    return (
      <BrowserRouter>
       <nav class="topnav">
       <a className="navbar-brand"> ziwi hight-tech company</a>
       <Link to="/Home">Home</Link>  


  <Link className='login' to="/login"> login / Register</Link>
  <Link className='logout' to="/logout"> logout</Link>



</nav>


      <Routes>
  
            <Route path="/:id" element={<UpdateUser/>} />
            <Route  index element={<Login/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/logout" element={<Logout/>}/>
            

      </Routes>
    </BrowserRouter>

     );

} 
   export default App;
  
