/**
 * @description 异步加载组件
 */

import React, { Component } from 'react';
import { Button } from 'antd';
import styles from './AsyncComponent.css';

class AsyncRoute extends Component {
  constructor() {
    super();
    this.state = {
      componentData: null
    };
  }

  loadComponent(){
    const componentData = this.props.component(this.props.url, ({component}) => {
      // Named param for making callback future proof
      if (component) {
        this.setState({
          componentData: component
        });
      }
    });

    // In case returned value was a promise
    if (componentData && componentData.then) {
      componentData.then(component => {
        this.setState({
          componentData: component
        });
      });
    }
  }

  componentDidMount(){
    this.loadComponent();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.url && this.props.url !== nextProps.url) {
      this.setState({
        componentData: null
      }, ()=>{
        this.loadComponent();
      });
    }
  }

  render(){

    const {
      component,
      ...props
    } = this.props;

    const {
      componentData
    } = this.state;

    if (componentData) {
      return React.createElement(
        componentData,
        { ...props }
      )
    }

    return ( 
      <div className={styles.loading}>
        <Button shape="circle" type="primary" loading />
      </div>
    );
  }
}

export default AsyncRoute;
