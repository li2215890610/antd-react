import React from 'react';

import { Col, Row, Breadcrumb } from 'antd';

import "./Breadcrumbs.css";

import utlis from "../../utlis/utlis";

import jsonpRequest from "../../servers/request";

class Breadcrumbs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sysTime:null
    }
  }
  city = '北京'
  componentWillMount = ( )=>{
    setInterval(()=>{
      this.setState({
        sysTime:utlis.formateData(new Date().getTime())
      })
    }, 1000)
  
    this.getWeatherAPIData()
    
  }

  getWeatherAPIData = ( )=>{
    let { city }  = this;
    // encodeURIComponent 中文编码
    jsonpRequest.jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res)=>{
      console.log(res);
      
    })
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