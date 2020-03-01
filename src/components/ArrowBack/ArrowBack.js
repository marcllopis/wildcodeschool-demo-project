import React from 'react';
import './Arrow.css'

// the arrow I use to go back to home, it has the onClick method an a function that he receives all the way through the parent component
const ArrowBack = props => (
    <div>
        <img
            onClick={props.back}
            src='https://f0.pngfuel.com/png/531/265/red-arrow-direction-illustration-png-clip-art.png'
            className='arrow'
            alt='arrow back'
        />
    </div>
)

export default ArrowBack;
