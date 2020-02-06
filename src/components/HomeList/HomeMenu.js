import React from 'react';
import './HomeMenu.css';

// Since the home menu doesn't need a state, I can use an arrow function to just return some html
const HomeMenu = props => ( // with props I have acces to what comes from parent component
    <div>
        <h1 className='text'>
            <a href='#'>{props.title}</a>
        </h1>
    </div>
)

export default HomeMenu;