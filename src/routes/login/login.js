import React from 'react'
import "./styles.scss";

export const Login = (props) => {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col">
                    <div className="half-side-container d-flex flex-column" id="left-side">
                        <div id="form-container" className="d-flex flex-column justify-content-center">
                            <h1 className="py-5 text-center">Ingresa a <a id="name-link" href="">Centro de Optica</a></h1>
                            <div className="mb-4 d-flex align-items-center">
                                <img id="username-icon" src="/img/user.png" />
                                <input type="email" className="form-control" id="username-input" placeholder="Usuario" />
                            </div>
                            <div className="mb-4 d-flex align-items-center">
                                <img id="password-icon" src="/img/password.png" />
                                <input type="password" className="form-control" id="password-input" placeholder="Contraseña" />
                            </div>
                            <div className="mb-4 p-2 d-flex align-items-center justify-content-between">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="show-password-switch" />
                                <label class="form-check-label" for="flexSwitchCheckDefault">Mostrar contraseña</label>
                            </div>
                                <button type="button" class="btn" id="login-btn">Ingresar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
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
