import React from 'react';
import '../style/RecoveryPassword.scss';

const RecoveryPassword = () => {
    return(
        <div className="login">

            <div className="form-container">

                <img src="./logos/logo_yard_sale.svg" alt="logo"  className="logo" />

                <h1 className="title">Email has been sent!</h1>

                <p className="subtitle">Please check your indox for instructions on haw to reset the password</p>

                <div className="email-imagen">
                    <img src="./icons/email.svg" alt="" />
                </div>

                <button className="primary-button login-button">Login</button>

                <p className="resend">
                    <span>Didnt receive the email?</span>
                    <a href="/">Resend</a>
                </p>        
            </div>
        </div>
    );
}

export default RecoveryPassword;