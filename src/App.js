import React from "react";
import './App.css';
import Login  from './Pages/Login/login';
import Register  from './Pages/Register/register'
import{BrowserRouter,  Route, Switch} from 'react-router-dom'
 import Dashboard from '../src/Pages/Dashboard/dashboard';
 import ForgotPass from "../src/Pages/ForgotPassword/forgotPasswpord";
 //  import{Route, Switch} from 'react-router-dom';

 // import Archive from "../src/Archive/archive";
// import Trash from "../src/Trash/trash";
// import ProtectedRouter from "../src/component/Protected-Router/protectedRouter";
//  import AuthRouter from "../src/component/auth-Router/authRouter";
// require('dotenv').config()
function App() {
  return (
<BrowserRouter>
 <div className="App">
    <>
   
    {/* <Router> */}
      <Switch>
        {/* <Route path='/login' component={Login}/>  */}
        <Route path='/register' component={Register}/>
         <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/> 
        <Route path="/forgotPassword" component={ForgotPass} exact />
    
        </Switch>
        {/* <AuthRouter  path='/login' component={Login}></AuthRouter> */}
       
      
     
      {/* <Route exact path="/" component={NewAccount}></Route>
        <AuthRouter exact path="/sign-In" component={SignIn}></AuthRouter> */}
      {/* <ProtectedRouter
          path="/dashboard"
          component={Dashboard}
        ></ProtectedRouter>
        <ProtectedRouter
          exact
          path="/archive"
          component={Archive}
        ></ProtectedRouter>
        <ProtectedRouter
          exact
          path="/trash"
          component={Trash}
        ></ProtectedRouter> */}
        
      {/* </Router> */}
    
      
      </> 
    </div>
    </BrowserRouter>
  );
}

export default App;
