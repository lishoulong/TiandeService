import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import {imgs, iconNames} from '../../util';
import {Icon} from 'antd'
import ImgList from './ImgList/ImgList';
import EventSystem from '../../EventSystem'
import './HomePage.css';


class HomePage extends Component {
  constructor(props){
    super(props);
    this.imgs = imgs;
    this.tabsPart = this.tabsPart.bind(this);
    this.jumpPage = this.jumpPage.bind(this);
    this.state = {
        blackMore: true,
        treeTab: false,
        transformTab: false,
        profixTab: false,
        elabraterTab: false,
        safeserviceTab: false,
        centerTab: false
    }
  }
  tabsPart = () => {
      return (
          <div className='HomePageTabs'>
              <h3>服务范围</h3>
              <div className='HomePageTabsAll'>
                  {
                    iconNames.map((iconName, index) => {
                        return (
                            <div key={index} className={'HomePageTab ' + (this.state[`${iconName.icon}Tab`] ? 'clickColor': '')} onClick={(e) => {this.jumpPage(e,iconName.icon)}}>
                                <img src={require(`../img/${iconName.icon}.png`)} />
                                <span className='homeMore'>more<Icon type="right" /></span>
                                <span>{iconName.value}</span>
                                <span>{iconName.enValue}</span>
                            </div>
                        )
                    })
                  }
              </div>
          </div>
      )
  }
  jumpPage = (event, iconName) => {
      event.preventDefault();
      iconNames.forEach((tempIcon, tempIndex) => {
          let icon = tempIcon.icon;
          if(icon == iconName){
             return this.setState({
                 [`${icon}Tab`]: true
             })
          }
          this.setState({
              [`${icon}Tab`]: false
          })
      })
      EventSystem.publish('updateHeader', 'service');
      browserHistory.push({
        pathname: '/service',
        state: { params: iconName}
      })
  }
  changeMore = () => {
      this.setState({
          blackMore: false
      })
  }
  shortChracter = () => {
    return (
        <div className='HomePageChracter'>
            <div className='HomePageChracterLeft' onClick={() => {this.changeMore()}}>
                <span>Germany company profile</span>
                {
                    this.state.blackMore ?
                    <img className="rightImg" src={require('../img/moreshow.png')}/> :
                    <img className="rightImg" src={require('../img/moreclicked.png')}/> 

                }
                <span>天德简介</span>
                <span>新天德物业服务有限公司（以下简称“新天德”）成立于2003年3月6日，注册资金人民币5000万元，法定代表人为张伟（全国卫生产业企业管理协会第四届理事会副会长），公司目前总部设在北京市。

新天德专注于为医疗机构提供后勤服务体系整体解决方案。经过十余年的发展，公司现有员工2200余人。目前拥有国家建设部颁发的物业管理一级资质，以及覆盖全项目的ISO9001质量管理体系、ISO14001环境管理体系以及OHSAS18001职业健康管理体系认证资格，目前服务区域涵盖北京、天津及河北区域，服务管理面积超过200万平方米。2015年，在董事长张伟先生和董事会成员的共同带领下，通过与全国卫生产业企业管理协会以及美国斯图德公司、GRS公司（健瑞士）等境内外合作伙伴的深度合作，新天德开始以崭 新的面貌和全新的业务模式开始向北京以及全国其他区域的医疗机构提供更加先进的后勤服务整体解决方案，以全国性医疗后勤服务公司为目标，开始了公司业务发展的全新篇章。</span>
            </div>
            <div className='HomePageChracterRight'>
                <span>特点</span>
                <span>与医疗机构合作，改善提高其非临床方面的服务水平: 标准化服务部门的运作框架;最大化利用劳动资源；改善感染控制日常操作；提高服务质量,提高JCI和其他认证机构得分和符合程度;加强医院或诊所的品牌形象；改善敬业度水平；降低运营成本；提高质量和服务成果。</span>
            </div>
        </div>
    )
  }
  render() {
    return (
      <div className="HomePage">
        <ImgList data={this.imgs} />
        {this.tabsPart()}
        {this.shortChracter()}
      </div>
    );
  }
}

export default HomePage;