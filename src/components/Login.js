import { useState } from 'react';
import LoginService from '../services/LoginService';
import '../styles/Login.css'
const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const changeUsername = (event) => {
        setUsername(event.target.value);
    }
    const changePassword = (event) => {
        setPassword(event.target.value);
    }
    const Submit = () => {
        LoginService(username, password);
        console.log(username, password);
    }
    return (
        <>
            <div className='login-bg'>
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="user-box">
                            <input type="text" name="" required="" onChange={changeUsername} />
                            <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="" required="" onChange={changePassword} />
                            <label>Password</label>
                        </div>
                        <a onClick={Submit}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;