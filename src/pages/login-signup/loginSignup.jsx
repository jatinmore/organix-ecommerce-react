import './login-signup.css'
import { useState } from 'react';
export default function LoginSignup()
{
    // const Header = (props) => {
    //     const [isContainerActive, setIsContainerActive] =useState(false);
    //      const signUpButton = () => {
    //         setIsContainerActive(false);
    //      };  
    //      const signInButton = () => {
    //         setIsContainerActive(true);
    //      };
    //     }
    // const [isSignUp, setSignUp] = useState(true);
    // className={isSignUp ? "right-panel-active" : ""}
    // id={isSignUp ? "right-panel-active" : ""}
    return(
        <><div  className="login-container"
            >
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>

                    <p>or use your email for registration
                    </p> <input type="text" className="input-field outline" placeholder="Enter Name"  />
                    <input type="email" className="input-field outline" placeholder="Enter Email"  />
                    <input type="password" className="input-field outline" placeholder="Password"  />
                    <input type="password" className="input-field outline" placeholder="Retype Password" />

                    <button className="btn dark">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <p>new to organix? create account</p>
                    <input type="email" className="input-field outline" placeholder="Enter Email" />
                    <input type="password" className="input-field outline" placeholder="Enter Password" />
                    <a href="#">Forgot password?</a>
                    <button className="btn dark">Login</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome to Organix</h1>
                        <p>Please login with your personal information to stay connected with us.</p>
                        <button className="btn dark btn-round"  id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Greetings!</h1>
                        <p>Enter your Credintials and Shop Today</p>
                        <button className="btn dark btn-round"   id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
    }