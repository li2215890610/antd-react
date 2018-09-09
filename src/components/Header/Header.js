import React from 'react';

import "./Header.less";

// import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import { Layout, Col, Row } from 'antd';

const { Header } = Layout;


class Headers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  componentWillMount = ()=>{
    this.setState({
      userName:"热特姐"
    })
  }
  render(){
    let { userName} = this.state;
    return (
      <Header>
        <Row className='headers'>
          <Col span='24' className='header_top'>
            {/* <Breadcrumbs/> */}
            <div className='header_Go_Out'>
              <span>欢迎～{userName}</span>
              <a href="">退出</a>
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default Headers;