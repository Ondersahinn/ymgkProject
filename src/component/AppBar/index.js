import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {  Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';



const AppBar = () => {
    return (
        <div >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to='/istasyon'>
                        <UserOutlined />
                        <span>İstasyon Bilgileri</span>
                    </Link>

                </Menu.Item>
                <Menu.Item key="hava kalitesi">
                    <Link to='/havaKalite'>
                        <VideoCameraOutlined />
                        <span>Hava Kalite Değerleri</span>
                    </Link>

                </Menu.Item>
                <Menu.Item key="3">
                    <UploadOutlined />
                    <span>Haftalık Hava kalitesi</span>
                </Menu.Item>
            </Menu>
        </div>
    );

}
export default withRouter(AppBar);