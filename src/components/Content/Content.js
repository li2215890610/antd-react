import React from 'react';
import { Layout } from 'antd';


import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from "../../pages/Home/Home";

import Button from "../../pages/Ui/Buttons/Buttons";

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
          <Content style={{ margin: '0px 16px 0px 16px', padding:  '0px 24px', background: '#fff', minHeight: 280 }}>
            <Switch>
              <Route  path='/admin/home' component={Home} exact/>
              <Route  path='/admin/form/reg' component={Button} exact/>
            </Switch>
          </Content>
      </div>
    );
  }
}

export default Contents