import { React, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import '../styles/style.css'
const Presentation = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <div className='cards'>
                <div className='leftHalf'>
                </div>
                <div className='formContainer'>
                    <div style={{ display: 'flex' }}>

                        <div className='logo'>

                        </div>
                        <h4 className="h4">Flair</h4>
                    </div>
                    <h1 className="h1">Welcome Back !</h1>
                    <p className='subHead'>Please Login to your account</p>
                    <div>
                        <label htmlFor="email"><span>Email Address or User Name</span></label>
                        <div>
                            <input type="email" id="email" className="input" placeholder='Please enter your mail ID' />
                        </div>
                    </div>
                    <div className="password">
                        <label htmlFor="id_password" ><span>Password</span></label>
                        <input className="input" type={visible ? "text" :
                            "password"} name="password" required=""
                            id="id_password" placeholder='**********' />
                        <div className='eyeLogo'>
                            {visible ? <AiOutlineEye size={20} onClick={() => setVisible(!visible)} />
                                :
                                <AiOutlineEyeInvisible size={20} onClick={() => setVisible(!visible)} />
                            }
                        </div>
                    </div>
                    <div className="checkBox">
                        <div>
                            <a href="#forgot" className="forgotPass">Forgot Password?</a>
                        </div>
                    </div>
                    <div>
                        <button className="loginButton">Login</button>
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