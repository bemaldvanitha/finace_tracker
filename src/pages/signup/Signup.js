import React, { useState } from "react";

import styles from './Signup.module.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email, name, password)
    }

    return(
        <form onSubmit={submitHandler} className={styles['signup-form']}>
            <h2>Signup</h2>
            <label>
                <span>name:</span>
                <input type={'text'}
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
            </label>
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
            <button className={'btn'}>Signup</button>
        </form>
    )
}

export default Signup;