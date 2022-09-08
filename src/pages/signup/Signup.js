import styles from './Signup.module.css'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup';
import React, { Component }  from 'react';


export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나입니다. 
		// 때문에 다른 변수명을 사용하지 말아주세요. ( 참고 : https://firebase.google.com/docs/reference/js/auth.md#updateprofile)
    const [displayName, setDisplayName] = useState('');
    const { error, isPending, signup } = useSignup();


    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        } else if (event.target.type === "text") {
            setDisplayName(event.target.value);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // 훅에서 받아온 signup 함수를 실행합니다.
        signup(email, password, displayName);
    }

    return (
        <form className={styles.signup_form} onSubmit={handleSubmit} >
            <fieldset>
                <legend>회원가입</legend>

                <label htmlFor="myEmail">email : </label>
                <input type="email" id="myEmail" required onChange={handleData} value={email} />

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id="myPassWord" required onChange={handleData} value={password} />

                <label htmlFor="myNickName">닉네임 : </label>
                <input type="text" id="myNickName" required onChange={handleData} value={displayName} />

                <button type="submit" className="btn">회원가입</button>
            </fieldset>
        </form>
    )
}