import React from "react";

import { Form,Input, Button } from "antd";

const FormItem = Form.Item;

class LevelFrom extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }    
  }

  handleSubmit = () =>{

  }
  render (){
    //this.props.form 是antd自动帮我们封装的 只要创建完from表单自动会帮我们拿到
    // const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Form  onSubmit={this.handleSubmit} layout="horizontal">
          <FormItem>
            {/* {
              getFieldDecorator("userName",)
            } */}
            <Input placeholder="请输入用户名"/>
          </FormItem>
          <FormItem>
            <Input placeholder="请输入账号"/>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">确定</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default LevelFrom;