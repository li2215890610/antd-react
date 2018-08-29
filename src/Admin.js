import React from "react";

import Header from "./components/Header/Header";

import Footers from "./components/Footer/Footer";

import NavLefts from "./components/NavLeft/NavLeft";

import Contents from "./components/Content/Content";

import './styles/common.less';


import { Layout } from 'antd';

const { Content, Footer } = Layout;


class Admin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Header />
        <Layout className='container'>
          <NavLefts className='nav_left' />
          <Layout className='content'>
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