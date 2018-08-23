import React from 'react';

import { Col, Row } from 'antd';

import "./Header.less";

class Header extends React.Component {
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
      <div className='headers'>
        <Row>
          <Col span='24' className='header_top'>
            <div>
              <span>欢迎～{userName}</span>
              <a href="">退出</a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;