import React from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import App from "./App";

import Login from "./pages/Login/Login";
import Admin from "./Admin";
import NoMatch from "./pages/NoMatch/NoMatch";
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
          <Route path='/' component={Admin}/>
          {/* 没有开发完的组件 默认跳转 NoMatch 404组件 */}
          <Route  component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default IRouter