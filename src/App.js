import React from "react";
import './App.css';
import Login  from './Pages/Login/login';
import Register  from './Pages/Register/register'
import{BrowserRouter,  Route, Switch} from 'react-router-dom'
 import Dashboard from '../src/Pages/Dashboard/dashboard';
 import ForgotPass from "../src/Pages/ForgotPassword/forgotPasswpord";
 import resetPass from "../src/Pages/ResetPassword/resetPassword"
 import ErrorPage from "../src/component/ProtectedRoutes/errorPage";
 import ProtectedRoute from "../src/component/ProtectedRoutes/protectedRoute";
 
 function App() {
  return (
<BrowserRouter>
 <div className="App">
    <>
   

    {/* <Router> */}
      <Switch>
        <Route path='/login' component={Login}/> 
        <Route path='/register' component={Register}/>
         <Route exact path='/' component={Login}/>
         <ProtectedRoute path='/dashboard' component={Dashboard}></ProtectedRoute>
        <Route path="/forgotPassword" component={ForgotPass} exact />
        <Route path="/resetPass" component={resetPass} />
        <Route component={ErrorPage} /> 
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
