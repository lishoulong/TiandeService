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
                style={{background: 'white', height: 500}}
              >
                <TabPane tab={<div>环境服务</div>} key="1">
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
                <TabPane tab={<div><div>中央运送</div><div>medical service</div></div>} key="2">
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
                <TabPane tab="Tab 3" key="3">
                    <div>
                        <h3>环境服务</h3>
                        <span></span>
                        <div>
                            <img src={require('../img/safeservice.png')} />
                            <img src={require('../img/safeservice.png')} />
                        </div>
                        <span></span>
                    </div></TabPane>
                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
              </Tabs>
          </div>
      </div>
    );
  }
}

export default NewTian;