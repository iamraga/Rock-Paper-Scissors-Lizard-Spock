import React from 'react';
import '../style.css';

export default function index() {
    return (
        <div class="main-container">
            <div class="header">
                <div class="logo">RPSLS</div>
                <div class="header-tabs-cont">
                    <a href="/" class="header-link">
                        <div class="link-text">Rules</div>
                    </a>
                    <a href="/" class="header-link">
                        <div class="link-text">Leaderboard</div>
                    </a>
                    <a href="/" class="header-link">
                        <div class="link-text">Contact</div>
                    </a>
                </div>
            </div>
            <div class="content"></div>
        </div>
    )
}
