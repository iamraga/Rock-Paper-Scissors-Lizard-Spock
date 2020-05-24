import React from 'react'
import { Row, Col, Button } from 'antd';
import Link from 'next/link';

export default function UserInfo({ begin, username, setUsername }) {
    return (
        <div>
            <Row justify="center" style={{margin: '30px 0px'}}>
                <Col sm={20} md={16} lg={12} xl={12}>
                    <div className="userinfoCont">
                        <label htmlFor="usernameInput"><span className="inputLabel">Enter your name</span>
                            <input id="usernameInput" className="usernameInput" placeholder="Bruce Wayne" value={username} onChange={e => setUsername(e.target.value)} />
                        </label>
                    </div>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={22} sm={20} md={12} lg={10} xl={10}>
                    <div>
                        <p>Note: </p>
                        <ul className="gameNote">
                            <li>First one to reach <b>7 points</b> wins</li>
                            <li>You will play against the CPU (nickname Sheldon)</li>
                            <li>Kindly do not hit the refresh or back button. This will reset the game and erase your progress</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={16} sm={16} md={8} lg={8} xl={8} style={{textAlign: 'center'}}>
                    <Button className="viewRules"><Link href='/rules'>View game rules</Link></Button>
                    <Button type="primary" className="startButton" onClick={begin}>Let's begin!</Button>
                </Col>
            </Row>
        </div>
    )
}
