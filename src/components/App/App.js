import React from 'react';
import MyHeader from './Headers/Headers';
import {Button,Menu, Icon,Input, Layout} from 'antd'

require('./App.css');
// require('antd/lib/button/style/index.css');
// require('antd/lib/grid/style/index.css');
// require('antd/lib/layout/style/index.css');
// require('antd/lib/menu/style/index.css');
// require('antd/lib/style/index.css');
// require('antd/lib/tabs/style/index.css');
// require('antd/lib/tooltip/style/index.css');
const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
    constructor(props){
       super(props);
    }
    render() {
        return (
            <div id="hey" style={{height: '100%'}}>
                <Layout style={{height: '100%', background: 'white'}}>
                    <MyHeader/>
                    <Layout style={{marginLeft: '200px', marginRight: '200px', marginTop: '20px', background: 'white'}}>
                        <Content>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default App;