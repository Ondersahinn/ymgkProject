import React from 'react';
import { accountRoutes } from '../../routes';
import AppContent from './AppContent'
import 'antd/dist/antd.css';
// import AppBar from '../../component/AppBar'

class Home extends React.Component {



  render() {
    return (
      <div>
        {/* <AppBar
           routes={accountRoutes}
        /> */}
        <AppContent
          routes={accountRoutes}
        /> 
      </div>
    );
  }
}

export default Home;
