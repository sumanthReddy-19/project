const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();


// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());

app.use(express.json());


// ========================================
// HOME ROUTE
// ========================================

app.get("/", (req, res) => {

    res.json({
        message: "Student Management System API is running"
    });

});


// ========================================
// STUDENT ROUTES
// ========================================

app.use("/api/students", studentRoutes);


// ========================================
// MONGODB CONNECTION
// ========================================

mongoose
    .connect(process.env.MONGO_URI)

    .then(() => {

        console.log(
            "MongoDB connected successfully"
        );


        app.listen(
            process.env.PORT,
            () => {

                console.log(
                    `Server running on http://localhost:${process.env.PORT}`
                );

            }
        );

    })

    .catch((error) => {

        console.error(
            "MongoDB connection failed:",
            error.message
        );

    });