import React from 'react'
import MyLayout from '../components/MyLayout';
import { Row, Col, Divider } from 'antd';

export default function Rules() {
    return (
        <MyLayout>
            <Row justify="center" style={{marginTop: '20px'}}>
                <Col xs={22} sm={22} md={20} lg={16} xl={16} style={{padding: '0px 10px'}}>
                    <div className="rulesCont">
                        <h1 className="question txt-center" style={{color: '#8945b3'}}>Rules</h1>
                        <Divider style={{backgroundColor: '#8945b3'}}></Divider>
                        <div className="txt-center">
                            <ul className="rulesList">
                                <li><p>Scissors cuts Paper</p></li>
                                <li><p>Paper covers Rock</p></li>
                                <li><p>Rock crushes Lizard</p></li>
                                <li><p>Lizard poisons Spock</p></li>
                                <li><p>Spock smashes Scissors</p></li>
                                <li><p>Scissors decapitates Lizard</p></li>
                                <li><p>Lizard eats Paper</p></li>
                                <li><p>Paper disproves Spock</p></li>
                                <li><p>Spock vaporises Rock</p></li>
                                <li><p style={{fontSize: '14px'}}><i>and as it always has...</i></p></li>
                                <li><p>Rock crushes Scissors</p></li>
                            </ul>
                        </div>
                    </div>
                    <p style={{textAlign: 'center', fontSize: '20px'}}>Watch Dr.Sheldon Lee Cooper explain these rules!</p>
                    <div className="iframeDiv txt-center">
                        <iframe className="iframe" src="https://www.youtube.com/embed/x5Q6-wMx-K8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
        </MyLayout>
    )
}
