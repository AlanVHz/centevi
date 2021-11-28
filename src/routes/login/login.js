import React from 'react'
import "./styles.scss";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    let navigate = useNavigate();

    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col p-0">
                    <div className="half-side-container d-flex flex-column" id="left-side">
                        <div id="form-container" className="d-flex flex-column justify-content-center">
                            <h1 className="py-5 text-center">Ingresa a <a id="name-link" href="www.google.com">Centro de Optica</a></h1>
                            <div className="mb-4 d-flex align-items-center">
                                <img id="username-icon" src="/img/user.png" alt="" />
                                <input type="email" className="form-control" id="username-input" placeholder="Usuario" />
                            </div>
                            <div className="mb-4 d-flex align-items-center">
                                <img id="password-icon" src="/img/password.png" alt="" />
                                <input type="password" className="form-control" id="password-input" placeholder="Contraseña" />
                            </div>
                            <div className="mb-4 p-2 d-flex align-items-center justify-content-between">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="show-password-switch" />
                                    <label className="form-check-label">Mostrar contraseña</label>
                                </div>
                                <button type="button" className="btn" onClick={() => navigate('/dashboard')} id="login-btn">Ingresar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col p-0">
                    <div className="half-side-container" id="right-side">
                        <div id="logo-container" className="d-flex flex-column justify-content-center">
                            <h1 className="d-flex justify-content-center">L O G O</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
