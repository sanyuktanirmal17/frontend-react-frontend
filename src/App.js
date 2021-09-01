import './App.css';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register'
import{Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/> 
        <Route path='/register' component={Register}/>
      </Switch>
       {/* <Login />  */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
