import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { auth } from '../../../config/fbconfig'


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        });
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (
        <div className="mt-8">
            <h1 className="textSignIn">Sign In</h1>
            <div className="borderForlogin">
                {error !== null && <div className="error-alert">{error}</div>}
                <form className="">
                    <label htmlFor="userEmail" className="block">
                        Email:
          </label>
                    <input
                        type="email"
                        className="input-bar-email"
                        name="userEmail"
                        value={email}
                        placeholder="Type your own email"
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block">
                        Password:
          </label>
                    <input
                        type="password"
                        className="input-bar-password"
                        name="userPassword"
                        value={password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    
                    <button className="btn-SignIn" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                        Sign in
          </button>
                </form>
                <p className="text-center">or</p>
                <button
                    className="btnGoogle"
                    onClick={() => {
                        signInWithGoogle();
                    }}
                >
                    Sign in with Google
        </button>
                <p className="text-center">
                    Don't have an account?{" "}
                    <Link to="/signUp" className="sign-up-text">
                        Sign up here
          </Link>{" "}
                    <br />{" "}
                    <Link to="/resetpw" className="forgot-pwText">
                        Forgot Password?
          </Link>
                </p>
            </div>
        </div>
    );
};
                
export default SignIn;