import React from "react";

import Headers from "./components/Header/Header";

import Footers from "./components/Footer/Footer";

import NavLefts from "./components/NavLeft/NavLeft";

import './styles/common.less';


import { Layout } from 'antd';

const { Header, Content,Footer } = Layout;


class Admin extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <Layout className='container'>
          <NavLefts className='nav_left' />
          <Layout className='content'>
            <Header style={{ background: 'red', padding: 0 }}>
              <Headers/>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              
            </Content>
            <Footer>
              <Footers/>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Admin;