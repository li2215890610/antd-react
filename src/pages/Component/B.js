import React from "react";

import { Card } from "antd";

class B extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  number = 0;

  componentWillMount = ()=>{

  }
  componentDidMount = ()=>{

  }
  //接收一个参数 新的props
  componentWillReceiveProps = (newProps) =>{
    console.log(newProps,this.props.value)
    
    if (newProps.value == this.props.value) {
      console.log('Component 接收到新的props!  但是相同')
    }else{  
      console.log('Component 接收到新的props!')
    }

  }
  componentWillUpdate = (nextProps, nextState)=> {

    
    console.log(nextProps,nextState)
    console.log('Component 更新组件前!');
  }
  componentDidUpdate = (prevProps, prevState)=> {
    console.log(this.props.value);

    // console.log(prevProps,prevState)
    console.log('Component 更新组件后!')
  }



  componentWillUnmount = ()=>{
    console.log('Component 组件卸载!')
  }

  render(){
    console.log(this.props.value);
    
    let { number} = this;
    let { value} = this.props;
    return(
      <div>
        <Card title="组件传值--生命周期测试" style={{marginTop:'20px'}}>
            {number + value}
        </Card>
      </div>
    )
  }
  
}

export default B;