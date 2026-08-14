const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        age: {
            type: Number,
            required: true,
            min: 1,
            max: 100
        },

        gender: {
            type: String,
            required: true
        },

        branch: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;