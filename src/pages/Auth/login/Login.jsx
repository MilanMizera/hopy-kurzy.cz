import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../../../data/AuthContext";
import "./login.css"
//ikonky
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };

    return (
        <div className="sign-in-section">

            <div className="sign-in-form-wrapper">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <h1 className="sign-in-title">Přihlášení</h1>
                    <input className="sign-in-input" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" value={email}></input>
                    <input className="sign-in-input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Heslo" value={password}></input>
                    <input className="sign-in-button" type="submit" value="Přihlásit se" ></input>
                    <div className="three-side-sign-in-wrapper">
                        <p className="sign-in-icons-text">Přihlásit se pomocí:</p>
                        <div className="sign-in-icons-wrapper">
                            <FcGoogle className="fb-sign-in-icon" ></FcGoogle>
                            <BsFacebook className="go-sign-in-icon"></BsFacebook>
                        </div>
                        <Link to="/registrace" className="register-text">Nemáte vytvořený účet ? Klikněte zde.</Link>
                    </div>
                </form>
            </div>




        </div>
    );
};

export default Signin;