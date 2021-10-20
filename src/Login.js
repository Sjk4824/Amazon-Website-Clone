import React, {useState} from 'react'; 
import "./Login.css"; 
import { Link, useHistory} from 'react-router-dom';
import {auth} from "./firebase"; 

function Login() {
    const history = useHistory(); 
    const [email, setEmail] = useState(''); 
    const [password, setPasswrod] = useState(''); 

    const signIn = (event) =>{
        event.preventDefault(); 

        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("/"); 
        })
        .catch(error => alert(error.message))
    }
    const register = (event) =>{
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                //it succesfully created a new user
                console.log(auth); 
                if(auth){
                    //if they are succesfully logged in, we will redirect them to home
                    history.push("/");
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link style = {{textDecoration : "none"}} to="/">
                {/* <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png" alt=""></img> */}
                <h1 className="login__logo">flora</h1>
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
                <p>By signing-in you agree to flora's conditions of use and sale. Please see our privacy notice, our cookies notice and our interest based ads notice.</p>
                <button onClick={register} className="login__registerButton">Create your flora Account</button>
            </div>
        </div>
    )
}

export default Login
