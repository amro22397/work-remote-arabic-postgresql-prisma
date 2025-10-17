// import { JobForm } from "@/models/jobForm";
// import mongoose from "mongoose";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

    // mongoose.connect(process.env.MONGO_URL as string);

    try {

        const body = await req.json();

        console.log(body);

    // const jobData = await JobForm.create(body);

    const jobData = await prisma.jobForm.create({
        data: body
    })

    return NextResponse.json({
        success: true,
        message: "Job Form added successfully",
        data: jobData
    })

    } catch (error) {
        
        return NextResponse.json({
            success: false,
            message: "API Error creating job form: " + error,
        })

    }
}