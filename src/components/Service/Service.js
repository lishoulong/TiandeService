import React, { Component } from 'react';
import { Tabs } from 'antd';
import './Service.css';

const TabPane = Tabs.TabPane;
class Service extends Component {
  constructor(props){
      super(props);
      this.state = {
          propsKey: ''
      }
      this.tabEnv = this.tabEnv.bind(this);
      this.onChange = this.onChange.bind(this);
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
  componentDidMount(){
      let params = this.props.location.state ? this.props.location.state.params : 'tree';
      console.log('params',params);
      if(params){
        this.setState({
            propsKey: params
        })
      }
  }
  onChange = (activeKey) => {
    this.setState({ propsKey: activeKey });
  }
  render() {
    return (
      <div className="Service">
          <div className="ServiceImg" />
          <div className="ServiceTab">
            <Tabs
                activeKey={this.state.propsKey}
                onChange={this.onChange}
                tabPosition={'left'}
                tabBarStyle={{background: '#ececec'}}
              >
                <TabPane tab={<div><div>环境保洁</div><span className="enService">Environmental Service(EVS)</span></div>} key="tree">
                  <div>
                      <h3>环境保洁</h3>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;环境保洁服务指通过专业保洁人员使用清洁设备、工具和药剂，对医院室内地面、墙面、顶棚、石材、卫生间、部位进行清扫保洁：对病区、科室、急门诊、手术室、等进行针对性的卫生处理，以达到环境清洁、杀菌防疫、物品保养等目的。是确保医院室内外环境干净整洁的服务，新天德环境保洁服务的特点如下：
                      结合使用平方米和医院每个区域活动信息的数据，对院方进行全面和准确的测量。
                      优化人力资源并对清洗过程所需的化学品和工具的数量进行精确评估以控制成本。
                      与医院的感控部门一起制定针对不同科室的标准运作流程。
                      给员工提供技术培训，我们也为员工提供软技能培训。</span>
                  </div>
                </TabPane>
                <TabPane tab={<div><div>中央运送</div><span className="enService">Central Transportation Services(CTS)</span></div>} key="transform">
                    <div>
                        <h3>中央运送</h3>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;我们把中央运送服务管理工作分为：即时服务、预约服务、计划服务、驻守服务、循环服务五种标准的管理服务模式，各个岗位上的员工将按照既定的工作程序作为医院提供服务。
                        均是训练有素的员工，并使用条形码扫描仪，任何时候，任何地方医院工作人员均可方便地查询关于提取与运送。</span>
                    </div>
                </TabPane>
                <TabPane tab={<div><div>工程运行维修</div><span className="enService">Facility Operations Maintenance(FOM)</span></div>} key="profix">
                    <div>
                        <h3>工程运行维修</h3>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;通过专业化的机电工程管理，确保医院机电设备，水暖管道等机电设备设施安全有效运行，保障医院正常运转，满足全院各科室运转要求；并及时、专业的对机电设备设施进行有效的检修、维修、保养，以保证机电设备设施使用寿命最大化，从而降低医院后勤保障成本。新天德工程运行维护服务的特点如下：
                        整合医院的维修工人，组建高效的实干团队。
                        预防性的维护计划将延长设备的使用寿命，进而延长整体设施的寿命。
                        定期维护，减少计划外的停止运行和维修。
                        力求帮助院方实现成本节约。</span>
                    </div>
                </TabPane>
                <TabPane tab={<div><div>司梯/导医</div><span className="enService">Elevator & Lobby Hostess Services</span></div>} key="elabrater">
                    <div>
                        <h3>司梯/导医</h3>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;作为医院的大使支撑医院品牌形象。
                        持续地提供专业，友好，温暖而敬业的服务。
                        与所有相关部门保持有效的沟通，确保畅通服务。
                        展现热心、热情、乐观和激情。
                        迅速、高效、愉快地解答任何咨询
                        </span>
                    </div>
                </TabPane>
                <TabPane tab={<div><div>安保服务</div><span className="enService">Security Services</span></div>} key="safeservice">
                    <div>
                        <h3>安保服务</h3>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;保证所管院区内的正常工作秩序,防范火灾、盗窃、破坏、纠纷、自然灾害事故发生,对各种突发事件能及时处理控制,为医院提供安全的工作生活环境。
                        新天德物业服务有限公司安保服务的特点：
                        启用紧急事件报告系统；
                        履行责任巡视大楼，并通过保安巡逻制度验证我们的承诺。
                        接受培训，应对恐怖袭击和处理各类医患纠纷等突发事件。
                        接受培训，可操作报警与视频监控系统
                        </span>
                    </div>
                </TabPane>
                <TabPane tab={<div><div>客服中心</div><span className="enService">Customer Service Center(CSC)</span></div>} key="center">
                    <div>
                        <h3>客户服务</h3>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;客户服务中心（Customer Service Center，CSC）是指利用电话、手机、传真、WEB等多种信息方式并接入，以人工、自动语音、WEB等多种方式为客户提供各类售前、售后服务，建立起来的企业与客户沟通的组织平台。新天德物业客户服务中心服务特点如下：
                        迅速、高效、愉快地解答任何咨询。
                        提供一致、专业、友好、温暖而敬业的服务。
                        与所有相关部门保持有效的沟通，以确保服务畅通进行
                        </span>
                    </div>
                </TabPane>
                <TabPane tab={<div><div>高端护理服务</div><span className="enService">Top Service(TS)</span></div>} key="top">
                    <div>
                        <h3>高端护理服务</h3>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;新天德护理服务是与美国最大的康复护理机构健瑞仕合作，引进护士助理的国际标准 （Certified Nursing Assistant – CNA)，共同打造的“为住院患者提供生活照料及标准化的专业护理服务”项目。针对康复患者的特有需求，新天德的护理人员都经过严格、标准、专业化的护理培训及基础康复培训，还可按需求为患者量身定做高端护理增值服务。
<br />    新天德和美国GRS健瑞仕战略合作，引进其国际护士助理标准和管理体系，共同为医院提供护理员、高级护士助理服务，以及康复、膳食营养、健康导航等增值服务，打造护理服务与物业服务相整合的高端护理品牌。
<br />    新天德国际护理的核心价值：
提高护理质量，增加患者满意度；增加患者康复率，导航出院患者得到继续康复；减轻护士的工作强度和压力；节省资源和成本，增加医院收入。
                        </span>
                    </div>
                </TabPane>
                <TabPane tab={<div><div>医院管理咨询服务</div><span className="enService">Hospital Service(HS)</span></div>} key="hospital">
                    <div>
                        <h3>医院管理咨询服务</h3>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;医院管理咨询是医院针对某一具体管理需求而购买的咨询服务活动。一般一次管理咨询都会以一个"项目"的形式确定下来。项目的主要职能块：医疗、教学、科研、卫生防疫四大模块。医院管理咨询的主要内容就是针对医院不同的职能模块，由我公司根据医院的实际情况，通过科学严谨的分析，分别给予系统的解决方案。
                        </span>
                    </div>
                </TabPane>
                <TabPane tab={<div><div>配餐服务</div><span className="enService">Food Service (FS)</span></div>} key="footservice">
                    <div>
                        <h3>配餐服务</h3>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;在医院实际的工作中，会有病人或病人家属提前订餐，医院按时送餐的需要，在这种情况下，原来医院的作法是：由护士通过订餐本或电话等把病人或病人家属的订餐要求记下来，然后统一派送。
随着医院信息化发展的进步，目前通过纸或者笔来记订餐需求的方式已经比较落后了，为此我们根据医院需要推出了更先进和方便的医院订餐系统解决方案。
我们的方案中采用现在流行的工业级彩屏手持终端进行订餐，配合无线或usb数据链接上传订餐数据，方便护士操作；手持机本身带有手持护套，防摔，防水，外观也很时尚，适合环境条件较好的医院使用。
1、如果使用wifi版手持机，需要在电脑附近配置无线路由器。手持机可以接入无线路由，直接传输数据，不用连接数据线。而且，用户开始同步一台手持机后，不用等待同步完成，即可操作另一台手持机，多台机器同时实现与服务器通讯。这样做使操作更加方便快捷，也不需要物理拔插usb线，避免了手持机接口的物理磨损。
2、我们的系统，可以提供查询预订平台，方便病人通过大屏幕查询机，查询当日菜单，实时预订。同时其它相关工作人员也可以通过查询机查询食堂当天的订餐情况包括数量，消费总额，餐饮的配送情况等，提高医院的管理效率和整体形象。
3、我们系统可以提供配餐中心统计看板，通过后厨管理可以方便的通过看板了解到：当天预订餐的总数量，总金额，知道订餐的总体情况；同时后厨可以根据预订情况，生产订餐的订单，后厨可以按预订的数量进行配餐，生产。
4、我们系统提供通过传统的通过病人卡实现订餐扣费的方式，也可以通过连接医院his系统实现后台扣费。通过连接his系统实现扣费的方式方便医院统一财务管理，同时给食堂提供财务报表，方便两个部门方便的对账，院内结算。
5、我们系统可以和医院现有的就诊卡系统对接，直接使用就诊卡进行订餐，订餐的报表直接增加医院自费项目中（设为营养餐）这样可以让病人更方便，医院也无需进行业务流程的调整。
                        </span>
                    </div>
                </TabPane>
            </Tabs>
          </div>
      </div>
    );
  }
}

export default Service;