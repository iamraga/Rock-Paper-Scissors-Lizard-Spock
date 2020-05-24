import React, { useState } from 'react';
import { Row, Col, Button, Divider } from 'antd';
import { CHOICE, getKeyByValue } from '../utils';
import SheldonContent from '../components/SheldonContent';
import Stats from '../components/Stats';

const GameCenter = ({ username, round, score, processResult, result, nextRound, isEndGame }) => {

    let [userSelection, setUserSelection] = useState("");
    let [sheldonSelection, setSheldonSelection] = useState("");
    let [isSelected, setIsSelected] = useState(false);

    //Functions
    const processUserSelection = (e) => {
        let randomSelection = Math.floor(Math.random() * 5) + 1;
        setSheldonSelection(randomSelection);
        setIsSelected(true);
        setUserSelection(CHOICE[e.target.value]);
        processResult(CHOICE[e.target.value], randomSelection);
    }

    const processNextRound = () => {
        setUserSelection("");
        setSheldonSelection("");
        setIsSelected(false);
        nextRound();
    }

    let userDivContent;
    if(isSelected) {
        userDivContent = (
            <div className="userSelection">
                <p className="userTitle">{username}</p>
                <Divider style={{margin: '10px 0px', backgroundColor: '#8945b3'}}></Divider>
                <div>
                    <Row justify="center">
                        <Col className="userImageCont">
                            <p className="gestureDesc txt-center">{getKeyByValue(CHOICE, userSelection)}</p>
                            <img className="userImage" src={`/static/user/${getKeyByValue(CHOICE, userSelection).toLowerCase()}.png`} />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
    else {
        userDivContent = (
            <div className="userSelection">
                <p className="userTitle">{username}</p>
                <Divider style={{margin: '10px 0px', backgroundColor: '#8945b3'}}></Divider>
                <p className="userSelectionTitle">Choose your option</p>
                <Row justify="center">
                    <Col span={16} style={{marginBottom: '10px'}}><Button className="option" value="ROCK" onClick={processUserSelection}>Rock</Button></Col>
                    <Col span={16} style={{marginBottom: '10px'}}><Button className="option" value="PAPER" onClick={processUserSelection}>Paper</Button></Col>
                    <Col span={16} style={{marginBottom: '10px'}}><Button className="option" value="SCISSORS" onClick={processUserSelection}>Scissors</Button></Col>
                    <Col span={16} style={{marginBottom: '10px'}}><Button className="option" value="LIZARD" onClick={processUserSelection}>Lizard</Button></Col>
                    <Col span={16} style={{marginBottom: '10px'}}><Button className="option" value="SPOCK" onClick={processUserSelection}>Spock</Button></Col>
                </Row>
            </div>
        );
    }

    return (
        <div>
            <Row justify="center">
                <Col span={20}>
                    <p className="question roundTitle txt-center">Round {round}</p>
                </Col>
            </Row>
            <Row justify="center" style={{margin: '15px 10px'}}>
                <Col className="gameDivs" xs={24} sm={24} md={18} lg={8} xl={8}>
                    <div className="userGameDiv">
                        {userDivContent}
                    </div>
                </Col>
                <Col className="gameDivs" xs={22} sm={22} md={18} lg={8} xl={8}>
                    <div className="gameStatsDiv">
                        <Stats score={score} result={result} nextRound={processNextRound} isSelected={isSelected} isEndGame={isEndGame} />
                    </div>
                </Col>
                <Col className="gameDivs" xs={24} sm={24} md={18} lg={8} xl={8}>
                    <SheldonContent isSelected={isSelected} sheldonSelection={sheldonSelection} />
                </Col>
            </Row>
        </div>
    )
}

export default GameCenter;