import React from "react";

function Navbar() {
    return (
        <header className="navbar-top">

            <div>
                <h5>
                    Student Management System
                </h5>

                <p>
                    Manage students, courses and results
                </p>
            </div>


            <div className="navbar-admin">

                <div className="notification">
                    🔔
                </div>

                <div className="navbar-avatar">
                    A
                </div>

                <div className="admin-details">

                    <strong>
                        Administrator
                    </strong>

                    <span>
                        Admin
                    </span>

                </div>

            </div>

        </header>
    );
}

export default Navbar;