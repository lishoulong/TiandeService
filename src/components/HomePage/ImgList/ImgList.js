import React from 'react';
import {Link } from 'react-router';
import {Button,Menu, Icon,Input, Layout, Dropdown} from 'antd';
// import Slider from 'react-slick';
const Carousel = require('react-responsive-carousel').Carousel;
require("react-responsive-carousel/lib/styles/carousel.min.css")
require('./ImgList.css');
export default class ImgList extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
          <div className="container">
            <Carousel axis="vertical" showThumbs={false} showArrows={false} dynamicHeight emulateTouch>
                <div>
                    <img src={require("../../img/homeBanner.jpg")} />
                </div>
                <div>
                    <img src={require("../../img/homeBanner.jpg")} />
                </div>
                <div>
                    <img src={require("../../img/homeBanner.jpg")} />
                </div>
            </Carousel>
          </div>
        )
    }
}