import React from "react";

import DynamicTable from "./DynamicTable/DynamicTable";

import { Card, Table } from "antd";

class BasicTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource:[],
    }
  }

  componentWillMount = () => {

    const data = [
      {
        id: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市朝阳区恒通国际创新园C9',
        time: '09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市朝阳区恒通国际创新园C9',
        time: '09:00'
      },
      {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市朝阳区恒通国际创新园C9',
        time: '09:00'
      },
    ]
    data.map((item, index) => {
      return item.key = index;
    })
    this.setState({
      dataSource: data
    })
  }

  render() {
    let { dataSource} = this.state;
    
    const columns = [
      {
        title: "id",
        dataIndex: "id",
      }, {
        title: "用户名",
        dataIndex: "userName",
      }, {
        title: "性别",
        dataIndex: "sex",
      }, {
        title: "状态",
        dataIndex: "state",
      }, {
        title: "爱好",
        dataIndex: "interest",
      }, {
        title: "生日",
        dataIndex: "birthday",
      }, {
        title: "地址",
        dataIndex: "address",
      }, {
        title: "早起时间",
        dataIndex: "time",
      }
    ];
    return (
      <div>
        
        <Card title="基础表格">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
          />
        </Card>
        <Card title="动态数据表格" style={{marginTop:'30px'}}>
          <DynamicTable/>
        </Card>
      </div>
    )
  }
}

export default BasicTable;