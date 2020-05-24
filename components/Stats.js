import React from 'react';
import { Row, Col, Button } from 'antd';

export default function Stats({score, result, nextRound, isSelected, isEndGame}) {

    let resultClasses = ('resultMessage ' + ((result.result === "You win") ? 'green': (result.result === "You lose" ? 'red' : 'neutral')));

    return (
        <div className="statsCont">
            <Row justify="center" className="stats">
                <Col xs={22} sm={22} md={20} lg={20} xl={20}>
                    <div className={resultClasses}>
                        <p className="resultTitle">{result.result}</p>
                        <p className="resultDesc">{result.message}</p>
                    </div>
                </Col>
                <Col className="scoreCont" xs={22} sm={22} md={20} lg={20} xl={20}>
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
                    {isSelected && !isEndGame ? (
                        <Button type="primary" className="nextRound" onClick={nextRound}>Next round</Button>
                    ) : (
                        <Button className="nextRound" disabled>Next round</Button>
                    )}
                </Col>
            </Row>
        </div>
    )
}
