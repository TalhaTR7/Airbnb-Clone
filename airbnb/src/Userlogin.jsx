import "./css/Userlogin.css";
import widelogo from "./assets/widelogo.png";
import { useEffect, useRef, useState } from "react";

function GiveForm({ isToggle }) {
    return isToggle ? (
        <div className="login-form">
            <form>
                <input type="email" placeholder="EMAIL" />
                <input type="password" placeholder="PASSWORD" />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    ) : (
        <div className="signup-form">
            <form>
                <input type="email" placeholder="EMAIL" />
                <div style={{display:'flex', flexDirection:'row', gap:'10px', justifyContent:'space-evenly'}}>
                    <input type="text" placeholder="FIRST NAME" />
                    <input type="text" placeholder="LAST NAME" />
                </div>
                <input type="password" placeholder="CREATE PASSWORD" />
                <input type="password" placeholder="CONFIRM PASSWORD" />
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    )
}

export default function Userlogin({ window }) {
    const [open, setOpen] = useState(true);
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

    return (
        <>
            {open && (
                <div className="overlay-dark">
                    <div className="login-popup" ref={openRef}>
                        <img src={widelogo} alt="Logo" />
                        <div className="login-tabs">
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
