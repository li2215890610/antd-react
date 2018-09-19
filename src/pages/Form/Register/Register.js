import React from "react";

import moment  from "moment";

import locale from 'antd/lib/date-picker/locale/zh_CN';

import "../Form.less";

import { Card, Form, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, Button, InputNumber } from "antd";

const FormItem = Form.Item;

const RadioGroup = Radio.Group;

const Option = Select.Option;


class Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      radioValue: 1,
      age: 18,
      userSeate:"",
      userHobby:[2,3],
      checkedSwitch:true,
      isMarried:"",
      birthday:moment("2018-01-01")
    }    
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  handleChangeRadioGroup = (e) => {
    this.setState({
      radioValue: e.target.value,
    })
  }

  handleChangeAge = ( e ) => {

    console.log(e);
    
    this.setState({
      age: e
    })
  }

  handleChangeUserSeate = ( e )=>{
    console.log(e);
    this.setState({
      userSeate:e
    })
    
  }

  handleChangeUserHobby = (e)=>{
    this.setState({
      userHobby:e
    })
  }
  
  handleChangeSwitch = (checked) =>{
    this.setState({
      isMarried:checked
    })
  }
  render (){

    let { radioValue, age, userSeate, userHobby, checkedSwitch, isMarried, birthday} = this.state;

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
              <FormItem label="性别" {...FormItemLayout}>
                {
                  getFieldDecorator("sex", {
                    initialValue: "1",
                    
                  })(
                    <RadioGroup onChange={this.handleChangeRadioGroup} value={radioValue} style={{width:'300px'}}>
                      <Radio value={1}>男</Radio>
                      <Radio value={2}>女</Radio>
                      <Radio value={3}>不男不女</Radio>
                    </RadioGroup>
                  )
                }
              </FormItem>
              <FormItem label="年龄" {...FormItemLayout}>
                {
                  getFieldDecorator("age", {
                    initialValue: age,
                    
                  })(
                    <InputNumber min={1} max={30}  onChange={this.handleChangeAge} style={{width:'300px'}}/>
                  )
                }
              </FormItem>

              <FormItem label="当前状态" {...FormItemLayout}>
                {
                  getFieldDecorator("seate", {
                    initialValue: userSeate,
                    
                  })(
                   <Select onChange={this.handleChangeUserSeate} style={{width:'300px'}}>
                     <Option value="1">1</Option>
                     <Option value="2">2</Option>
                     <Option value="3">3</Option>
                     <Option value="4">4</Option>
                     <Option value="5">5</Option>
                     <Option value="6">6</Option>
                   </Select>
                  )
                }
              </FormItem>
              <FormItem label="爱好" {...FormItemLayout}>
                {
                  getFieldDecorator("hobby", {
                    initialValue: userHobby,
                    
                  })(
                   <Select mode="multiple"  onChange={this.handleChangeUserHobby} style={{width:'300px'}}>
                     <Option value="1">1</Option>
                     <Option value="2">2</Option>
                     <Option value="3">3</Option>
                     <Option value="4">4</Option>
                     <Option value="5">5</Option>
                     <Option value="6">6</Option>
                   </Select>
                  )
                }
              </FormItem>

              <FormItem label="是否已婚" {...FormItemLayout}>
                {
                  getFieldDecorator("checked", {
                    initialValue: isMarried,
                    
                  })(
                    <Switch onChange={this.handleChangeSwitch}/>
             
                  )
                }
              </FormItem>    

              <FormItem label="生日" {...FormItemLayout}>
                {
                  getFieldDecorator("birthday", {
                    initialValue: birthday,
                    
                  })(
                    <DatePicker locale={locale} showTime format="YYYY-MM-DD"/>
             
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