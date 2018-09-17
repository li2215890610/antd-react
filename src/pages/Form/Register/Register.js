import React from "react";

import "../Form.less";

import { Card, Form, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, Button } from "antd";

const FormItem = Form.Item;

class Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }    
  }

  handleSubmit = (e) =>{
    e.preventDefault();

  }

  render (){

    let { getFieldDecorator } = this.props.form;

    let FormItemLayout = {
      labelCol:{
        xs:24,
        sm:4,
      },
      wrapperCol:{
        xs:24,
        sm:20
      }
    }
    
    return(
      <div>
          <Card title="注册表单" className="card">
            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="用户名" {...FormItemLayout}>
                {
                  getFieldDecorator("userName", {
                    initialValue: "张三",
                    rules: [
                      {
                        required: true,
                        message: "用户名为必填项",
                      }
                    ]
                  })(
                    <Input prefix={<Icon type="user"/>} style={{width:'300px'}} placeholder="请输入用户名" />
                  )
                }
              </FormItem>
              <FormItem label="密码" {...FormItemLayout}>
                {
                  getFieldDecorator("userPwd", {
                    initialValue: "张三",
                    rules: [
                      {
                        required: true,
                        message: "密码为必填项",
                      }
                    ]
                  })(
                    <Input prefix={<Icon type="lock"/>} type="password" style={{width:'300px'}} placeholder="请输入密码" />
                  )
                }
              </FormItem>








              <FormItem>
                <Button type="primary" htmlType="submit">确定</Button>
              </FormItem>
            </Form>
          </Card>
      </div>
    )
  }
}



export default Form.create()(Register);