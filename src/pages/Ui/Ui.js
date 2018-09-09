import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Button from "./Button/Button";
import Modals from "./Modals/Modals";
class UI extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/ui/button' component={Button}/>
          <Route path='/ui/modals' component={Modals}/>
        </Switch>
      </div>
    );
  }
}

export default  UI ;
