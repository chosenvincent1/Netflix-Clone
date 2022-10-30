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
                <div className='signup-link-container'>
                    <p>New to Netflix?</p>
                    <a href='' className='signup-link'>Sign up now</a>
                </div>
                <p className='google-recaptcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='' className='learn-more'>Learn more.</a></p>
            </form>
            <footer className='signin-footer'>

            </footer>
        </div>
    )
}

export default Signin