import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
const baseURL= "http://localhost:3333";
export default function AddEmployee() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        emp_name: "",
        emp_id: "",
        joining_date: "",
        designation: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // await api.post("/add", form);
            await axios.post(baseURL+"/add",form);
            alert("Employee Added!");
            setForm({
                emp_name: "",
                emp_id: "",
                joining_date: "",
                designation: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-4">
            <h3>Employee Management System</h3>

            <form className="mt-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="emp_name"
                        value={form.emp_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Employee ID</label>
                    <input
                        type="text"
                        className="form-control"
                        name="emp_id"
                        value={form.emp_id}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Joining Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="joining_date"
                        value={form.joining_date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Designation</label>
                    <input
                        type="text"
                        className="form-control"
                        name="designation"
                        value={form.designation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button className="btn btn-primary">Add Employee</button>

                {/* Show Table Button */}
                <button
                    type="button"
                    className="btn btn-success ms-3"
                    onClick={() => navigate("/employees")}
                >
                    Show Table
                </button>
            </form>
        </div>
    );
}
