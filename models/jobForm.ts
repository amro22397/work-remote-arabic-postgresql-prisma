import { model, models, Schema } from "mongoose";


const jobFormSchema = new Schema({
    jobTitle: {
        type: String,
    },

    jobType: {
        type: String,
    },

    jobDuration: {
        type: String,
        // unique: true,
    },

    isThereSalary: {
        type: Boolean,
        // unique: true,
    },

    jobSalary: {
        type: Number,
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

    jobFormLink: {
        type: String,
        // unique: true,
    },

    wantEasyApply: {
        type: Boolean,
        // unique: true,
    },

    isThereContact: {
        type: Boolean,
        // unique: true,
    },

    currency:  {
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

    theOtherJobDuration: {
        type: String,
        // unique: true,
    },

    description: {
        type: String,
        // unique: true,
    },

    emailRef: {
        type: String,
        // unique: true,
    },

}, { timestamps: true })


export const JobForm = models?.JobForm || model("JobForm", jobFormSchema)