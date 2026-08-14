import React, {
    useEffect,
    useState
} from "react";

import API from "../services/api";

function Students() {

    const [students, setStudents] =
        useState([]);

    const [search, setSearch] =
        useState("");

    const [loading, setLoading] =
        useState(true);

    const [showForm, setShowForm] =
        useState(false);

    const [formData, setFormData] =
        useState({
            name: "",
            age: "",
            gender: "",
            branch: "",
            email: "",
            phone: ""
        });


    useEffect(() => {
        fetchStudents();
    }, []);


    const fetchStudents = async () => {

        try {

            const response =
                await API.get("/students");

            setStudents(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response =
                await API.post(
                    "/students",
                    formData
                );

            const newStudent =
                response.data.student ||
                response.data;

            setStudents([
                ...students,
                newStudent
            ]);

            setFormData({
                name: "",
                age: "",
                gender: "",
                branch: "",
                email: "",
                phone: ""
            });

            setShowForm(false);

            alert(
                "Student added successfully"
            );

        } catch (error) {

            console.error(error);

            alert(
                "Unable to add student"
            );

        }
    };


    const filteredStudents =
        students.filter((student) => {

            const text =
                search.toLowerCase();

            return (
                student.name
                    ?.toLowerCase()
                    .includes(text) ||

                student.email
                    ?.toLowerCase()
                    .includes(text) ||

                student.branch
                    ?.toLowerCase()
                    .includes(text)
            );

        });


    return (

        <div className="students-page">

            <div className="students-header">

                <div>

                    <h2>
                        Students
                    </h2>

                    <p>
                        Manage student records
                    </p>

                </div>


                <button
                    className="add-student-btn"
                    onClick={() =>
                        setShowForm(true)
                    }
                >
                    + Add Student
                </button>

            </div>


            {showForm && (

                <div className="student-form-card">

                    <div className="form-header">

                        <div>

                            <h3>
                                Add New Student
                            </h3>

                            <p>
                                Enter student information
                            </p>

                        </div>

                        <button
                            className="close-btn"
                            onClick={() =>
                                setShowForm(false)
                            }
                        >
                            ×
                        </button>

                    </div>


                    <form
                        onSubmit={handleSubmit}
                    >

                        <div className="form-grid">

                            <div className="form-group">

                                <label>
                                    Student Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Age
                                </label>

                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Gender
                                </label>

                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Gender
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>


                            <div className="form-group">

                                <label>
                                    Branch
                                </label>

                                <select
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Branch
                                    </option>

                                    <option value="CSE">
                                        CSE
                                    </option>

                                    <option value="AI&ML">
                                        AI&ML
                                    </option>

                                    <option value="ECE">
                                        ECE
                                    </option>

                                    <option value="EEE">
                                        EEE
                                    </option>

                                    <option value="IT">
                                        IT
                                    </option>

                                </select>

                            </div>


                            <div className="form-group">

                                <label>
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        <div className="form-actions">

                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={() =>
                                    setShowForm(false)
                                }
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="save-btn"
                            >
                                Save Student
                            </button>

                        </div>

                    </form>

                </div>

            )}


            <div className="student-tools">

                <input
                    type="text"
                    placeholder="Search students..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="search-input"
                />

            </div>


            <div className="students-card">

                {loading ? (

                    <div className="loading-message">
                        Loading students...
                    </div>

                ) : (

                    <div className="table-responsive">

                        <table className="students-table">

                            <thead>

                                <tr>
                                    <th>Student</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Branch</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>

                            </thead>


                            <tbody>

                                {filteredStudents.map(
                                    (student) => (

                                        <tr
                                            key={student._id}
                                        >

                                            <td>

                                                <div className="student-name">

                                                    <div className="student-table-avatar">

                                                        {student.name
                                                            ?.charAt(0)
                                                            .toUpperCase()}

                                                    </div>

                                                    <strong>
                                                        {student.name}
                                                    </strong>

                                                </div>

                                            </td>

                                            <td>
                                                {student.age}
                                            </td>

                                            <td>
                                                {student.gender}
                                            </td>

                                            <td>

                                                <span className="branch-tag">
                                                    {student.branch}
                                                </span>

                                            </td>

                                            <td>
                                                {student.email}
                                            </td>

                                            <td>
                                                {student.phone}
                                            </td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Students;