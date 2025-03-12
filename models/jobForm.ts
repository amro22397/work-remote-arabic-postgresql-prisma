import { model, models, Schema } from "mongoose";


const jobFormSchema = new Schema({
    jobTitle: {
        type: String,
        // unique: true,
    },

    jobType: {
        type: String,
        // unique: true,
    },

    jobDuration: {
        type: String,
        // unique: true,
    },

    isThereSalary: {
        type: String,
        // unique: true,
    },

    jobSalary: {
        type: String,
        // unique: true,
    },

    jobSalaryPer: {
        type: String,
        // unique: true,
    },

    country: {
        type: String,
        // unique: true,
    },

    state: {
        type: String,
        // unique: true,
    },

    city: {
        type: String,
        // unique: true,
    },

    jobPhoto: {
        type: String,
        // unique: true,
    },

    isThereContact: {
        type: String,
        // unique: true,
    },

    contactPhoto: {
        type: String,
        // unique: true,
    },

    contactName: {
        type: String,
        // unique: true,
    },

    contactEmail: {
        type: String,
        // unique: true,
    },

    contactNumber: {
        type: String,
        // unique: true,
    },
}, { timestamps: true })


export const JobForm = models?.JobForm || model("JobForm", jobFormSchema)