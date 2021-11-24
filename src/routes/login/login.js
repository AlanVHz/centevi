import React from 'react'
import "./styles.scss";

export const Login = (props) => {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col">
                    <div className="half-side-container flex-column" id="left-side">
                        <h1 className="py-3">Header</h1>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="username-input" placeholder="Usuario" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password-input" placeholder="Contraseña" />
                        </div>
                        <button type="button" class="btn" id="login-btn">Ingresar</button>
                    </div>
                </div>
                <div className="col">
                    <div className="half-side-container" id="right-side">
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
