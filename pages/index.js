import React from 'react';
import { Layout } from 'antd';
import '../style.css';
import FooterContent from '../components/FooterContent';

const { Header, Content, Footer } = Layout;

export default function index() {
    return (
        <Layout>
            <Header className="header">
                <div className="title">RPSLS</div>
            </Header>
            <Content>
                <div className="content">
                    
                </div>
            </Content>
            <Footer style={{textAlign: 'center', backgroundColor: '#bbbbbb', boxShadow: '0px -3px 10px -8px #000'}}>
                <FooterContent />
            </Footer>
        </Layout>
    )
}
