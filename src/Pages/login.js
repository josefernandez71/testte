import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.scss';

const Login = () => {
    const [user, setuser] = useState("");
    const [pass, setpass] = useState("");
    const [style, setStyle] = useState("sideL");


    const Navigate = useNavigate();
    const changePageMenu = useCallback(() => Navigate('/Layout', { replace: true }), [Navigate]);
    const changePageState = useCallback(() => Navigate('/states', { replace: true }), [Navigate]);
    const Handlesesion = () => {
        if (user === "jose" && pass === "789") {
            setStyle("sideLEX");

            setTimeout(changePageState, 1500);
        } else if (user === "juan" && pass === "123") {
            setStyle("sideLEX");

            setTimeout(changePageMenu, 1500);
        } else {
            alert("Usuario y/o Contraseña Incorrectas");
        }


    }

    const handleForgot = () => {
        document.getElementById("contForm").style.display = "none";
        document.getElementById("formulario2").style.display = "flex";
        setStyle("sideLA");
    }

    const handleLoginS = () => {
        document.getElementById("contForm").style.display = "flex";
        document.getElementById("formulario2").style.display = "none";
        setStyle("sideL");
    }

    return (
        <>
            <div id="Cont">
                <div id="Container">
                    <div className='formulario2' id="formulario2">
                        <form className='form2'>
                            <label className='backLogin' onClick={handleLoginS} />
                            <label className='title'>Recovery Password</label>
                            <label className='textTitle'>Enter  your Email Adress</label>
                            <input className='Email' placeholder='Email'></input>
                            <button className='nextStep' />
                        </form>
                    </div>
                    <div id={style} >
                        <p></p>
                    </div>
                    <div className="contForm" id="contForm">
                        <form className="Formulario">
                            <label>Log In</label>
                            <input placeholder="User" id="user" onChange={(e) => setuser(e.target.value)}></input>
                            <input type="password" id="pass" placeholder="Pass" onChange={(e) => setpass(e.target.value)}></input>
                            <label id="forgePass" onClick={handleForgot}>Forgot your Password?</label>
                            <label onClick={Handlesesion} className="buttonEx">Login</label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;