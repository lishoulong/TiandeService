import React, { Component } from 'react';
import { Tabs } from 'antd';
import {newsList} from '../../util';
import './News.css';

const TabPane = Tabs.TabPane;
class News extends Component {
  constructor(props){
      super(props);
      this.getNewsList = this.getNewsList.bind(this);
  }
  getNewsList = () => {
    return (
      <div className=''>
          {
            newsList.map(function(news, index){
              let cssClasses = `rightPart${news.icon} rightPart`;
                return (
                    <div key={index} className={cssClasses}>
                      <span>{news.value}</span>
                      <span>{news.more}</span>
                    </div>
                )
            })
          }
      </div>
  )
}
render() {
    return (
      <div className="News">
          <div className="NewsImg" />
          <div className="NewsTab">
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                tabBarStyle={{background: '#ececec'}}
              >
                <TabPane tab={<div><span>文章链接</span><span className="enNews">medical service</span></div>} key="1">
                      {/* <div className="rightPart">
                        <span>专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，</span>
                        <span>查看更多</span>
                      </div>
                      <div className="rightPart">
                        <span>专业的服务领导者，专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。</span>
                        <span>查看更多</span>
                      </div> */}
                      {this.getNewsList()}
                </TabPane>
              </Tabs>
          </div>
      </div>
    );
  }
}

export default News;