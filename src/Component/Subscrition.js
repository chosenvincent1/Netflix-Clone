import { defaultListboxReducer } from '@mui/base';
import React from 'react';

const Subsciption = ()=> {
    return (
        <div className='subscribe'>
            <p className="subscription-text">
                Ready to watch? Enter your email to create or 
                restart your membership
            </p>
            <div className="subscription-input-btn">
                <input
                    type="text" 
                    placeholder="Enter Email" 
                    className="subscription-input" 
                />
                <button className="subscription-btn">Get Started</button>
            </div> 
        </div>
    )
}

export default Subsciption