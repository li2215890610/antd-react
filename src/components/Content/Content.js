import React from 'react';

import Home from "../../pages/Home/Home";

import Breadcrumbs from "../Breadcrumb/Breadcrumbs";

import { Layout } from 'antd';

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
          <Breadcrumbs/>
          <Content style={{ margin: '0px 16px 0px 16px', padding:  '0px 24px', background: '#fff', minHeight: 280 }}>
            <Home/>
          </Content>
      </div>
    );
  }
}

export default Contents