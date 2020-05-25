import React, { useState, useEffect } from 'react';
import MyLayout from '../components/MyLayout';
import { message } from 'antd';
import UserInfo from '../components/UserInfo';
import GameCenter from '../components/GameCenter';
import Result from '../components/Result';
import { CHOICE, getKeyByValue } from '../utils';
import RESULTS from '../results';

const Play = () => {

    //State definitions
    let [username, setUsername] = useState("");
    let [startGame, setStartGame] = useState(false);
    let [isEndGame, setIsEndGame] = useState(false);
    let [showResult, setShowResult] = useState(false);
    let [score, setScore] = useState({
        user: 0,
        sheldon: 0
    });
    let [round, setRound] = useState(1);
    let [result, setResult] = useState({
        result: "Pick your option",
        message: "Result will be displayed here"
    });

    //Functions
    function begin() {
        if(username.trim() === '') {
            message.error("Your name cannot be empty");
            return false;
        }
        setStartGame(true);
    }
    function nextRound() {
        setRound(++round);
        setResult({
            result: "Pick your option",
            message: "Result will be displayed here"
        });
    }
    function processResult(userSelection, sheldonSelection) {
        let resultObj = {};
        if(userSelection === sheldonSelection) {
            resultObj = {
                result: "Draw",
                message: "Both of you chose the same option"
            }
        }
        else {
            resultObj = RESULTS[userSelection][sheldonSelection];
        }
        if(resultObj.result === "You win") {
            score.user = ++score.user;
            setScore(score);
        }
        else if(resultObj.result === "You lose") {
            score.sheldon = ++score.sheldon;
            setScore(score);
        }
        result.result = resultObj.result;
        result.message = resultObj.message;
        setResult(result);
        if(score.user === 7 || score.sheldon === 7) {
            setIsEndGame(true);
            setTimeout(() => {
                setShowResult(true);
            }, 4000);
        }
    }

    const startNewGame = () => {
        setIsEndGame(false);
        setShowResult(false);
        setRound(1);
        setScore({user: 0, sheldon: 0});
        setResult({
            result: "Pick your option",
            message: "Result will be displayed here"
        });
    }

    //Components
    let displayContent;
    if(startGame && !showResult) { //Pre game content before game starts
        displayContent = (
            <div className="playArea">
                <GameCenter username={username} round={round} score={score} processResult={processResult} result={result} nextRound={nextRound} isEndGame={isEndGame} />
            </div>
        );
    }
    else if(!startGame && !showResult) { //When game starts
        displayContent = (
            <div className="playArea">
                <UserInfo begin={begin} username={username} setUsername={setUsername} />
            </div>
        );
    }
    else {
        displayContent = (
            <div className="playArea">
                <Result score={score} startNewGame={startNewGame} />
            </div>
        );
    }


    return (
        <MyLayout>
            {displayContent}
        </MyLayout>
    )
}

export default Play;