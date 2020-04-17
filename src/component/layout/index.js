import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Row, Col } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{ marginTop: '0' }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                                <UserOutlined />
                                <span>İstasyon Bilgileri</span>

                        </Menu.Item>
                        <Menu.Item key="2">
                                <VideoCameraOutlined />
                                <span>Hava Kalite Değerleri</span>

                        </Menu.Item>
                        <Menu.Item key="3">
                            <UploadOutlined />
                            <span>Haftalık Hava kalitesi</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, background: '#f0f2f5' }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Row justify="center">
                            <Col span={10}>
                                <div style={{ border: '1px solid grey', width: '100%', height: '100%', padding: '10px' }}>
                                    <p>Adı : &nbsp;&nbsp;&nbsp;&nbsp; EMEP - İzmir Seferihisar</p>
                                    <p>Sahibi :&nbsp;&nbsp;&nbsp;&nbsp;  CSB - Ege THM</p>
                                    <p>Tipi : &nbsp;&nbsp;&nbsp;&nbsp;   Demir - Çelik ve Metalurji</p>
                                    <p>Şehir :&nbsp;&nbsp;&nbsp;&nbsp;   İzmir</p>
                                    <p>İlçe :  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Seferihisar</p>
                                </div>
                            </Col>

                        </Row>

                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default withRouter(SiderDemo);
