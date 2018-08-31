import React from 'react';
import { Layout } from 'antd';


// import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from "../../pages/Home/Home";

import AsyncComponent from '../AsyncComponent/AsyncComponent';



const { Content } = Layout

class Contents extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }


  getHomeComponent = ( url, cb )=> {
    require.ensure([], function(require) {
      let component = require( '../../pages/Home/Home' );
      cb({component: component});
    }, 'Home');
  }

  render(){
    return (
      <div>
          <Content style={{ margin: '0px 16px 0px 16px', padding:  '0px 24px', background: '#fff', minHeight: 280 }}>
            <Home/>
            {/* <Route path="/home" render={( props )=>(
                <AsyncComponent
                  url="/home/home"
                  component={this.getHomeComponent}
                />
              )} 
            /> */}

            
          </Content>
      </div>
    );
  }
}

export default Contents