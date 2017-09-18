import React from 'react';
import { browserHistory } from 'react-router'
import {Button,Menu, Icon,Input, Layout, Dropdown} from 'antd'

const { Header } = Layout;
require('./Headers.css');
export default class Headers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: 'null',
            showPlaceholder: true
        }
        this.gotoUrl = this.gotoUrl.bind(this);
        this.myColor = this.myColor.bind(this);
    }
    gotoUrl(url, position){
        console.log('gotuurl', url, position);
        if (this.state.active === position) {
            this.setState({active : null})
        } else {
            this.setState({active : position})
        }
        console.log('gotuurl1', url, position);
        browserHistory.push(url);
    }
    myColor(position) {
        if (this.state.active === position) {
            return "red";
        }
        return "";
    }
    toggleInput(){
        this.setState({
            showPlaceholder: !this.state.showPlaceholder
        })
    }
    render(){
        const placeToggle = !this.state.showPlaceholder ? 'classPlaceholder' : 'classPlaceholdershow';
        const inputToggle = this.state.showPlaceholder ? 'inputNolineinshow' : 'inputNoline';
        return (
            <Header style={{background: '#ffffff',height: '78px'}}>
                <div className="headerAditional">
                    <span>English</span>
                    <span>联系我们: 0412-38947632 010-12348764</span>
                </div>
                <div className="headerList">
                    <span style={{paddingLeft: 0}}>
                        <span style={{color: this.myColor(0)}} onClick={() => this.gotoUrl('/',0)}>
                        <img style={{width: 139, height: 48,verticalAlign: 'middle',marginLeft: -6}} src={require("../../img/logo.png")}/></span>
                    </span>
                    <span style={{paddingLeft: 70}}>
                        <span style={{color: this.myColor(0)}} onClick={() => this.gotoUrl('/', 0)}>首页</span>
                        <img src={require('../../img/straitline.png')}/>
                    </span>
                    <span>
                        <span style={{color: this.myColor(1)}} onClick={() => this.gotoUrl('/newTian', 1)}>新天德</span>
                        <img src={require('../../img/straitline.png')}/>
                    </span>
                    <span>
                        <span style={{color: this.myColor(2)}} onClick={() => this.gotoUrl('/service', 2)}>服务</span>
                        <img src={require('../../img/straitline.png')}/>
                    </span>
                    <span>
                        <span style={{color: this.myColor(3)}} onClick={() => this.gotoUrl('/influence', 3)}>行业影响</span>
                        <img src={require('../../img/straitline.png')}/>
                    </span>
                    <span>
                        <span style={{color: this.myColor(4)}} onClick={() => this.gotoUrl('/news', 4)}>新闻资讯</span>
                    </span>
                    <span style={{ marginLeft: '36%' }}>
                        <a>
                            <span className={placeToggle} style={{paddingRight: 14}}>如何能享受优质的服务</span>
                            <input className={inputToggle} />
                            <img style={{verticalAlign: 'middle'}} src={require('../../img/redline.png')}/>
                            <img style={{width: 15, height: 15,verticalAlign: 'middle', marginLeft: 130}} onClick={() => this.toggleInput()} src={require("../../img/search.png")}/>
                        </a>
                    </span>
                </div>
            </Header>
        )
    }
}