import React from 'react';
import './AboutUs.css'
import LogoOilentAbout from '../Components/Images/Folhas.png'

function AboutUs() {
    return (
        <div className='about-container' id='about'>
            <div className="about-title">
                <h1>About OilentGreen</h1>
            </div>
            <div className='logoOilent'>
                <img src={LogoOilentAbout} alt='' />
            </div>
            <div className="about-description">
                <p>We are DreamGreen, a company that strives to make our world greener everyday!
                    Our newest initiative, OilentGreen, aims to give your used cooking oil a second life
                    by recyling it and reusing it in the production of biodiesel. OilentGreen will allow
                    you to safely dispose of your used cooking oil while preserving the environment. At
                    DreamGreen we are fully committed to improving people's lives and protecting our planet,
                    if you share those convictions as well, join us and help us protect the environment!
                </p>
            </div>
        </div>



    );
}
export default AboutUs;