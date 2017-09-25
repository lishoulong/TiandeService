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
                            <span>爱玛克中国地址：中国朝阳区东三环层</span>
                        </div>
                        <div>
                            <span><img src={require("../../img/sendmail.png")} /></span>
                            <span>爱玛克中国地址：中国朝阳区东三环层</span>
                        </div>
                        <div>
                            <span><img src={require("../../img/tel.png")} /></span>
                            <span>爱玛克中国地址：中国朝阳区东三环层</span>
                        </div>
                        <div>
                            <span><img src={require("../../img/mail.png")} /></span>
                            <span>爱玛克中国地址：中国朝阳区东三环层</span>
                        </div>
                    </div>
                    <div className="allInfosRight"><img src={require("../../img/secondCode.png")} /></div>
                </div>
                <div className="banners">版权所有 2010-2011 爱玛客服务产业（中国）有限公司保留一切权利   爱玛客医疗服务美国  爱玛客中国</div>
            </Footer>
        )
    }
}