import React from 'react'

import { Button, message } from 'antd'

class Successs extends React.Component {

    showMessage = ()=>{
        message.success("Successs");
    }

    render(){
        return (
            <div>
              <Button type="primary" onClick={this.showMessage}>Successs</Button>
            </div>
        );
    }
}

export default Successs