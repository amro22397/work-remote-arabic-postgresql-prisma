import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '@/lib/db';
import { JobForm } from '@/models/jobForm';
import mongoose from 'mongoose';
// model import 


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    
    await connectToDatabase();
    const session = await getServerSession(req, res, authOptions);
    console.log(session?.user?.email);


    if (!session) {
        return res.status(401).json({
            message: "Unauthorized",
            success: false,
        })
    }

    const { jobTitle, location, isWorkRemotely, datePosted, allCountriesCheck } = await req.query;

    console.log(jobTitle, location, isWorkRemotely, datePosted, allCountriesCheck)

    mongoose.connect(process.env.MONGO_URL as string);

    let urlLocation = location;

    if (!location) {
      urlLocation = ""
    }


    if (req.method === "GET") {
        // find from db

        const jobs = await JobForm.find({
          country: { $regex: urlLocation, $options: "i" },
        });
      
        return res.status(200).json({
            success: true,
            data: jobs,
            message: "Jobs retrieved successfully",
        })
    }

    res.setHeader("Allow", ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`)


  } catch (error: any) {
    console.log('Error in handler', error);
    res.status(500).json({
        success: false,
        message: "Internal Server Error", 
        error: error.message
    })
  }
}
