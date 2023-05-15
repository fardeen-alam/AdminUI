import {
    CreditCard,
    Dashboard,
    PersonOutline,
    StoreMallDirectory,
    LocalShipping,
    InsertChart,
    NotificationsNone,
    SettingsSystemDaydream,
    SettingsApplications,
    AccountCircle,
    ExitToApp,
    AccountCircleOutlined,
    SettingsApplicationsOutlined,
    Settings,
    InsertChartOutlined,
    LocalShippingOutlined,
    DashboardCustomizeOutlined,
    DashboardOutlined,
} from "@mui/icons-material";
import React from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/darkModeContext";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <DashboardOutlined className="icon" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutline className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreMallDirectory className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>

                    <li>
                        <CreditCard className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlined className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartOutlined className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNone className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICES</p>
                    <li>
                        <SettingsSystemDaydream className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <Settings className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlined className="icon" />
                        <span>Profile</span>
                    </li>
                    <li onClick={handleLogout}>
                        <ExitToApp className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
};

export default Sidebar;
