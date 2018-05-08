import React, { Component } from 'react';
import { Tabs } from 'antd';
import './Employees.css';

const TabPane = Tabs.TabPane;
class Employees extends Component {
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
      <div className="Employees">
          <div className="EmployeesImg" />
          <div className="EmployeesTab">
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                tabBarStyle={{background: '#ececec'}}
              >
                <TabPane tab={<div><span className="boldEmployees">员工故事</span></div>} key="1">
                  <div>
                      <h3>员工故事</h3>
                  </div>
                </TabPane>
                <TabPane tab={<div><span className="boldEmployees">员工风采</span></div>} key="2">
                    <div>
                        <h3>员工风采</h3>
                        <div>
                            <img src={require('../img/employee1.jpg')} />
                            <img src={require('../img/employee2.jpg')} />
                            <img src={require('../img/employee3.jpg')} />
                            <img src={require('../img/employee4.jpg')} />
                        </div>
                    </div>
                </TabPane>
            </Tabs>
          </div>
      </div>
    );
  }
}

export default Employees;