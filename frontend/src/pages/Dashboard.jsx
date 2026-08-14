import React, {
    useEffect,
    useState
} from "react";

import API from "../services/api";

function Dashboard() {

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchStudents();
    }, []);


    const fetchStudents = async () => {

        try {

            const response =
                await API.get("/students");

            setStudents(response.data);

        } catch (error) {

            console.error(
                "Error fetching students:",
                error
            );

        } finally {

            setLoading(false);

        }
    };


    const branchCount = {};


    students.forEach((student) => {

        const branch =
            student.branch || "Other";

        branchCount[branch] =
            (branchCount[branch] || 0) + 1;

    });


    return (

        <div className="dashboard-page">

            <div className="dashboard-header">

                <div>

                    <h2>
                        Dashboard
                    </h2>

                    <p>
                        Overview of your student management system
                    </p>

                </div>

            </div>


            <div className="dashboard-cards">

                <div className="dashboard-card">

                    <div className="card-icon blue">
                        👨‍🎓
                    </div>

                    <div>

                        <p>
                            Total Students
                        </p>

                        <h3>
                            {loading
                                ? "..."
                                : students.length}
                        </h3>

                    </div>

                </div>


                <div className="dashboard-card">

                    <div className="card-icon green">
                        📚
                    </div>

                    <div>

                        <p>
                            Total Courses
                        </p>

                        <h3>
                            0
                        </h3>

                    </div>

                </div>


                <div className="dashboard-card">

                    <div className="card-icon orange">
                        📋
                    </div>

                    <div>

                        <p>
                            Assignments
                        </p>

                        <h3>
                            0
                        </h3>

                    </div>

                </div>


                <div className="dashboard-card">

                    <div className="card-icon purple">
                        📊
                    </div>

                    <div>

                        <p>
                            Results
                        </p>

                        <h3>
                            0
                        </h3>

                    </div>

                </div>

            </div>


            <div className="dashboard-content">


                <div className="dashboard-box">

                    <div className="box-header">

                        <h3>
                            Recent Students
                        </h3>

                        <p>
                            Recently registered students
                        </p>

                    </div>


                    {students.length === 0 ? (

                        <div className="empty-message">
                            No students found.
                        </div>

                    ) : (

                        <div className="recent-students">

                            {students
                                .slice(-5)
                                .reverse()
                                .map((student) => (

                                    <div
                                        className="recent-student"
                                        key={student._id}
                                    >

                                        <div className="student-avatar">

                                            {student.name
                                                ?.charAt(0)
                                                .toUpperCase()}

                                        </div>


                                        <div className="student-details">

                                            <strong>
                                                {student.name}
                                            </strong>

                                            <span>
                                                {student.email}
                                            </span>

                                        </div>


                                        <span className="branch-badge">
                                            {student.branch}
                                        </span>

                                    </div>

                                ))}

                        </div>

                    )}

                </div>


                <div className="dashboard-box">

                    <div className="box-header">

                        <h3>
                            Students by Branch
                        </h3>

                        <p>
                            Branch distribution
                        </p>

                    </div>


                    {Object.keys(branchCount).map(
                        (branch) => (

                            <div
                                className="branch-row"
                                key={branch}
                            >

                                <span className="branch-name">
                                    {branch}
                                </span>

                                <div className="branch-progress">

                                    <div
                                        className="branch-progress-fill"
                                        style={{
                                            width:
                                                `${(branchCount[branch] / students.length) * 100}%`
                                        }}
                                    />

                                </div>

                                <strong>
                                    {branchCount[branch]}
                                </strong>

                            </div>

                        )
                    )}

                </div>

            </div>


            <div className="dashboard-box system-info">

                <div>

                    <h3>
                        System Overview
                    </h3>

                    <p>
                        Student Management System is running successfully.
                    </p>

                </div>

                <div className="system-status">

                    <span></span>

                    System Online

                </div>

            </div>

        </div>
    );
}

export default Dashboard;