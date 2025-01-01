// import React from 'react';
import React from 'react';
import { Button, Layout, theme } from 'antd';
import Forms from './Forms';
import { RightOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const App = () => {
  return (
    
    
    <Layout style={{ width: '100%', minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'right',
          backgroundColor: '#062328',
   
        }}
      >
        <Button style={{marginRight:'20px', borderRadius: '64px', width:'112px', height:'40px', backgroundColor:'#062328', textAlign:'center', padding:'0px', border:'none'}} ><p style={{color:'white'}}>Contact</p></Button>
        <Button style={{marginRight:'20px', borderRadius: '64px', width:'112px', height:'40px',backgroundColor:'#809599', padding:'0px', textAlign:'center', justifyItems:'center', border:'none'}} icon={<RightOutlined />} iconPosition='end' ><p style={{color:'white'}}>Sign In</p></Button>
      </Header>
      <Content
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: 'calc(100vh - 64px)', 
          padding: '0 48px',
          backgroundColor:'#062328',
        }}
      >
        <Forms />
        
      </Content> 
    </Layout>
  );
};
export default App;