
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
            <Link to={"/"} className="widelogo">
                <img src={!darkmode ? widelogo : widelogo_dark} style={{width:"150px"}} />
            </Link>
            <div className="form-container-left">
                <h1>Welcome back!</h1>
                <p>Don't have an account? <Link to={"/signup"}>Create one</Link></p>
                <form className="login-form">
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <div>
                        <div>
                            <input type="checkbox" style={{cursor:"pointer"}} />
                            <label>Remember me</label>
                        </div>
                        <a>Forgot password?</a>
                    </div>
                    <button style={{marginTop:"15px"}}>Login</button>
                </form>
            </div>
            <img src={!darkmode ? background : background_dark} className="form-container-right" />
        </div>
    )
}
