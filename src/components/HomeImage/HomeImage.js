import React from 'react';
import './HomeImage.css';

// Since the home menu doesn't need a state, I can use an arrow function to just return some html
const HomeImage = () => (
    <div className='octocat-container'>
        <img className='octocat' alt='Github octocat' src='https://cdn.worldvectorlogo.com/logos/github-icon.svg'/>
    </div>
)

export default HomeImage;