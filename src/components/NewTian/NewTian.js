import React, { Component } from 'react';
import { Tabs } from 'antd';
import './NewTian.css';

const TabPane = Tabs.TabPane;
class NewTian extends Component {
  constructor(props){
      super(props);
      this.tabEnv = this.tabEnv.bind(this);
  }
  tabEnv = () => {
    return
     ( <div>
          <h3>环境服务</h3>
          <span></span>
          <div>
              <img src={require('../img/safeservice.png')} />
              <img src={require('../img/safeservice.png')} />
          </div>
          <span></span>
      </div>
    )
  }
  render() {
    return (
      <div className="NewTian">
          <div className="NewTianImg" />
          <div className="NewTianTab">
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                tabBarStyle={{background: '#ececec'}}
              >
                <TabPane tab={<div><span className="boldTian">历史</span><span className="enBoldtian">medical service</span></div>} key="1">
                  <div>
                      <h3>环境服务</h3>
                      <span>专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。</span>
                      <div>
                          <img src={require('../img/safeservice.png')} />
                          <img src={require('../img/safeservice.png')} />
                      </div>
                      <span>专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。</span>
                  </div>
                </TabPane>
                <TabPane tab={<div><span className="boldTian">领导层</span><span className="enBoldtian">medical service</span></div>} key="2">
                    <div>
                        <h3>环境服务</h3>
                        <span></span>
                        <div>
                            <img src={require('../img/safeservice.png')} />
                            <img src={require('../img/safeservice.png')} />
                        </div>
                        <span></span>
                    </div>
                </TabPane>
                <TabPane tab={<div><span className="boldTian">使命愿景</span><span className="enBoldtian">medical service</span></div>} key="3">
                    <div>
                        <h3>环境服务</h3>
                        <span></span>
                        <div>
                            <img src={require('../img/safeservice.png')} />
                            <img src={require('../img/safeservice.png')} />
                        </div>
                        <span></span>
                    </div></TabPane>
                <TabPane tab={<div><span className="boldTian">资质荣誉</span><span className="enBoldtian">medical service</span></div>} key="4">
                    <div>
                        <h3>环境服务</h3>
                        <span>专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。</span>
                        <div>
                            <img src={require('../img/safeservice.png')} />
                            <img src={require('../img/safeservice.png')} />
                        </div>
                        <span>专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。</span>
                    </div>
                </TabPane>
            </Tabs>
          </div>
      </div>
    );
  }
}

export default NewTian;