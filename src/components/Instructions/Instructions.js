import React from 'react';
import ArrowBack from '../ArrowBack/ArrowBack';


const Instructions = props => (
    <div>
        <h1>Instructions for the game</h1>
        <ArrowBack back={props.back}/>
    </div>
)

export default Instructions;