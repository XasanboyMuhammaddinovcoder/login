import { NavLink, useNavigate } from "react-router-dom"
import { useState, useRef, useContext } from "react"
import googleIcon from '../assets/google.png'
import { useDispatch } from "react-redux";
import {register} from '../redux/usersSlice'
// import { useSelector } from "react-redux";
import { ThemeContext } from "../App";
function Register() {
    const dataTheme = useContext(ThemeContext)

    // const [theme , setTheme] = useState('light')

    const [bkl, setBkl] = useState(false);

    const nameRef = useRef(null);
    const emailREf = useRef(null);
    const passRef = useRef(null);

    const navigate = useNavigate()

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (localStorage.getItem('theme')) {
    //         setTheme(localStorage.getItem('theme'))
    //     }
    // }, [])

    function handleClick() {
        setBkl(!bkl)
    }
    

    const validate = () => {
        if (!nameRef.current.value) {
            nameRef.current.focus();
            alert('ismingizni kiriting');
            return false;
        }
        if (!emailREf.current.value) {
            emailREf.current.focus();
            alert('Email kiriting');
            return false;
        }
        if (!passRef.current.value) {
            passRef.current.focus();
            alert('Parolingizni kiriting');
            return false;
        }
        return true;
    }

    function handleE(e) {
        e.preventDefault();
        let isValid = validate();
        if (isValid) {
            let user = {
                name: nameRef.current.value,
                email: emailREf.current.value,
                pass: passRef.current.value,
            };
            dispatch(register(user));
            nameRef.current.value = null;
            emailREf.current.value = null;
            passRef.current.value = null;
            navigate('/login')
        }
    }

    function handleChange (e) {
        dataTheme.setTheme(e.target.value)
    }



    return (
        <>
            <div className="w-[498.46px] mx-auto">
                <form className={dataTheme.theme == 'light' ? "flex mt-[50px] flex-col py-[35px] gap-[2px] px-[30px] shadow-2xl rounded-lg": "flex mt-[50px] flex-col py-[35px] gap-[2px] px-[30px] shadow-2xl rounded-lg bg-[#181818] text-white"}>
                    <h1 className={dataTheme.theme == 'light' ? "text-[27.9px] text-center mb-12 ": "text-[27.9px] text-center mb-12 text-white"}>Let’s go!</h1>
                    <select className="w-[50px] relative top-[-50px] bg-transparent cursor-pointer" value={dataTheme.theme} onChange={handleChange}>
                        <option value="light">Light</option>
                        <option value="Dark">Dark</option>
                    </select>
                    <label className={dataTheme.theme == 'light' ? "text-[15.94px] cursor-pointer": "text-[15.94px] cursor-pointer text-white"} htmlFor="name">Full Name</label>
                    <input ref={nameRef} id="name" className="bg-transparent	 mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border	border-[#D1D1D1]" type="text" placeholder="John Doe" />
                    <i className="text-[#D1D1D1] fa-regular fa-user text-[20px] relative top-[-38px] left-[9px]"></i>
                    <label className="text-[15.94px] cursor-pointer" htmlFor="email">Email</label>
                    <input ref={emailREf} id="email" className="bg-transparent	 mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border	border-[#D1D1D1]" type="email" placeholder="example@site.com" />
                    <i className="text-[#D1D1D1] fa-regular fa-envelope text-[20px] relative top-[-38px] left-[9px]"></i>
                    <label className="text-[15.94px] cursor-pointer" htmlFor="pass">Choose Password</label>
                    <input ref={passRef} id="pass" className={dataTheme.theme == 'light' ? "bg-transparent mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border text-[#D1D1D1]	border-[#D1D1D1]": "bg-transparent mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border border-[#D1D1D1] text-white"} type={bkl ? 'text' : 'password'} placeholder="Minimum 8 characters" />
                    <i className="text-[#D1D1D1] fa-solid fa-lock text-[20px] relative top-[-38px] left-[9px]"></i>
                    <span onClick={handleClick} className=" relative top-[-60px] left-[400px] cursor-pointer text-[18px] text-[#D1D1D1]">{bkl ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</span>
                    <button onClick={handleE} className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[59.78px] rounded-lg text-[15.94px]">Sign Up</button>
                    <button className="text-black  h-[59.78px] rounded-lg text-[15.94px] border	border-[#D1D1D1] mt-10 flex items-center justify-center gap-8"><img src={googleIcon} alt="google icon" />Sign Up with Google</button>
                    <h4 className="text-[15.94px] text-center mt-6">or login with SSO</h4>
                    <NavLink to='/login' className='underline mt-12'>Login</NavLink>
                </form>
            </div>
        </>
    )
}

export default Register
