import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './Login.scss'
import { FaPhone, FaLock } from "react-icons/fa";


const Login = () => {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [phoneValid, setPhoneValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

    const isPhoneValid = (phone: string) => {
        let number = ""
        for (const char of phone) {
            if (/^[0-9](.[0-9][0-9]?)?$/.test(char)) {
                number += char
            }
        }
        console.log(number)
        return /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g.test(number) && number.length === 11
    }

    const isPasswordValid = (password: string) => {
        return /^(?=.{9,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/.test(password)
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case "phone":
                if (!isPhoneValid(e.target.value)) {
                    setPhoneValid(false)
                    e.target.style.border = "2px solid #d00"
                } else {
                    setPhoneValid(true)
                    e.target.style.border = "2px solid #000"
                }
                break
            case "password":
                if (!isPasswordValid(e.target.value)) {
                    setPasswordValid(false)
                    e.target.style.border = "2px solid #d00"
                } else {
                    setPasswordValid(true)
                    e.target.style.border = "2px solid #000"
                }
                break
        }
    }

    return (
        <div className='login-layout'>
            <div className='form-container'>
                <form action="">
                    <h1>Авторизация</h1>
                    <div className='input-container'>
                        <FaPhone />
                        <input value={phone} onChange={(e) => { setPhone(e.target.value) }} onBlur={blurHandler} name="phone" type="text" placeholder='+7 (XXX) XXX-XX-XX' required />
                    </div>
                    <div className='input-container'>
                        <FaLock />
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} onBlur={blurHandler} name='password' type="password" placeholder='Пароль' required />
                    </div>

                    <div className='forgot'>
                        <a href='#'>Забыли пароль?</a>
                    </div>

                    <button disabled={!(passwordValid && phoneValid)} type='submit'>Авторизоваться</button>

                    <div className='register-link'>
                        <p>У вас нет аккаунта? <Link to='/registration' className='link'>Зарегистриоваться</Link></p>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Login


