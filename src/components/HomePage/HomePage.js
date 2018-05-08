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
                <span>Introduction</span>
                {
                    this.state.blackMore ?
                    <img className="rightImg" src={require('../img/moreshow.png')}/> :
                    <img className="rightImg" src={require('../img/moreclicked.png')}/> 

                }
                <span>新天德简介</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;新天德物业服务有限公司（以下简称新天德）是一家专门从事医疗物业服务的公司，成立于2003年，总部位于唐山市，注册资金1000万元人民币，有员工3000余人，服务的医院和政府机构有20多家，管理面积达200万㎡，是京津冀享誉盛名的医疗物业服务企业，专门为医疗机构提供一流的物业服务。 
新天德一直致力于调整内部产业结构、发展专业、创新思路，先后获得了ISO9001、ISO14001、OHSAS28001以及AAA级信用企业等级证书，并吸引了大量行业优秀人才，引进国际领先的标准化管理手段，致力于打造国内一流的医疗物业服务品牌。
目前新天德下属专业子公司为新天德物业服务有限公司北京分公司、新天德物业服务有限公司天津分公司，2016年北京分公司先后承接了中国康复研究中心北京博爱医院、中国医学科学院阜外医院、民航总医院、北京天坛医院等在中国享誉盛名的三甲医院，致力于发展京津冀地区的医疗物业产业。
新天德物业在专注于医疗物业领域的同时，敏锐的捕捉到了医疗物业市场的前瞻性，与美国最大的后急性、康复护理机构健瑞仕合作，引进护士助理的国际标准，共同打造的“为住院患者提供生活照料及标准化的护理服务”项目。针对康复患者的特有需求，新天德的护理人员都接受过严格、标准、专业化的护理培训及基础康复培训，还可按需求为其量身定做高端护理增值服务。</span>
            </div>
            <div className='HomePageChracterRight'>
                <span>特点</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;与医疗机构合作，改善提高其非临床方面的服务水平: 标准化服务部门的运作框架;最大化利用劳动资源；改善感染控制日常操作；提高服务质量,提高JCI和其他认证机构得分和符合程度;加强医院或诊所的品牌形象；改善敬业度水平；降低运营成本；提高质量和服务成果。</span>
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