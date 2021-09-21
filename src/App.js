import './App.css';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register'
import{BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/dashboard';

require('dotenv').config()
function App() {
  return (
    // <div className="App">
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/> 
        <Route path='/register' component={Register}/>
      </Switch>
      <Route path='/dashboard' component={Dashboard}/> 
      </BrowserRouter>
      </>
    // </div>
  )
}

export default App;
