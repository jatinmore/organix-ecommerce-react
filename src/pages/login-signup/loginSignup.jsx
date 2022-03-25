import './login-signup.css'

export default function LoginSignup()
{
    return(
        <><div class="login-container" id="login-container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>

                    <p>or use your email for registration
                    </p> <input type="text" class="input-field outline" placeholder="Enter Name" required />
                    <input type="email" class="input-field outline" placeholder="Enter Email" required />
                    <input type="password" class="input-field outline" placeholder="Password" required />
                    <input type="password" class="input-field outline" placeholder="Retype Password" required />

                    <button class="btn dark">Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <p>new to organix? create account</p>
                    <input type="email" class="input-field outline" placeholder="Enter Email" required />
                    <input type="password" class="input-field outline" placeholder="Enter Password" required />
                    <a href="#">Forgot password?</a>
                    <button class="btn dark">Login</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome to Organix</h1>
                        <p>Please login with your personal information to stay connected with us.</p>
                        <button class="btn dark btn-round" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Greetings!</h1>
                        <p>Enter your Credintials and Shop Today</p>
                        <button class="btn dark btn-round" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        <script src='./login.js' type='text/javascript'></script></>
    )
}