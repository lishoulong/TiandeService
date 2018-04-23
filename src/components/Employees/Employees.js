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
                <TabPane tab={<div><span className="boldEmployees">员工故事</span><span className="enBoldtian">medical service</span></div>} key="1">
                  <div>
                      <h3>员工故事</h3>
                      <span>新天德物业服务有限公司（以下简称新天德）,原河北天德物业服务有限公司.是一家专门从事医疗物业服务的公司,成立于2003年,注册资金5000万元人民币,具有物业一级资质,有员工2000余人,服务的有10多家医院及政府机构,管理面积达150万㎡, 专门为医疗机构提供一流的物业服务。
新天德一直致力于调整内部产业结构、发展专业、创新思路,先后获得了ISO9001、ISO14001、OHSAS28001以及AAA企业信用等级证书,并与国际知名的医疗机构GRS达成战略合作，引进国际领先的标准化管理手段,吸引了大量行业优秀人才,致力于打造国内一流的医疗物业服务品牌，并为此不懈的努力。</span>
                  </div>
                </TabPane>
                <TabPane tab={<div><span className="boldEmployees">员工风采</span><span className="enBoldtian">medical service</span></div>} key="2">
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