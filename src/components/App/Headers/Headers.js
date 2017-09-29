import React from 'react';
import { browserHistory } from 'react-router'
import {Button,Menu, Icon,Input, Layout, Dropdown} from 'antd'
import EventSystem from '../../../EventSystem'
import {headerList} from '../../../util';

const { Header } = Layout;
require('./Headers.css');
export default class Headers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: 'null',
            showRedline: false
        }
        this.gotoUrl = this.gotoUrl.bind(this);
        this.myColor = this.myColor.bind(this);
        this.updateHeader = this.updateHeader.bind(this);
        this.setActive = this.setActive.bind(this);
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    }
    componentDidMount() {
        EventSystem.subscribe('updateHeader', this.updateHeader);
    }
    updateHeader(type){
        let pos;
        switch(type){
            case 'service':
                pos = 2;
                break
            default:
                console.log('not service');
        }
        this.setState({active : pos})
    }
    gotoUrl(url, position){
        this.setActive(position);
        browserHistory.push(url);
    }
    myColor(position) {
        if (this.state.active === position) {
            return "#ff5a00";
        }
        return "";
    }
    toggleInput(){
        this.setState({
            showRedline: true
        })
    }
    setActive(position){
        console.log('setActive',position)
        if (this.state.active === position) {
            this.setState({active : null})
        } else {
            this.setState({active : position})
        }
    }
    onMouseOverHandler(position){
        // this.setActive(position);
    }
    onMouseOutHandler(){
        console.log('onMouseOutHandler')
    }
    render(){
        return (
            <Header style={{background: '#ffffff',height: '110px'}}>
                <div className="headerAditional">
                    <span>English</span>
                    <span>联系我们: 0412-38947632 &nbsp;&nbsp; 010-12348764</span>
                </div>
                <div className="headerList">
                    <span style={{paddingLeft: 0}}>
                        <span style={{color: this.myColor(0)}} onClick={() => this.gotoUrl('/',0)}>
                        <img className='logoImg' src={require("../../img/logo.png")}/></span>
                    </span>
                    {
                        headerList.map((headerItem, index) => {
                            let {title, url, useLine} = headerItem;
                            return (
                                <span 
                                    onMouseOver = {() => this.onMouseOverHandler(index)}
                                    onMouseOut = {this.onMouseOutHandler}
                                    onClick={() => this.gotoUrl(url, index)}
                                    key = {index}
                                >
                                    <span style={{color: this.myColor(index)}}>{title}</span>
                                    {
                                        useLine?
                                        <img src={require('../../img/straitline.png')}/>:
                                        null
                                    }
                                </span>
                            )
                        })
                    }
                    <span style={{ marginLeft: '36%' }}>
                        <a>
                            {
                                this.state.showRedline?
                                <img style={{verticalAlign: 'middle'}} src={require('../../img/redline.png')}/>:
                                null
                            }
                            <input className='inputNoline' />
                            <img style={{width: 15, height: 15,verticalAlign: 'middle', marginLeft: 10}} onClick={() => this.toggleInput()} src={require("../../img/search.png")}/>
                        </a>
                    </span>
                </div>
            </Header>
        )
    }
}