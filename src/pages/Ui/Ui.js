import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Button from "./Button/Button";

import Modals from "./Modals/Modals";

import Loadings from "./Loadings/Loadings";

import "./Ui.less";

class UI extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/ui/button' component={Button}/>
          <Route path='/ui/modals' component={Modals}/>
          <Route path='/ui/loadings' component={Loadings}/>
        </Switch>
      </div>
    );
  }
}

export default  UI ;
