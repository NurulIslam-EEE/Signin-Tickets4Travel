import React from 'react';
import './Login.css';
import vector from '../../img/Group 312.png';
import logo from '../../img/blue-logo 1.png';
import fb from '../../img/fb.png';
import google from '../../img/google.png';


const Login = () => {
    return (
        <div className='row login'>
            <div className="col-md-6 login-img text-center">
                <img src={vector} alt="" />
            </div>
            <div className=" login-section-container">
                <div className="login-section ">
                    <div className='text-center' style={{ width: '492px' }}>


                        <div className='text-center'>
                            <img src={logo} alt="" />
                        </div>
                        <form >
                            <h3 className='mx-auto'>Explore The Best Tours... Hurry up!!</h3>
                            <input placeholder='Email Address' type="text" /> <br />
                            <input placeholder='Password' type="password" name="" id="" /> <br />
                            <p style={{ color: '#FF0000', textAlign: 'right', marginTop: '10px ', paddingRight: '55px' }}>Forgot Password?</p>
                            <button className='mx-auto' type="submit">Login</button>
                        </form>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '58px' }}>
                            <div className='line'></div>

                            <span>or</span>
                            <div className='line'></div>
                        </div>

                        <div className='fb-icon'>
                            <div style={{ marginRight: '80px' }}>
                                <img src={fb} alt="" />
                            </div>
                            <div>
                                <img src={google} alt="" />
                            </div>


                        </div>

                        <p>Don't have an account? <span style={{ color: '#42C2FF' }}>Sign Up</span> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;