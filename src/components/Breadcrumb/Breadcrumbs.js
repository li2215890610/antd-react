import React from 'react';

import { Col, Row, Breadcrumb, message } from 'antd';

import "./Breadcrumbs.less";

import utlis from "../../utlis/utlis";

import jsonpRequest from "../../servers/request";

class Breadcrumbs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      weatherData:{}
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
      this.setState({
        weatherData:res
      })
    }).catch((err)=>{
      console.log(err);
      message.error(err.message)
    })
  }

  // getWeatherData = () =>{
  //   let { sysTime, weatherData} = this.state;
  //   if (sysTime && weatherData) {
  //     return (
  //       <div>
  //         <span>{sysTime}</span>
  //         <span className="weather-img">
  //             <img src={weatherData.dayPictureUrl} alt="" />
  //         </span>
  //         <span className="weather-detail">
  //             {weatherData.weather}
  //         </span>
  //       </div>
  //     ) 
  //   }
  // }
  
  render(){
    let { sysTime, weatherData} = this.state;

    return (
      <div>
        <Row className='breadcrumbs'>
          <Col span="18">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span="6">
            <span className="sysTime">{sysTime}</span>
            <span className="weather-img">
                <img src={weatherData.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detail">
                {weatherData.weather}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Breadcrumbs;