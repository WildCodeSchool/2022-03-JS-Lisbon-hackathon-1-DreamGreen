import React from 'react';
import './BurgerMenu.css';
import Sidebar from './Sidebar';


function BurgerMenu() {
    return (
        <div className="App" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">

            </div>
        </div>
    );
}

export default BurgerMenu;