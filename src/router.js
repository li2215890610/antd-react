import React from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import App from "./App";

import Login from "./pages/Login/Login";
import Admin from "./Admin";

import Buttons from "./pages/Ui/Button/Button";
class IRouter extends React.Component{
  constructor(porps){
    super(porps)
    this.state = {

    }
  }

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Login} exact/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default IRouter