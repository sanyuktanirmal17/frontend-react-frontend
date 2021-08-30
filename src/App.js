import './App.css';
import Login from './Pages/login';
import Register from './Pages/register'
import{Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Switch>
       {/* <Login />  */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
