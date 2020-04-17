import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;



const istasyonBilgileri = () => {
    return (
        <div>
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
        </div>);
}

export default istasyonBilgileri;