import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add } from '../redux/tokenSlice'
function Login() {
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const [bkl , setBkl] = useState(false);

    const user = useSelector(state => state.user.value)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    function handleClick () {
        setBkl(!bkl)
    }

    function handleBut (e) {
        e.preventDefault();
        let users = user.find((el) => {
            return el.email == emailRef.current.value && el.pass == passRef.current.value
        })
        if (users) {
            dispatch(add(users.email));
            navigate('/')
        } else {
            alert('Parol yoki Email NoTogri')
        }
    } 
    return (

        <>
            <div className="w-[498.46px] mx-auto">
                <form className="flex mt-[50px] flex-col py-[35px] gap-[2px] px-[30px] shadow-2xl rounded-lg">
                    <h1 className="text-[27.9px] text-center mb-12">Welcome back!</h1>
                    <label className="text-[15.94px] cursor-pointer" htmlFor="email">Email</label>
                    <input ref={emailRef} id="email" className=" mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border	border-[#D1D1D1]" type="email" placeholder="Enter your email" />
                    <i className="text-[#D1D1D1] fa-regular fa-envelope text-[20px] relative top-[-38px] left-[9px]"></i>
                    <label className="text-[15.94px] cursor-pointer" htmlFor="pass">Password</label>
                    <input ref={passRef} id="pass" className=" mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border	border-[#D1D1D1]" type={bkl ? 'text' : 'password'} placeholder="Minimum 8 characters"/>
                    <i className="text-[#D1D1D1] fa-solid fa-lock text-[20px] relative top-[-38px] left-[9px]"></i>
                    <span onClick={handleClick} className=" relative top-[-60px] left-[400px] cursor-pointer text-[18px] text-[#D1D1D1]">{bkl ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</span>
                    <button onClick={handleBut} className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[59.78px] rounded-lg text-[15.94px]">Sign Up</button>
                    <h4 className="text-[15.94px] text-center mt-6">or login with SSO</h4>
                    <NavLink to='/register' className='underline mt-12'>Register</NavLink>
                </form>
            </div>
        </>
    )
}

export default Login
