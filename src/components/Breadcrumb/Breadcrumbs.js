import React from 'react';

import { Col, Row, Breadcrumb } from 'antd';

import "./Breadcrumbs.css";

import utlis from "../../utlis/utlis";


class Breadcrumbs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sysTime:null
    }
  }
  componentWillMount = ()=>{
    setInterval(()=>{
      this.setState({
        sysTime:utlis.formateData(new Date().getTime())
      })
    }, 1000)
  }
  render(){
    let { sysTime} = this.state;
    return (
      <div>
        <Row className='breadcrumbs'>
          <Col span="19">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span="5">
            <span>{sysTime}</span>
            <span>晴</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Breadcrumbs;