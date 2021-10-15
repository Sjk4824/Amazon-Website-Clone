import React, {useState} from 'react'; 
import "./Login.css"; 
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState(''); 
    const [password, setPasswrod] = useState(''); 

    const signIn = (event) =>{
        event.preventDefault(); 
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png" alt=""></img>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange = {e => setPasswrod(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's conditions of use and sale. Please see our privacy notice, our cookies notice and our interest based ads notice.</p>
                <button className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
