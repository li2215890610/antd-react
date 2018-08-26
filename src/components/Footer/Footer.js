import React from 'react';


import styles from "./Footer.css";

class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    console.log(styles);
    
    return (
      <div className={styles.footer}>
          Ant Design ©2018 Created by Ant UED
      </div>
    );
  }
}

export default Footer