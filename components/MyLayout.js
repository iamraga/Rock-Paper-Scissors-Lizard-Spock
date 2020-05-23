import React from 'react';
import { Layout, Row, Col } from 'antd';
import FooterContent from '../components/FooterContent';
import '../style.css';

const { Header, Content, Footer } = Layout;

export default function MyLayout(props) {
    return (
        <Layout>
            <Header className="header">
                <Row justify="center" align="middle" style={{height: '100%'}}>
                    <Col xs={24} sm={24} md={16} lg={8} xl={8}>
                        <div className="title">Rock Paper Scissors Lizard Spock</div>
                    </Col>
                </Row>
            </Header>
            <Content>
                <div className="mainContainer">
                    {props.children}
                </div>
            </Content>
            <Footer className="footer">
                <FooterContent />
            </Footer>
        </Layout>
    )
}
