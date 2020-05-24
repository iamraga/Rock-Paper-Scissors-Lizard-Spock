import React from 'react';
import MyLayout from '../components/MyLayout';
import '../style.css';
import Link from 'next/link';
import { Row, Col, Button } from 'antd';

export default function index() {
    return (
        <MyLayout>
            <div className="content">
                <Row justify="center" style={{marginTop: '20px'}}>
                    <Col xs={22} sm={22} md={20} lg={16} xl={16} style={{padding: '0px 10px'}}>
                        <h1 className="question">What is Rock-Paper-Scissors-Lizard-Spock?</h1>
                        <div className="introContent">
                            <p className="answer">"Rock-Paper-Scissors-Lizard-Spock" was invented by Internet pioneer Sam Kass, as an improvement on the <i>classic</i> game "Rock-Paper-Scissors".</p>
                            <p className="answer" style={{textIndent: '0'}}>It seems like when you know someone well enough, <b>75-80%</b> of any Rock-Paper-Scissors games you play with that person end up in a tie. Well, this is a slight variation that reduces that probability.</p>
                        </div>
                        <h1 className="question">Hand gestures</h1>
                        <Row justify="center" className="gestures">
                            <Col className="gesture">
                                <p className="gestureDesc">Rock</p>
                                <img className="gestureImg" src="/static/sheldon/rock.png" />
                            </Col>
                            <Col className="gesture">
                                <p className="gestureDesc">Paper</p>
                                <img className="gestureImg" src="/static/sheldon/paper.png" />
                            </Col>
                            <Col className="gesture">
                                <p className="gestureDesc">Scissors</p>
                                <img className="gestureImg" src="/static/sheldon/scissors.png" />
                            </Col>
                            <Col className="gesture">
                                <p className="gestureDesc">Lizard</p>
                                <img className="gestureImg" src="/static/sheldon/lizard.png" />
                            </Col>
                            <Col className="gesture">
                                <p className="gestureDesc">Spock</p>
                                <img className="gestureImg" src="/static/sheldon/spock.png" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row justify="center" className="startCont">
                    <Col xs={16} sm={16} md={8} lg={8} xl={8} style={{textAlign: 'center'}}>
                        <Button type="primary" className="startButton"><Link href="/rules"><a>Game Rules</a></Link></Button>
                    </Col>
                    <Col xs={16} sm={16} md={8} lg={8} xl={8} style={{textAlign: 'center'}}>
                        <Button type="primary" className="startButton"><Link href="/play"><a>Play game!</a></Link></Button>
                    </Col>
                </Row>
            </div>
        </MyLayout>
    )
}
