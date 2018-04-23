import React from 'react';
import {Link } from 'react-router'
import {Button,Menu, Icon,Input, Layout, Dropdown} from 'antd'

const { Footer } = Layout;
require('./MyFooter.css');
export default class MyFooter extends React.Component {
    constructor(props){
        super(props)
    }
    handleNavigator(e){
        this.setState({
            current: e.key
        })
    }
    render(){
        return (
            <Footer style={{background: '#ffffff'}}>
                <div className="allInfos">
                    <div className="allInfosLeft">
                        <div>
                            <span><img src={require("../../img/location.png")} /></span>
                            <span>中国地址：北京市花市东大街花市枣苑3号楼2104</span>
                        </div>
                        <div>
                            <span><img src={require("../../img/sendmail.png")} /></span>
                            <span>邮编：000010</span>
                        </div>
                        <div>
                            <span><img src={require("../../img/tel.png")} /></span>
                            <span>电话：010-64740806 传真：010-64740807</span>
                        </div>
                        <div>
                            <span><img src={require("../../img/mail.png")} /></span>
                            <span>邮箱：leon.li@tiandehc.com</span>
                        </div>
                    </div>
                    <div className="allInfosRight"><img src={require("../../img/secondCode.png")} /></div>
                </div>
                <div className="banners">版权所有 2010-2011 新天德物业服务有限公司保留一切权利</div>
            </Footer>
        )
    }
}