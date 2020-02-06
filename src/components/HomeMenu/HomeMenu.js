import React from 'react';

import './HomeMenu.css';

// Since the home menu doesn't need a state, I can use an arrow function to just return some html
const HomeMenu = props => ( // with props I have acces to what comes from parent component
    <div>
        <h1 onClick={props.action} className='text'>
            <a href='#'>{props.title}</a>
            {/* TODO: solve the warning caused by the href */}
        </h1>
    </div>
)

export default HomeMenu;