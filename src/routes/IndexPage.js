import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';
import {Link} from 'dva/router'
import {SliderArray} from '../const.js'
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
import './IndexPage.css';

function IndexPage() {
  return (
    <Layout style={{height:'100%'}}>
      <Header className="header" id='components-layout-demo-top-side-2'>
        <div className='logo' />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header> 
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1','2','3']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {SliderArray.map((item) => {
              return (<SubMenu key={item.key} title={<span><Icon type={item.icon} />{item.title}</span>}>
                {item.subs.map((e) => {
                  return ( <Menu.Item key={e.key}> <Link to={e.url}>{e.title}</Link></Menu.Item>)
                })}
            </SubMenu>)
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            Content
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
  </Layout>
  );
}

export default connect()(IndexPage);
