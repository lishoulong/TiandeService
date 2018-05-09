import React, { Component } from 'react';
import { Tabs } from 'antd';
import './IndustryInflu.css';

const TabPane = Tabs.TabPane;
class IndustryInflu extends Component {
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
      <div className="IndustryInflu">
          <div className="IndustryInfluImg" />
          <div className="IndustryInfluTab">
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                tabBarStyle={{background: '#ececec'}}
              >
                <TabPane tab={<div><span>协会会员</span><span className="enIndustry">Member unit</span></div>} key="1">
                  <div>
                      <h3>协会会员单位</h3>
                      <div>
                          <img src={require('../img/xiehui.jpeg')} />                    
                          <span>&nbsp;&nbsp;&nbsp;&nbsp;通过公司多年的努力，新天德物业服务有限公司于2016年10月成为全国卫生产业企业管理协会医院后勤管理发展分会会员，标志着新天德在行业内的影响力又迈上了一个新的台阶。</span>
                      </div>
                  </div>
                </TabPane>
              </Tabs>
          </div>
      </div>
    );
  }
}

export default IndustryInflu;