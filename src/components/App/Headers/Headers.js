import React from 'react';
import {Link } from 'react-router'
import {Button,Menu, Icon,Input, Layout, Dropdown} from 'antd'

const { Header } = Layout;
require('./Headers.css');
export default class Headers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           current: 'list'
       }
        this.handleNavigator = this.handleNavigator.bind(this);
    }
    handleNavigator(e){
        this.setState({
            current: e.key
        })
    }
    render(){
        return (
            <Header style={{background: '#ffffff',height: '78px'}}>
                <Menu style={{paddingTop: 8}} selectedKeys={[this.state.current]} onClick={this.handleNavigator} mode="horizontal">
                    <Menu.Item key="logo">
                        <Link to="/"><img  style={{width: 50, width: 50}} src="https://img.58cdn.com.cn/zhuanzhuan/Mzhuanzhuan/m/img/logo.png"/></Link>
                    </Menu.Item>
                    <Menu.Item key="home">
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="new">
                        <Link to="/">新天德</Link>
                    </Menu.Item>
                    <Menu.Item key="service">
                        <Link to="/">服务</Link>
                    </Menu.Item>
                    <Menu.Item key="industry">
                        <Link to="/">行业影响</Link>
                    </Menu.Item>
                    <Menu.Item key="newsConsult">
                        <Link to="/">新闻资讯</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}