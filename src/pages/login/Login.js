import React,{ useState } from "react";

import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email,password);
    }

    return(
        <form className={styles['login-form']} onSubmit={submitHandler}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input type={'email'}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>password:</span>
                <input type={'password'}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button className={'btn'}>Login</button>
        </form>
    )
}

export default Login;