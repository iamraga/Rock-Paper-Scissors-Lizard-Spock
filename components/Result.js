import React from 'react';
import { Row, Col, Button } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

export default function Result({score, startNewGame}) {

    let resultContent = (score.user === 7) ? (
        <Row type="flex" justify="center" align="middle" style={{height: '100%', margin: '30px 0px'}}>
            <Col span={24} style={{textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <CheckCircleTwoTone twoToneColor="#52c41a" className="wonIcon" />
                <h1>You Won!</h1>
                <h3>Give yourself a treat!</h3>
            </Col>
            <Col className="scoreCont" xs={20} sm={20} md={16} lg={12} xl={12}>
                <Row justify="space-between">
                    <Col span={10}>
                        <p className="scoreName">Your score</p>
                        <p className="score">{score.user}</p>
                    </Col>
                    <Col span={10}>
                        <p className="scoreName">Sheldon's score</p>
                        <p className="score">{score.sheldon}</p>
                    </Col>
                </Row>
            </Col>
            <Col span={24} style={{textAlign: 'center'}}>
                <Button type="primary" size="large" shape="round" onClick={startNewGame} className="startNewGame" style={{padding: '0px 75px', margin: '15px 0px 10px 0px'}}>Start new game</Button>
            </Col>
        </Row>
    ) : (
        <Row type="flex" justify="center" align="middle" style={{height: '100%', margin: '30px 0px'}}>
            <Col span={24} style={{textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <CloseCircleTwoTone twoToneColor="#ff1717" className="wonIcon" />
                <h1>You lost!</h1>
                <h3>Try again and defeat Sheldon next time!</h3>
                <Button type="primary" size="large" shape="round" onClick={startNewGame} className="startNewGame" style={{padding: '0px 75px', margin: '15px 0px 10px 0px'}}>Start new game</Button>
            </Col>
        </Row>
    );

    return (
        <div>
            {resultContent}
        </div>
    )
}
