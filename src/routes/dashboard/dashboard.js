import React from 'react'
import { DoughnutChart } from '../../components/doughnutChart/doughnutChart'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import "./styles.scss"

import { FiUser, FiSmartphone, FiActivity, FiCode } from "react-icons/fi";


const CHART_DATA = [
    { label: 'Android', color: '#FFCF56', value: Math.floor(Math.random() * 10000) },
    { label: 'iOS', color: '#36A3EB', value: Math.floor(Math.random() * 10000) },
    { label: 'PC', color: '#FF6385', value: Math.floor(Math.random() * 10000) },
]

export const Dashboard = (props) => {
    return (
        <>
            <Navbar />
            <div className="d-flex">
                <Sidebar />

                <div className="container">
                    <div className="row card-style" id="dashboard-row">
                        <div className="col-12">

                            <h3 className="py-3 border-botom d-flex align-items-center">Estadísticas</h3>

                            <div id="dashboard-data" className="d-flex justify-content-between py-5 border-botom">
                                <div className="d-flex align-items-center">
                                    <FiUser />
                                    <div className="d-flex flex-column">
                                        <p className="dashboard-data-value">321</p>
                                        <p className="dashboard-data-name">Inicios de sesión</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FiSmartphone />
                                    <div className="d-flex flex-column">
                                        <p className="dashboard-data-value">95463</p>
                                        <p className="dashboard-data-name">Dispositivos</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FiActivity />
                                    <div className="d-flex flex-column">
                                        <p className="dashboard-data-value">1032</p>
                                        <p className="dashboard-data-name">Activos</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FiCode />
                                    <div className="d-flex flex-column">
                                        <p className="dashboard-data-value">732</p>
                                        <p className="dashboard-data-name">Transacciones</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row py-3 border-botom">
                                <div className="col-12 col-md-8 py-3">

                                    <div className="d-flex flex-column" id="table-container">
                                        <h3 className="text-center">Tabla de datos</h3>
                                        <table className="text-center">
                                            <thead>
                                                <tr>
                                                    <th>IP</th>
                                                    <th>País</th>
                                                    <th>Fecha</th>
                                                    <th>Dispositivos</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>192.168.0.100</td>
                                                    <td>México</td>
                                                    <td>2021-09-10</td>
                                                    <td>{Math.floor(Math.random() * 10000)}</td>
                                                </tr>
                                                <tr>
                                                    <td>192.168.0.100</td>
                                                    <td>México</td>
                                                    <td>2021-09-13</td>
                                                    <td>{Math.floor(Math.random() * 10000)}</td>
                                                </tr>
                                                <tr>
                                                    <td>192.168.0.100</td>
                                                    <td>Canadá</td>
                                                    <td>2021-09-4</td>
                                                    <td>{Math.floor(Math.random() * 10000)}</td>
                                                </tr>
                                                <tr>
                                                    <td>192.168.0.100</td>
                                                    <td>Estados Unidos</td>
                                                    <td>2021-09-29</td>
                                                    <td>{Math.floor(Math.random() * 10000)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                                <div className="col-12 col-md-4 py-3">
                                    <div className="d-flex flex-column" id="chart-container">
                                        <h3 className="text-center">Dispositivos</h3>
                                        <DoughnutChart data={CHART_DATA} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard
