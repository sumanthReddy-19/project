const express = require("express");

const Student = require("../models/Student");

const router = express.Router();


// ========================================
// GET ALL STUDENTS
// ========================================

router.get("/", async (req, res) => {

    try {

        const students = await Student.find()
            .sort({ createdAt: -1 });

        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch students",
            error: error.message
        });

    }

});


// ========================================
// GET STUDENT BY ID
// ========================================

router.get("/:id", async (req, res) => {

    try {

        const student =
            await Student.findById(req.params.id);

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json(student);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch student",
            error: error.message
        });

    }

});


// ========================================
// ADD STUDENT
// ========================================

router.post("/", async (req, res) => {

    try {

        const {
            name,
            age,
            gender,
            branch,
            email,
            phone
        } = req.body;


        const student = new Student({
            name,
            age,
            gender,
            branch,
            email,
            phone
        });


        const savedStudent =
            await student.save();


        res.status(201).json({
            message: "Student added successfully",
            student: savedStudent
        });


    } catch (error) {

        if (error.code === 11000) {

            return res.status(400).json({
                message: "Email already exists"
            });

        }


        res.status(400).json({
            message: "Failed to add student",
            error: error.message
        });

    }

});


// ========================================
// UPDATE STUDENT
// ========================================

router.put("/:id", async (req, res) => {

    try {

        const updatedStudent =
            await Student.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );


        if (!updatedStudent) {

            return res.status(404).json({
                message: "Student not found"
            });

        }


        res.status(200).json({
            message: "Student updated successfully",
            student: updatedStudent
        });


    } catch (error) {

        res.status(400).json({
            message: "Failed to update student",
            error: error.message
        });

    }

});


// ========================================
// DELETE STUDENT
// ========================================

router.delete("/:id", async (req, res) => {

    try {

        const deletedStudent =
            await Student.findByIdAndDelete(
                req.params.id
            );


        if (!deletedStudent) {

            return res.status(404).json({
                message: "Student not found"
            });

        }


        res.status(200).json({
            message: "Student deleted successfully"
        });


    } catch (error) {

        res.status(500).json({
            message: "Failed to delete student",
            error: error.message
        });

    }

});


module.exports = router;