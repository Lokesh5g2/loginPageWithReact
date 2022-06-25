import React from 'react'
import '../styles/style.css'
const Presentation = () => {
    return (
        <div>
            <div className='cards'>
                <div className='leftHalf'>
                </div>
                <div className='formContainer'>
                    <div style={{ display: 'flex' }}>

                        <div className='logo'>

                        </div>
                        <h4 style={{
                            fontSize: "20px",
                            fontWeight: "500",
                            fontStyle: "normal",
                            letterSpacing: "0px",
                            textAlign: "left",
                            marginBottom: '50px'
                        }}>Flair</h4>
                    </div>
                    <h1 style={{
                        opacity: "1",
                        color: "rgba(11, 14, 31, 1)",
                        fontFamily: "Inter-SemiBold",
                        fontSize: "50px",
                        fontWeight: "600",
                        fontStyle: "normal",
                        letterSpacing: "0px",
                        textAlign: "left",
                        lineHeight: "56px",
                        width: "60%"
                    }}>Welcome Back !</h1>
                    <p style={{
                        opacity: "0.5",
                        color: "rgba(11, 14, 31, 1)",
                        fontFamily: "Inter-Regular",
                        fontSize: "14px",
                        fontWeight: "400",
                        fontStyle: "normal",
                        letterSpacing: "0px",
                        textAlign: "left",
                        marginBottom: '50px'
                    }}>Please Login to your account</p>
                    <div>
                        <label for="email"><span>Email Address or User Name</span></label>
                        <div>
                            <input type="email" id="email" class="input" placeholder='Please enter your mail ID' />
                        </div>
                    </div>
                    <div class="password">
                        <label for="id_password" ><span>Password</span></label>
                        <div >
                            <input class="input" type="password" name="password" autocomplete="current-password" required=""
                                id="id_password" placeholder='**********' />
                        </div>
                    </div>
                    <div class="checkBox">
                        <div>
                            <a href="#forgot" class="forgotPass">Forgot Password?</a>
                        </div>
                    </div>
                    <div>
                        <button class="loginButton">Login</button>
                    </div>
                </div>
            </div >
            <footer>
                <p>By login you agree to our <a href='#term'>terms</a> and that you have read our data <a href='#policy'>policy</a></p>
                <p>Copyright © flairtechno.com 2022.</p>
            </footer>
        </div>
    )
}

export default Presentation