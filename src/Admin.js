import React from "react";

import Headers from "./components/Header/Header";

import Footers from "./components/Footer/Footer";

import NavLefts from "./components/NavLeft/NavLeft";

import Contents from "./components/Content/Content";

import './styles/common.less';


import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;


class Admin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Layout className='container'>
          <NavLefts className='nav_left' />
          <Layout className='content'>
            <Header className='headers'>
              <Headers />
            </Header>
            <Content>
              <Contents/>
            </Content>
            <Footer>
              <Footers />
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Admin;