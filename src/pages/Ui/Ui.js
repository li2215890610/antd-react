import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Button from "./Button/Button";

class UI extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/ui/button' component={Button}/>
        </Switch>
      </div>
    );
  }
}

export default  UI ;
