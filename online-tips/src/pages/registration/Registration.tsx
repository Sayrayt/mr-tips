import React, { use, useRef, useState } from 'react'
import "./Registration.scss";
import { Link } from "react-router-dom"
import { FaPhone, FaLock } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { PiDeviceTabletSpeakerBold } from "react-icons/pi";

const Registration = () => {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneValid, setPhoneValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [info, setInfo] = useState("")
  let active = useRef(null)

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

  const isEmailValid = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


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
      case "email":
        if (!isEmailValid(e.target.value)) {
          setEmailValid(false)
          e.target.style.border = "2px solid #d00"
        } else {
          setEmailValid(true)
          e.target.style.border = "2px solid #000"
        }
        break
    }
  }

  const showNextPage = () => {
    let willHide = document.querySelector('.required_info')
    let willAppear = document.querySelector(".personal_info")

    willHide?.classList.add("active")
    willAppear?.classList.remove("active")
  }

  const showPrevPage = () => {
    let willHide = document.querySelector(".personal_info")
    let willAppear = document.querySelector('.required_info')

    willHide?.classList.add("active")
    willAppear?.classList.remove("active")
  }


  return (
    <div className='registration-layout'>
      <div className='wrapper'>
        <div className='signup-form-container required_info'>
          <div>
            <h1>Регистрация</h1>
            <div className='input-container'>
              <FaPhone />
              <input value={phone} onChange={(e) => { setPhone(e.target.value) }} onBlur={blurHandler} name="phone" type="text" placeholder='+7 (XXX) XXX-XX-XX' required />
            </div>
            <div className='input-container'>
              <MdOutlineAlternateEmail />
              <input value={email} onChange={(e) => { setEmail(e.target.value) }} onBlur={blurHandler} name='email' type="text" placeholder='Адрес электронной почты' required />
            </div>
            <div className='input-container'>
              <FaLock />
              <input value={password} onChange={(e) => { setPassword(e.target.value) }} onBlur={blurHandler} name='password' type="password" placeholder='Пароль' required />
            </div>

            <button onClick={showNextPage}>Далее</button>

            <div className='register-link'>
              <p>Уже есть аккаунт? <Link to='/' className='link'>Авторизоваться</Link></p>
            </div>
          </div>
        </div>
        <div className='signup-form-container personal_info active'>
          <form action="" autoComplete='false'>
            <p className='back' onClick={showPrevPage}><IoIosArrowBack /></p>
            <h1>Расскажи о себе</h1>
            <div className='input-container'>
              <IoPersonSharp />
              <input value={name} onChange={(e) => { setName(e.target.value) }} name='name' type="text" placeholder='Имя' required />
            </div>
            <div className='input-container'>
              <MdOutlineDriveFileRenameOutline />
              <input value={surname} onChange={(e) => { setSurname(e.target.value) }} name='surname' type="text" placeholder='Фамилия' required />
            </div>
            <div className='input-container'>
              <PiDeviceTabletSpeakerBold />
              <input value={info} onChange={(e) => { setInfo(e.target.value) }} name='info' type="text" placeholder='Дополнительная информация' required />
            </div>
            <Link to="/profile" className="button-link">
              <button type='button'>Зарегистрироваться</button>
            </Link>

            <div className='register-link'>
              <p></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
