import { Link } from "react-router-dom"
import "./sidebar.scss"

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li className="text-center text-bold"><Link className="py-3" to="/dashboard">Dashboard</Link></li>
                <li className="text-center text-bold"><Link className="py-3" to="/billing">Billing</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar