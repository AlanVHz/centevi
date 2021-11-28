import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'

export const Billing = (props) => {
    return (
        <>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <div className="container">
                    <div className="row card-style">
                        <h3 className="border-botom d-flex align-items-center">Billing!...</h3>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Billing

