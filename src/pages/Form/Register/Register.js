import React from "react";

import  "./../Form.less";

import { Card,Tabs } from "antd";

import BasicsTest from "./BasicsTest/BasicsTest";

const TabPane = Tabs.TabPane;


class Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      
    }    
  }

  handleChangeTabs = () =>{

  }

  render (){

    
    return(
      <div>
          <Card title="注册表单" className="card">
            <Tabs defaultActiveKey="1" onChange={this.handleChangeTabs}>
              <TabPane tab="默认演示" key="1">
                <BasicsTest/>
              </TabPane>
              <TabPane tab="antd方法演示新增" key="2">Content of Tab Pane 2</TabPane>
              <TabPane tab="antd方法演示更新" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
          </Card>
      </div>
    )
  }
}



export default Register;