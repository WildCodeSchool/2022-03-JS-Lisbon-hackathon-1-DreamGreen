import React from 'react';
import './BurgerMenu.css';
import Sidebar from './Sidebar';
import Logo from '../Images/Bananas.png';

function BurgerMenu() {
    return (
        <div className='logo'>
            <div className="App" id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div id="page-wrap">
                </div>
            </div>
            <div className='logo-img'>
                <img src={Logo}></img>
            </div>
        </div>
    );
}

export default BurgerMenu;