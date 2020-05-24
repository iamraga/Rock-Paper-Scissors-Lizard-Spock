import React from 'react';
import { HeartTwoTone, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

export default function FooterContent() {
    return (
        <div className="contact">
            <span>Made with <HeartTwoTone twoToneColor="#eb2f96" style={{padding: '0px 5px'}} /> By <b>Ragavendhar</b></span>
            <div className="social">
                <a href="https://github.com/iamraga" target="_blank"><GithubOutlined /></a>
                <a href="https://www.linkedin.com/in/ragavendhar-t" target="_blank"><LinkedinOutlined /></a>
                <a href="https://twitter.com/RagavendharT" target="_blank"><TwitterOutlined /></a>
            </div>
            <a href="https://github.com/iamraga/Rock-Paper-Scissors-Lizard-Spock" target="_blank" style={{fontSize: '15px', color: '#000'}}>Check out the source code here</a>
        </div>
    )
}
