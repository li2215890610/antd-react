import React from "react";

import { Route, Switch } from 'react-router-dom';

import Login from "./Login/Login";

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }    
  }

  render (){
    return(
      <div>
        <Switch>
            <Route path='/form/login' component={Login}/>
        </Switch>
      </div>
    )
  }
}

export default Form;