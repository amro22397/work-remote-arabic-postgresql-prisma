import { JobForm } from "@/models/jobForm";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

    mongoose.connect(process.env.MONGO_URL as string);

    try {

        const body = await req.json();

        console.log(body);

    const jobData = await JobForm.create(body);

    return NextResponse.json({
        success: true,
        message: "Job Form added successfully",
        data: jobData
    })

    } catch (error: any) {
        
        return NextResponse.json({
            success: false,
            message: "API Error: " + error.message,
        })

    }
}