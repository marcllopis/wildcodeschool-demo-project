import React from 'react';

import HomeMenu from '../HomeMenu/HomeMenu';
import HomeImage from '../HomeImage/HomeImage';

import './Home.css';


let myComponents = ['Play', 'Instructions', 'About', 'Contact']; // Array of components to use later in a loop

const Home = props => {

    return (

        // It shows an image on the left and a menu on the right, those left and right things are components
        // With different divs I can control the position and styling of each section
        <div className='main-home'>
            MODE: {process.env.NODE_ENV}
            {process.env.REACT_APP_TEST}
            <HomeImage />
            <div className='home-menu'>
                <div className='menu-container'>
                    {/* Loop over the array to create one component per item I have */}
                    {myComponents.map((component, i) =>
                        <HomeMenu
                            key={i} // use the index to generate a key. TODO: generate random key
                            title={component}
                            action={props.action}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;
