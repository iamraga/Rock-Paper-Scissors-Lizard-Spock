import React from 'react';
import { Layout, Row, Col } from 'antd';
import Link from 'next/link';
import FooterContent from '../components/FooterContent';
import '../style.css';

const { Header, Content, Footer } = Layout;

export default function MyLayout(props) {
    return (
        <Layout>
            <Header className="header">
                <Row justify="center" align="middle" style={{height: '100%'}}>
                    <Col xs={24} sm={24} md={16} lg={8} xl={8}>
                        <div className="title"><Link href="/"><a>Rock Paper Scissors Lizard Spock</a></Link></div>
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
