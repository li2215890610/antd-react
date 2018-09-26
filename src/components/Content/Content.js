import React from 'react';
import { Layout } from 'antd';


import { Route, Switch, } from 'react-router-dom';

import Home from "../../pages/Home/Home";

import Ui from "../../pages/Ui/Ui";

import Form from "../../pages/Form/Form";

import Table from "../../pages/Table/Table";

import City from "../../pages/City/City";

import Order from "../../pages/Order/Order";

import NoMatch from "../../pages/NoMatch/NoMatch";

const { Content } = Layout

class Contents extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div>
          <Content style={{ margin: '0px 16px 0px 16px', padding:  '20px 5px', background: '#fff', minHeight: 280 }}>
            <Switch>
              <Route  path='/home' component={Home}/>
              <Route  path='/ui' component={Ui}/>
              <Route  path='/form' component={Form}/>
              <Route  path='/table' component={Table}/>
              <Route path='/city' component={City}/>
              <Route path='/order' component={Order}/>
              <Route  component={NoMatch}/>
            </Switch>
          </Content>
      </div>
    );
  }
}

export default Contents