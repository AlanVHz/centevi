import { Link } from "react-router-dom"
import "./sidebar.scss"

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li className="text-center py-3 text-bold"><Link to="/dashboard">Dashboard</Link></li>
                <li className="text-center py-3 text-bold"><Link to="/billing">Billing</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar