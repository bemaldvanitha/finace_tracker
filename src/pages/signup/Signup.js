import React, { useState } from "react";

import { useSignup } from "../../hooks/useSignup";

import styles from './Signup.module.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isPending, error, signup } = useSignup();

    const submitHandler = async (e) => {
        e.preventDefault();
        await signup(email, password, name);
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
            { !isPending && <button className={'btn'}>Signup</button>}
            { isPending && <button className={'btn'} disabled>Loading...</button>}
            { error && <p>{ error }</p> }
        </form>
    )
}

export default Signup;