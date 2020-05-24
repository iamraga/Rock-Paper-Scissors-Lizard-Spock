import React from 'react';
import { Row, Col, Divider } from 'antd';
import { CHOICE, getKeyByValue } from '../utils';

export default function SheldonContent({ isSelected, sheldonSelection }) {
    
    let sheldonDivContent;
    if(isSelected) {
        //Random selection for sheldon
        sheldonDivContent = (
            <div className="userSelection">
                <p className="userTitle">Sheldon</p>
                <Divider style={{margin: '10px 0px', backgroundColor: '#8945b3'}}></Divider>
                <div>
                    <Row justify="center">
                        <Col className="userImageCont">
                            <p className="gestureDesc txt-center">{getKeyByValue(CHOICE, sheldonSelection)}</p>
                            <img className="userImage" src={`/static/sheldon/${getKeyByValue(CHOICE, sheldonSelection).toLowerCase()}.png`} />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
    else {
        sheldonDivContent = (
            <div className="userSelection">
                <p className="userTitle">Sheldon</p>
                <Divider style={{margin: '10px 0px', backgroundColor: '#8945b3'}}></Divider>
                <Row justify="center">
                    <Col span={22}>
                        <p className="userSelectionTitle" style={{fontSize: '16px'}}> Waiting for you to choose...</p>
                    </Col>
                </Row>
            </div>
        );
    }
    return (
        <div className="sheldonGameDiv">
            {sheldonDivContent}
        </div>
    )
}
