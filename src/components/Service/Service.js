import React, { Component } from 'react';
import { Tabs } from 'antd';
import './Service.css';

const TabPane = Tabs.TabPane;
class Service extends Component {
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
      <div className="Service">
          <div className="ServiceImg" />
          <div className="ServiceTab">
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                tabBarStyle={{background: '#ececec'}}
                style={{background: 'white' ,height: 550}}
              >
                <TabPane tab={<div><div>环境服务</div><div>medical service</div></div>} key="1">
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
                <TabPane tab={<div><div>设备运行维护</div><div>medical service</div></div>} key="3">
                    <div>
                        <h3>环境服务</h3>
                        <span></span>
                        <div>
                            <img src={require('../img/safeservice.png')} />
                            <img src={require('../img/safeservice.png')} />
                        </div>
                        <span></span>
                    </div></TabPane>
                <TabPane tab={<div><div>司梯/导医</div><div>medical service</div></div>} key="4">Content of tab 4</TabPane>
                <TabPane tab={<div><div>安保服务</div><div>medical service</div></div>} key="5">Content of tab 5</TabPane>
                <TabPane tab={<div><div>客户服务中心</div><div>medical service</div></div>} key="6">Content of tab 6</TabPane>
            </Tabs>
          </div>
      </div>
    );
  }
}

export default Service;