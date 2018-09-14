import React from "react";

import { Menu, Icon, Button, Layout } from 'antd';

import { Link} from 'react-router-dom';
import menuConfig from "../../config/menuConfig";

import "./NavLeft.less";

const SubMenu = Menu.SubMenu;

const { Sider } = Layout;


class NavLeft extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      openKeys: ['/home'],
      current:"/home"
    };
  }

  rootSubmenuKeys = ['/home', '/ui', '/form','/table','/rich','/city','/order','/user','/bikeMap','/charts','/permission']

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
            <SubMenu key={menu.key} title={
                <span>
                  <Icon type={menu.icon} />{menu.title}
                </span>
              }>
              {this.renderMenu(menu.children)
            }
            </SubMenu>
          )
        } else {
          return (<Menu.Item key={menu.key}>{
            <span>
              {
                 menu.icon ? <Icon type={menu.icon} /> : ''
              }
              <span>
              <Link className='link_font_color' to={menu.key}>{menu.title}</Link>
              </span>
            </span>
          }</Menu.Item>)
        }
      })
    )
  }

  
  render() {
    let theme = 'dark'
    return (
      <div className='nav_left'>
        <div className='nav_left_top'>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
        </div>
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