import React from 'react';
import './Arrow.css'

// the arrow I use to go back to home, it has the onClick method an a function that he receives all the way through the parent component
const ArrowBack = props => (
    <div>
        <img
            onClick={props.back}
            src='https://lh3.googleusercontent.com/proxy/TQv1quTcDR1zm8ElgwfzRc7k1cMxElrk-0nzxmpDjn89QJ3-msWESNFpzVZkY_u6pslPxIBxXLyA_DyxVU_BrEjtP2FLG8tJurYd5saG'
            className='arrow'
            alt='arrow back'
        />
    </div>
)

export default ArrowBack;
