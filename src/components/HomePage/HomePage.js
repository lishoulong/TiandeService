import React, { Component } from 'react';
import { Tabs } from 'antd'
import './HomePage.css';

const TabPane = Tabs.TabPane;

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Tabs
          defaultActiveKey="1"
          tabPosition={'left'}
          tabBarStyle={{background: '#ececec'}}
        >
          <TabPane tab={<div>环境服务</div>} key="1">
            Content of tab 1
          </TabPane>
          <TabPane tab={<div><div>中央运送</div><div>medical service</div></div>} key="2">Content of tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
          <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
          <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
          <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
          <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default HomePage;