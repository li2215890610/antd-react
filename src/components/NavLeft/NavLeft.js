import React from "react";

import { Menu, Icon, Button, Layout } from 'antd';

import menuConfig from "../../config/menuConfig";

import "./NavLeft.css";

const SubMenu = Menu.SubMenu;

const { Sider } = Layout;


console.log(menuConfig);

class NavLeft extends React.Component {

  rootSubmenuKeys = ['/home', '/ui', '/form','/table','/rich','/city','/order','/user','/bikeMap',,'/charts','/permission'];

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      openKeys: ['/home'],
      current:"/home"
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  renderMenu(dataSource) {
    return (
      dataSource.map((menu, index) => {
        if (menu.children) {
          return (
            <SubMenu key={menu.key} title={<span><Icon type={menu.icon} /><span>{menu.title}</span></span>}>
              {this.renderMenu(menu.children)}
            </SubMenu>
          )
        } else {
          return (<Menu.Item key={menu.key}>{<span><Icon type={menu.icon} /><span>{menu.title}</span></span>}</Menu.Item>)
        }
      })
    )
  }

  
  render() {
    let theme = 'dark'
    return (
      <div className='nav_left'>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Sider
          trigger={null}
          collapsed={this.state.collapsed}
        >
          <Menu
            defaultOpenKeys={['/home']}
            defaultSelectedKeys={['/home']}
            selectedKeys={[this.state.current]}
            mode="inline"
            theme={theme}
            onClick={this.handleClick}
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            inlineCollapsed={this.state.collapsed}
          >
            {this.renderMenu(menuConfig)}
          </Menu>

        </Sider>      
      </div>
    );
  }
}

export default NavLeft;