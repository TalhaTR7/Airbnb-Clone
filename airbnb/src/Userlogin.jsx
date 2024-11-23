import "./css/Userlogin.css";
import widelogo from "./assets/widelogo.png";
import widelogo_dark from "./assets/dark/widelogo-dark.png";
import { useEffect, useRef, useState } from "react";
import { useTheme } from './Theme';



export default function Userlogin({ window }) {
    const [open, setOpen] = useState(true);
    const { darkmode } = useTheme();
    const [toggle, setToggle] = useState(() => {
        if (window === 1) return true;
        if (window === 2) return false;
    });
    const openRef = useRef(null);

    const handleClickOutside = (event) => {
        if (openRef.current && !openRef.current.contains(event.target)) 
            setOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);



    function GiveForm({ isToggle }) {
        return isToggle ? (
            <div className={`login-form ${darkmode ? "dark" : ""}`}>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <div>
                        <button type="submit">LOGIN</button>
                        <a onClick={() => setToggle(false)} style={{cursor:'pointer'}}>Create account</a>
                    </div>
                </form>
            </div>
        ) : (
            <div className={`signup-form ${darkmode ? "dark" : ""}`}>
                <form>
                    <input type="email" placeholder="email" />
                    <div style={{display:'flex', flexDirection:'row', gap:'10px', justifyContent:'space-evenly'}}>
                        <input type="text" placeholder="first name" />
                        <input type="text" placeholder="last name" />
                    </div>
                    <input type="password" placeholder="create password" />
                    <input type="password" placeholder="confirm password" />
                    <div>
                        <button type="submit">SIGN UP</button>
                        <a onClick={() => setToggle(true)} style={{cursor:'pointer'}}>Already have an account</a>
                    </div>
                </form>
            </div>
        )
    }



    return (
        <>
            {open && (
                <div className="overlay-dark">
                    <div className={`login-popup ${darkmode ? "dark" : ""}`} ref={openRef}>
                        <img src={darkmode ? widelogo_dark : widelogo} alt="Logo" />
                        <div className={`login-tabs ${darkmode ? "dark" : ""}`}>
                            <button className={toggle ? "active" : ""} onClick={() => setToggle(true)}>LOGIN</button>
                            <button className={!toggle ? "active" : ""} onClick={() => setToggle(false)}>SIGN UP</button>
                        </div>
                        <GiveForm isToggle={toggle} />
                    </div>
                </div>
            )}
        </>
    );
}
