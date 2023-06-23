import React from 'react';
import '../App.css';
import {RewardProgramButton} from './RewardProgramButton'
import './HeroSection.css';




function HeroSection() {
return (
    <div className = 'hero-container'>
    <video src="/ReactVideos/pexels-cottonbro-studio-6491686-2160x4096-25fps.mp4" autoPlay loop muted></video>
    <h1> ADVENTURE AWAITS</h1>
    <p>What are you waiting for?</p>
    <div className="hero-btns">
        <RewardProgramButton className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>GET STARTED</RewardProgramButton>

        <RewardProgramButton className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>WATCH TRAILER </RewardProgramButton>
    </div>
    </div>

    /*Maybe another autoplay video under the top one or change to a model */
)
}

export default HeroSection
