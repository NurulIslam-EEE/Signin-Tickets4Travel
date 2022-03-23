import React from 'react';
import './Login.css';
import vector from '../../img/Group 312.png';
import logo from '../../img/blue-logo 1.png';
import fb from '../../img/fb.png';
import google from '../../img/google.png';


const Login = () => {
    return (
        <div className='row login'>
            <div className="col-md-6 login-img">
                <img src={vector} alt="" />
            </div>
            <div className="">
                <div className="login-section ">
                    <div>


                        <div className='text-center'>
                            <img src={logo} alt="" />
                        </div>
                        <h3 className='mx-auto'>Explore The Best Tours... Hurry up!!</h3>
                        <input placeholder='Email Address' type="text" /> <br />
                        <input placeholder='Password' type="password" name="" id="" /> <br />
                        <button type="submit">Login</button>
                        <div>
                            <span className='line'>A</span>
                            <span>or</span>
                            <span className='line'>B</span>
                        </div>

                        <div className='fb-icon'>
                            <img src={fb} alt="" />
                            <img src={google} alt="" />
                        </div>

                        <p>Don't have an account? <span style={{ color: 'skyBlue' }}>Sign Up</span> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;