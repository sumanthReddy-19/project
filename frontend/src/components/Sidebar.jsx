import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-logo">

                <div className="logo-icon">
                    🎓
                </div>

                <div>
                    <h4>Student MS</h4>
                    <small>Management System</small>
                </div>

            </div>


            <div className="sidebar-menu">

                <p className="menu-title">
                    MAIN MENU
                </p>


                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "sidebar-link active"
                            : "sidebar-link"
                    }
                >
                    <span>🏠</span>
                    Dashboard
                </NavLink>


                <NavLink
                    to="/students"
                    className={({ isActive }) =>
                        isActive
                            ? "sidebar-link active"
                            : "sidebar-link"
                    }
                >
                    <span>👨‍🎓</span>
                    Students
                </NavLink>


                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                        isActive
                            ? "sidebar-link active"
                            : "sidebar-link"
                    }
                >
                    <span>📚</span>
                    Courses
                </NavLink>


                <NavLink
                    to="/assignments"
                    className={({ isActive }) =>
                        isActive
                            ? "sidebar-link active"
                            : "sidebar-link"
                    }
                >
                    <span>📋</span>
                    Assignments
                </NavLink>


                <NavLink
                    to="/results"
                    className={({ isActive }) =>
                        isActive
                            ? "sidebar-link active"
                            : "sidebar-link"
                    }
                >
                    <span>📊</span>
                    Results
                </NavLink>

            </div>


            <div className="sidebar-bottom">

                <div className="admin-box">

                    <div className="admin-avatar">
                        A
                    </div>

                    <div>
                        <strong>Administrator</strong>
                        <small>Admin</small>
                    </div>

                </div>

            </div>

        </aside>
    );
}

export default Sidebar;