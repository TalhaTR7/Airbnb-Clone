
import { Link } from 'react-router-dom'
import { useTheme } from "./Theme.jsx"
import "./css/Form.css"
import widelogo from "./assets/widelogo.png"
import widelogo_dark from "./assets/dark/widelogo-dark.png"
import background from "./assets/background.png"
import background_dark from "./assets/dark/background-dark.png"

export default function Signup() {
    const { darkmode } = useTheme();

    return (
        <div className={`form-container ${darkmode ? "dark" : ""}`}>
            <Link to={'/'} className="widelogo">
            <img src={!darkmode ? widelogo : widelogo_dark} style={{width:"150px"}} />
            </Link>
            <div className="form-container-left">
                <h1>Welcome!</h1>
                <p>Already have an account? <Link to={"/login"}>Sign in</Link></p>
                <form className="signup-form">
                    <div className="fullname">
                        <input type="text"  placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                    </div>
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Create password" />
                    <input type="password" placeholder="Confirm password" />
                    <p style={{textAlign:"left", color:"#999"}}>By clicking “Create account” you agree to our <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
                    <button>Create account</button>
                </form>
            </div>
            <img src={!darkmode ? background : background_dark} className="form-container-right" />
        </div>
    )
}
