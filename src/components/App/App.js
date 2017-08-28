import React from 'react';

require('./App.css');

class App extends React.Component {
    constructor(props){
       super(props);
    }
    componentDidMount(){
        const {dispatch} = this.props;
        // dispatch(fetchUser());
    }
    render() {
        return (
            <div id="hey">
                {this.props.children}
            </div>
        )
  }
}

export default App;