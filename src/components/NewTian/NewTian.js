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
                <TabPane tab={<div><span className="boldTian">历史</span><span className="enBoldtian">history overlook</span></div>} key="1">
                  <div>
                      <h3>历史</h3>
                      <span>新天德物业服务有限公司（以下简称新天德）,原河北天德物业服务有限公司.是一家专门从事医疗物业服务的公司,成立于2003年,注册资金5000万元人民币,具有物业一级资质,有员工2000余人,服务的有10多家医院及政府机构,管理面积达150万㎡, 专门为医疗机构提供一流的物业服务。
新天德一直致力于调整内部产业结构、发展专业、创新思路,先后获得了ISO9001、ISO14001、OHSAS28001以及AAA企业信用等级证书,并与国际知名的医疗机构JRX达成战略合作，引进国际领先的标准化管理手段,吸引了大量行业优秀人才,致力于打造国内一流的医疗物业服务品牌，并为此不懈的努力。</span>
                  </div>
                </TabPane>
                <TabPane tab={<div><span className="boldTian">领导层</span><span className="enBoldtian">leader group</span></div>} key="2">
                    <div>
                        <h3>领导层</h3>
                        <span>董事长-张伟

新天德主要创始人，于2003年5月出任新天德物业服务有限公司董事长。把美国‘GRS创新医疗物业行业体系’引进中国的发起人，‘未来20年医疗物业行业改革的发起者’，‘中国医疗物业信息自动化的倡导者’，自2003年公司成立以来至今，张伟一直担任新天德物业服务有限公司的董事长，同时也是全国卫生产业企业管理协会副会长。2017年6月，被评选为全国卫生产业企业管理协会‘优秀个人’。</span>
                    </div>
                </TabPane>
                <TabPane tab={<div><span className="boldTian">使命愿景</span><span className="enBoldtian">mission vision</span></div>} key="3">
                    <div>
                        <h3>使命、愿景、核心价值观</h3>
                        <span>新天德物业服务有限公司常年致力于医疗物业服务产业，根据多年的医疗物业服务经验，总结出一套科学、系统的医疗物业操作手册，保持行业内服务领先，造就出一支服务理念超前、服务意识卓越、服务程序高效的团队。
                        公司成立以来，立足高起点，融入中国传统“德”文化，塑造出有中国特色的“新天德物业”品牌。不断积累良好口碑，旨在成为行业标杆；对物业管理的实质有着明晰深刻的体察，坚持走“精细化”路线，力求将管理与服务水准做到业内平均标准之上，成为专业中的专业，以此为内核精心打造出一支高度职业化的管理团队，力争成就业内一流品牌。秉承着奉献与施予的精神为一个和谐、舒适、安静的医疗物业服务环境而持续努力。
                        
                        核心价值观
                               客户第一：关注客户的关注点，为客户提供建议和资讯，帮助客户成长
                               团队合作：共享共担，以小我完成大我
                         拥抱变化：突破自我，迎接变化  
                         诚信：诚实正直，信守承诺
                         激情：永不言弃，乐观向上  
                         敬业：以专业的态度和平常的心态做非凡的事情</span>
                    </div>
                </TabPane>
                <TabPane tab={<div><span className="boldTian">企业文化</span><span className="enBoldtian">corporate culture</span></div>} key="4">
                    <div>
                        <h3>企业文化</h3>
                        <span>新天德物业的快速发展源于新天德的企业文化。过去，企业是有了钱再做文化，而新天德物业的理念是，先做文化才会有钱。 “物业管理不仅是一项服务，更是一种文化。” 真诚、团队协作、创新、卓越服务”，是我们一贯遵循的企业文化理念！这是新天德人的文化观，也是价值观。
真诚是人与人信任的基石，是卓越服务的基本要求。
    团队协作的基础是团队，一个团队不能只依靠一个人的力量，重视一个人的力量，要依靠整个团队协作的力量创造奇迹，要着力打造一个优秀的团队，而不是一个优秀的个人，要始终把团队放在第一位，一切以团队的利益为主。就是统一的目标，统一的步伐、
创新是企业快速、健康发展的巨大动力。新天德的创新包括：服务产品创新、营销模式创新、行政管理创新及运营模式创新，并引入国内先进的信息化系统，进行信息化管理，创新使新天德在医疗服务行业迅速找到了自己的位置，高速发展。
卓越服务源自实时反馈，卓越服务重点在于对于员工的招聘和培训。让有个性的个体融入企业，让他们的个性与企业价值和实施培训项目相统一，以保证员工是富有竞争力的，并且有能力履行他们的职能。
新天德倡导发扬团结协作精神，通过相互沟通、相互帮助达到协调一致，特别是在面对困难及问题时，提倡及时解决问题，自觉“补位”，但又不“越位”，遇到问题不推诿，问题解决后再寻找原因，从而扬长避短。你只要对我们这个团队任何一个人交待一件事，就等于已交待给我们整个团队。 
新天德的领导团队深知——文化的载体是员工，积极向上的企业文化，会给员工搭建一个更为广阔的发展平台。因此，企业文化是凝聚和激励职工的重要力量，是每个企业长盛不衰的动力和源泉。 新天德物业致力于建设完备的文化体系，从员工入职的手册和培训，到企业文化宣传的企业报纸、宣传画册、网站、微博、微信，到管理项目中各类企业文化墙，以各种渠道传递着天德人的精神内核。</span>
                    </div>
                </TabPane>
                <TabPane tab={<div><span className="boldTian">资质荣誉</span><span className="enBoldtian">qualification honor</span></div>} key="5">
                    <div>
                        <h3>资质荣誉</h3>
                        <span>专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。专业的服务领导者，为全球医疗机构，教育结构，体育赛事提供设施管理服务。</span>
                        <div>
                            <img src={require('../img/safeservice.png')} />
                            <img src={require('../img/safeservice.png')} />
                        </div>
                    </div>
                </TabPane>
            </Tabs>
          </div>
      </div>
    );
  }
}

export default NewTian;