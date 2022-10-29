import React from  'react';

const Signin = ()=> {
    return (
        <div className='signin-page'>
            <div className="logo-container">
                <img src="./images/netflix.png" alt="netflix" className="netflix-logo" />
            </div>
            <form className='signin-form'>
                <h1>Sign In</h1>
                <input 
                    type='text' placeholder='Email or Phone Number' 
                />
                <input 
                    type='password' placeholder='Password' 
                />
                <button>Sign In</button>
                <div className='remember-login'>
                    <div className='checkbox-container'>
                        <input id='remember' type="checkbox" />
                        <label      htmlFor='remember'>Remember me</label>
                    </div>

                    <p className='help'>Need help?</p>
                </div>
            </form>
            <footer className='signin-footer'>

            </footer>
        </div>
    )
}

export default Signin