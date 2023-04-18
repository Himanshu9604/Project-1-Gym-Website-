import React from 'react';
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import Styles from './Login.module.css'

function Login() {
    const [useremail, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do login logic here
    };

    return (
        <div className={Styles.Container}>

            <h1 style={{ textAlign: "center", TxteColor:"white" }} >Gym Login</h1>

            <form onSubmit={handleSubmit}>
                         
            
                <div className={Styles.userinput}>

                    <label >
                        <h2>Username:</h2>
                        <input type="text" value={useremail} onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label>
                        <h2>Password:</h2>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>

                 <br/><br/>
                
            </form><br/>
            <button type="submit" >Log In</button><br/>
            <NavLink to='/register' className={Styles.navlink}>Register ? </NavLink>
        </div>
    );
}

export default Login;
