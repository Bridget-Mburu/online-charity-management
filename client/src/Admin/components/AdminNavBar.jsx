import React from "react";
import { Link } from "react-router-dom";
import '../styles/sidebar.css';

const AdminNavBar = () => {
    return (
        <div className="sidebar">
            <div className="banner">
                Admin Dashboard
            </div>

            <ul>
                <li>
                    <Link to="/admin">
                        <span className="material-symbols-outlined icon_left">home</span>Home
                    </Link>
                </li>
                <li>
                    <Link to="/admin-requests">
                        <span className="material-symbols-outlined icon_left">volunteer_activism</span>Donation Request
                    </Link>
                </li>
                <li>
                    <Link to="/admin/users">
                        <span className="material-symbols-outlined icon_left">group</span>User Management
                    </Link>
                </li>
                <li>
                    <Link to="/admin/organizations">
                        <span className="material-symbols-outlined icon_left">corporate_fare</span>Organization Management
                    </Link>
                </li>
                <li>
                    <Link to="/logout">
                        <span className="material-symbols-outlined icon_left">logout</span>Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminNavBar;
