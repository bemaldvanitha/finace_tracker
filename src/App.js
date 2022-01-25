import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/login'} component={Login} exact/>
          <Route path={'/signup'} component={Signup} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
